package lcw.lcw2_back.repository.emitter;

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
        eventCache.put(eventCacheId,event);
    }

    @Override
    public Map<String, SseEmitter> findAllEmitterByUserId(String userId) {
        return emitters.entrySet().stream()
                .filter(el->el.getKey().endsWith(userId))
                .collect(Collectors.toMap(Map.Entry::getKey,Map.Entry::getValue));
    }

    @Override
    public Map<String, Object> findAllEventCacheByUserId(String userId) {
        return eventCache.entrySet().stream()
                .filter(el->el.getKey().endsWith(userId))
                .collect(Collectors.toMap(Map.Entry::getKey,Map.Entry::getValue));
    }

    @Override
    public void deleteById(String emitterId) {
        emitters.remove(emitterId);
    }

    @Override
    public void deleteAllEmitterByUserId(String userId) {
        for (Map.Entry<String, SseEmitter> entry : emitters.entrySet()) {
            if(!entry.getKey().endsWith(userId)) continue;
            emitters.remove(entry.getKey());
        }
    }

    @Override
    public void deleteAllEventCacheByUserId(String userId) {
        for (Map.Entry<String, Object> entry : eventCache.entrySet()) {
            if(!entry.getKey().endsWith(userId)) continue;
            eventCache.remove(entry.getKey());
        }
    }
}
