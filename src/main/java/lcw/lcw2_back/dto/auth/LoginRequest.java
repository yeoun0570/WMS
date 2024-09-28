package lcw.lcw2_back.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
@Setter
public class LoginRequest {
    private String userId;
    private String password;
}
