package lcw.lcw2_back.repository.notification;

import lcw.lcw2_back.domain.notification.Notification;

import java.util.List;

public interface NotificationRepository {
    void save(Notification notification);//알림 저장
    List<Notification> findByUserId(int user_id);
    void deleteById(int notification_id);
    void updateById(int notification_id,Notification notification);
}
