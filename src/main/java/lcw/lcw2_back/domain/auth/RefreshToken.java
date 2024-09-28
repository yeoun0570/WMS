package lcw.lcw2_back.domain.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class RefreshToken {
    private String refreshToken;
    private String userId;
    private Date expiration;
}
