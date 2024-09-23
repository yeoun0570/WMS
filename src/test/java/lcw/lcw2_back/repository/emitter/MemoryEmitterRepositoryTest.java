package lcw.lcw2_back.repository.emitter;

import lcw.lcw2_back.domain.notification.Notification;
import lcw.lcw2_back.domain.notification.NotificationType;
import org.hibernate.annotations.DialectOverride;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Date;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class MemoryEmitterRepositoryTest {

    EmitterRepository emitterRepository;
    Long TIMEOUT = 3600000L;

    @BeforeEach
    public void beforeEach(){
        emitterRepository = new MemoryEmitterRepository();
    }
    @Test
    @DisplayName("새 Emitter 추가")
    public void saveTest() throws Exception{
        //given
        int userId = 1;
        String emitterId = System.currentTimeMillis()+"@"+userId;
        SseEmitter sseEmitter = new SseEmitter(TIMEOUT);
        //when, then
        Assertions.assertDoesNotThrow(()->emitterRepository.save(emitterId,sseEmitter));
    }
    @Test
    @DisplayName("수신한 이벤트를 캐시에 저장")
    public void saveEventCache() throws Exception{
        //given
        int notification_id=1;
        int userId = 1;
        String eventCacheId = System.currentTimeMillis()+"@"+userId;
        Notification notification = new Notification(eventCacheId,userId,"통지","내용", NotificationType.MYINFO);
        //when, then
        Assertions.assertDoesNotThrow(()->emitterRepository.saveEventCache(eventCacheId,notification));
    }
    @Test
    @DisplayName("회원ID로 연결된 Emitter 찾기")
    public void findEmitterByUserId()throws Exception{
        //given
        int userId = 1;
        String emitterId = String.valueOf(userId);
        SseEmitter sseEmitter = new SseEmitter(TIMEOUT);
        emitterRepository.save(emitterId,sseEmitter);
        //when
        SseEmitter result = emitterRepository.findEmitterByUserId(String.valueOf(userId));
        //then
        org.assertj.core.api.Assertions.assertThat(result).isEqualTo(sseEmitter);

    }
    @Test
    @DisplayName("회원ID로 받은 이벤트 찾기")
    public void findAllEventCacheByUserId()throws Exception{
        //given
        int userId = 1;
        String eventCacheId1 = System.currentTimeMillis()+"@"+userId;
        Notification notification1 = new Notification(eventCacheId1,userId,"통지","내용", NotificationType.MYINFO);
        emitterRepository.saveEventCache(eventCacheId1,notification1);
        Thread.sleep(100);

        String eventCacheId2 = System.currentTimeMillis()+"@"+userId;
        Notification notification2 = new Notification(eventCacheId2,userId,"통지","내용", NotificationType.MYINFO);
        emitterRepository.saveEventCache(eventCacheId2,notification2);
        Thread.sleep(100);

        String eventCacheId3 = System.currentTimeMillis()+"@"+userId;
        Notification notification3 = new Notification(eventCacheId3,userId,"통지","내용", NotificationType.MYINFO);
        emitterRepository.saveEventCache(eventCacheId3,notification3);
        Thread.sleep(100);

        //when
        Map<String, Object> result = emitterRepository.findAllEventCacheByUserId(String.valueOf(userId));
        //then
        org.assertj.core.api.Assertions.assertThat(result.size()).isEqualTo(3);
    }
    @Test
    @DisplayName("ID로 Emitter 제거")
    public void deleteById() throws Exception {
        //given
        int userId = 1;
        String emitterId =  String.valueOf(userId);
        SseEmitter sseEmitter = new SseEmitter(TIMEOUT);

        //when
        emitterRepository.save(emitterId, sseEmitter);
        emitterRepository.deleteById(emitterId);
        SseEmitter result = emitterRepository.findEmitterByUserId(emitterId);
        //then
        org.assertj.core.api.Assertions.assertThat(result).isNull();
    }

    @Test
    @DisplayName("모든 Emitter 제거")
    public void deleteAllEmitterId() throws Exception {

    }
    @Test
    @DisplayName("모든 이벤트 삭제")
    public void deleteAllEventCacheByUserId() throws Exception {
        //given
        int userId = 1;
        String eventCacheId1 =  System.currentTimeMillis()+"@"+userId;
        Notification notification1 = new Notification(eventCacheId1,userId, "통지","내용", NotificationType.MYINFO);
        emitterRepository.saveEventCache(eventCacheId1,notification1);

        Thread.sleep(100);

        String eventCacheId2 =  System.currentTimeMillis()+"@"+userId;
        Notification notification2 = new Notification(eventCacheId2,userId, "통지","내용",NotificationType.MYINFO);
        emitterRepository.saveEventCache(eventCacheId2,notification2);
        //when
        emitterRepository.deleteAllEventCacheByUserId(String.valueOf(userId));

        //then
        Assertions.assertEquals(0, emitterRepository.findAllEventCacheByUserId(String.valueOf(userId)).size());
    }
}