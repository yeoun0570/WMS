package lcw.lcw2_back.repository.auth;

import lcw.lcw2_back.domain.auth.AccessToken;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class MemoryAccessTokenRepository implements AccessTokenRepository{
    private final Map<String,AccessToken> storage = new ConcurrentHashMap<>();

    @Override
    public void addToken(AccessToken accessToken) {
        storage.put(accessToken.getUserId(), accessToken);
    }

    @Override
    public void deleteTokenByUserId(String userId) {
        storage.remove(userId);
    }

    @Override
    public AccessToken findTokenByUserId(String userId) {
        return storage.get(userId);
    }
}
