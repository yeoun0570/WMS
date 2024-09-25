package lcw.lcw2_back.repository.emitter;

import lcw.lcw2_back.domain.notification.Notification;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Repository
@NoArgsConstructor
public class MemoryEmitterRepository implements EmitterRepository{
    private final Map<String,SseEmitter> emitters = new ConcurrentHashMap<>();
    private final Map<String,Object> eventCache = new ConcurrentHashMap<>();

    @Override
    public SseEmitter save(String emitterId, SseEmitter sseEmitter) {
        emitters.put(emitterId,sseEmitter);
        return sseEmitter;
    }

    @Override
    public void saveEventCache(String eventCacheId, Object event) {
        //같은 키가 있는 경우 추가하지 않음
        if(eventCache.containsKey(eventCacheId)) return;
        eventCache.put(eventCacheId,event);
    }

    @Override
    public SseEmitter findEmitterByUserId(String userId) {
        return emitters.get(userId);
    }

    @Override
    public Map<String, Object> findAllEventCacheByUserId(String userId) {
        return eventCache.entrySet().stream()
                .filter(el->el.getKey().endsWith("@"+userId))
                .collect(Collectors.toMap(Map.Entry::getKey,Map.Entry::getValue));
    }

    @Override
    public void deleteById(String emitterId) {
        emitters.remove(emitterId);
    }

    @Override
    public void deleteAllEmitter() {
        emitters.clear();
    }

    @Override
    public void deleteEventCacheByNotificationId(String notification_id){
        eventCache.remove(notification_id);
    }
    @Override
    public void deleteAllEventCacheByUserId(String userId) {
        for (Map.Entry<String, Object> entry : eventCache.entrySet()) {
            if(!entry.getKey().endsWith("@"+userId)) continue;
            eventCache.remove(entry.getKey());
        }
    }

    @Override
    public void updateEventCacheByNotificationId(String notification_Id) {
        Notification readNotification = (Notification) eventCache.get(notification_Id);
        readNotification.setChecked(true);
        eventCache.replace(notification_Id,readNotification);
    }
}
