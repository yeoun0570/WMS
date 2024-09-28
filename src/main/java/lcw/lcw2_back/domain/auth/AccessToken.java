package lcw.lcw2_back.domain.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class AccessToken {
    private String accessToken;
    private String userId;
    private Date expiration;
}
