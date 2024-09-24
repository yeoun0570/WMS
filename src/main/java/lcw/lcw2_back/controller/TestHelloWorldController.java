package lcw.lcw2_back.controller;

import lcw.lcw2_back.service.notification.NotificationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

//프록시 설정한 리액트 프로젝트로 잘 데이터가 전달이 되는지 테스트하는 클래스.
//궁금하면 돌려봐 다들
@RestController
@AllArgsConstructor
public class TestHelloWorldController {
    private final NotificationService notificationService;

    @GetMapping("/api/test/hello")
    public String test(){
        return "Hello World";
    }
    @GetMapping("api/test/ko")
    public String test2(){
        return "lcw프로젝트입니다.";
    }
    @GetMapping("api/test/jw")
    public String test3(){
        return "고재현";
    }

    @GetMapping(value = "/api/test/notice", produces = "text/event-stream")
    @ResponseStatus(HttpStatus.OK)
    public SseEmitter sseConnect(@RequestParam(value = "userId" , defaultValue = "0")String userId){
        return notificationService.connectSSE(userId);
    }
}
