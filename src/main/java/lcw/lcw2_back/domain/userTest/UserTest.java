package lcw.lcw2_back.domain.userTest;

import lcw.lcw2_back.domain.storage.Storage;
import lcw.lcw2_back.dto.auth.SignInRequest;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class UserTest {
    //사원아이디 : PK
    private String userId;
    //창고아이디 : FK
    private Storage storageId;
    //비번
    private String userPw;
    //이름
    private String userName;
    //생년월일
    private Date userBirth;
    //이메일
    private String userEmail;
    //전화번호
    private String userContact;
    //직책
    private Role userPosition;
    //계정 상태 : 활성화는 1, 비활성화는 0
    private Byte userStatus;
    //주소
    private String userAddress;
    private String userAddressDetail;
    private Integer zipcode;

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
        this.userAddress = sr.getUserAddress();
        this.userAddressDetail = sr.getUserAddressDetail();
        this.zipcode = sr.getZipcode();

    }

}
