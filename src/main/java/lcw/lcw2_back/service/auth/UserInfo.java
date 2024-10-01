package lcw.lcw2_back.service.auth;

import lcw.lcw2_back.domain.userTest.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@Getter
@Setter
public class UserInfo {
    private String userId;

    private String userName;

    private Role userPosition;

    private Long storageId;

    private LocalDate userBirth;

    private String userEmail;

    private String userContact;

    private String userProfile;

}
