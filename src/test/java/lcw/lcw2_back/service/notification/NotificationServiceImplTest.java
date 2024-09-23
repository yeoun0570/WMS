package lcw.lcw2_back.service.notification;

import lcw.lcw2_back.domain.notification.NotificationType;
import lcw.lcw2_back.repository.emitter.MemoryEmitterRepository;
import lcw.lcw2_back.repository.notification.MemoryNotificationRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NotificationServiceImplTest {

    NotificationService notificationService;

    @BeforeEach
    public void beforeEach(){
        notificationService =
                new NotificationServiceImpl(new MemoryNotificationRepository(),new MemoryEmitterRepository());
    }
    @Test
    @DisplayName("통지를 보냈을 때 상대방이 로그인하지 않은 상태일때")
    void connectSSE() {
        //given
        int userId = 1;
        notificationService.connectSSE(userId);

        //when, then
        notificationService.send(2, NotificationType.INBOUND,"test");

    }

    @Test
    void send() {
    }
}