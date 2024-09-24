package lcw.lcw2_back.repository.notification;

import lcw.lcw2_back.domain.notification.Notification;

import java.util.List;

public interface NotificationRepository {
    Notification save(Notification notification);//알림 저장
    List<Notification> findByUserId(String user_id);
    void deleteById(String notification_id);
    void deleteAllByUserId(String user_id);
    void updateById(String notification_id);
}
