package lcw.lcw2_back.repository.auth;

import lcw.lcw2_back.domain.auth.RefreshToken;

public interface RefreshTokenRepository {
    public void addToken(RefreshToken accessToken);
    public void deleteTokenByUserId(String userId);
    public RefreshToken findTokenByUserId(String userId);
}
