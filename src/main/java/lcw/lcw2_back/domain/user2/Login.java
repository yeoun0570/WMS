package lcw.lcw2_back.domain.user2;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
public class Login {
    private String userId;

    private String userPw;

    private String userRole;

    private Byte userStatus;
}
