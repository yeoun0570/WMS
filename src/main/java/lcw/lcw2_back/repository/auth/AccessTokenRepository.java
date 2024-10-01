package lcw.lcw2_back.repository.auth;

import lcw.lcw2_back.domain.auth.AccessToken;

public interface AccessTokenRepository {
    public void addToken(AccessToken accessToken)throws NullPointerException;
    public void deleteTokenByUserId(String userId)throws NullPointerException;
    public AccessToken findTokenByUserId(String userId)throws NullPointerException;
}
