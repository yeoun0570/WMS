package lcw.lcw2_back.dto.auth;

import lcw.lcw2_back.domain.auth.AccessToken;
import lcw.lcw2_back.domain.auth.RefreshToken;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class LoginJwtResponse {
    private String accessToken;
    private String refreshToken;
}
