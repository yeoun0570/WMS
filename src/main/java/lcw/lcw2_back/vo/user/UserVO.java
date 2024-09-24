package lcw.lcw2_back.vo.user;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserVO {
    private String userId;
    private int storageId;
    private String userPw;
    private String userName;
    private Date userBirth;
    private String userEmail;
    private String userContact;
    private String userPosition;
    private Byte userStatus;
    private String userAddress;
    private LocalDateTime regDate;
    private LocalDateTime modDate;
}