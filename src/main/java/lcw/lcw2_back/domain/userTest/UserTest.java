package lcw.lcw2_back.domain.userTest;

import lcw.lcw2_back.dto.auth.SignInRequest;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class UserTest {
    //사원아이디 : PK
    private String userId;
    //창고아이디 : FK
    private String storageId;
    //비번
    private String userPw;
    //이름
    private String userName;
    //생년월일
    private LocalDate userBirth;
    //이메일
    private String userEmail;
    //전화번호
    private String userContact;
    //직책
    private Role userPosition;
    //계정 상태 : 활성화는 1, 비활성화는 0
    private String userStatus;

    public UserTest(SignInRequest sr){
        this.userId = sr.getUserId();
        this.storageId = sr.getStorageId();
        this.userPw = sr.getUserPw();
        this.userName = sr.getUserName();
        this.userBirth = sr.getUserBirth();
        this.userEmail = sr.getUserEmail();
        this.userContact = sr.getUserContact();
        this.userPosition = Role.MANAGER;
        this.userStatus = null;
    }

}
