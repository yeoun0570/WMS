package lcw.lcw2_back.repository.auth;

import lcw.lcw2_back.domain.auth.AccessToken;

public interface AccessTokenRepository {
    public void addToken(AccessToken accessToken);
    public void deleteTokenByUserId(String userId);
    public AccessToken findTokenByUserId(String userId);
}
