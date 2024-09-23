package lcw.lcw2_back.service.notification;

import lcw.lcw2_back.domain.notification.NotificationType;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface NotificationService {
    //로그인시sse연결
    public SseEmitter connectSSE(int userId);
    //통지보내기
    public void send(int receivedUserId, NotificationType notificationType,String content);
    //받은 통지 읽음 표시
    public void updateNotificationCache(String notificationId);
    //통지 삭제
    public void deleteNotification(String notificationId);
    //모든 통지 삭제
    public void deleteAllNotification(int userId);
}
