package lcw.lcw2_back.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//프록시 설정한 리액트 프로젝트로 잘 데이터가 전달이 되는지 테스트하는 클래스.
//궁금하면 돌려봐 다들
@RestController
public class TestHelloWorldController {
    @GetMapping("/api/hello")
    public String test(){
        return "Hello World";
    }
    @GetMapping("api/ko")
    public String test2(){
        return "lcw프로젝트입니다.";
    }
    @GetMapping("api/jw")
    public String test3(){
        return "고재현";
    }
}
