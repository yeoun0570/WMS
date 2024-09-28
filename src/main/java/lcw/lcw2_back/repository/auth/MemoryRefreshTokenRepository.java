package lcw.lcw2_back.repository.auth;

import lcw.lcw2_back.domain.auth.AccessToken;
import lcw.lcw2_back.domain.auth.RefreshToken;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class MemoryRefreshTokenRepository implements RefreshTokenRepository{
    private final Map<String, RefreshToken> storage = new ConcurrentHashMap<>();
    @Override
    public void addToken(RefreshToken refreshToken) {
        storage.put(refreshToken.getUserId(),refreshToken);
    }

    @Override
    public void deleteTokenByUserId(String userId) {
        storage.remove(userId);
    }

    @Override
    public RefreshToken findTokenByUserId(String userId) {
        return storage.get(userId);
    }
}
