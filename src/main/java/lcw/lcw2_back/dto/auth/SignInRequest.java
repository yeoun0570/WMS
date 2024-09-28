package lcw.lcw2_back.dto.auth;

import lcw.lcw2_back.domain.storage.Storage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class SignInRequest {
    private String userId;
    private Storage storageId;
    private String userPw;
    private String userName;
    private Date userBirth;
    private String userEmail;
    private String userContact;
    private String userAddress;
    private String userAddressDetail;
    private Integer zipcode;
}
