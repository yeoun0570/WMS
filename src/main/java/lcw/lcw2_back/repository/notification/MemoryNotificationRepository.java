package lcw.lcw2_back.repository.notification;

import lcw.lcw2_back.domain.notification.Notification;
import lcw.lcw2_back.service.notification.NotificationService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class MemoryNotificationRepository implements NotificationRepository {

    private static Map<Integer,Notification> storage = new HashMap<>();
    private static int seq = 0;
    @Override
    public void save(Notification notification) {
        notification.setNotification_id(++seq);
        storage.put(notification.getNotification_id(),notification);
    }

    @Override
    public List<Notification> findByUserId(int user_id) {

        List<Notification> ret = new ArrayList<>();
        for (Notification notification : storage.values()) {
            if(user_id != notification.getUser_id()) continue;
            ret.add(notification);
        }
        return ret;
    }

    @Override
    public void deleteById(int notification_id) {
        storage.remove(notification_id);
    }

    @Override
    public void updateById(int notification_id, Notification notification) {
        storage.replace(notification_id,notification);
    }
}
