package lcw.lcw2_back.repository.userTest;

import lcw.lcw2_back.domain.userTest.UserTest;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class MemoryUserRepository implements UserRepository{
    private final Map<String, UserTest> storge = new ConcurrentHashMap<>();

    @Override
    public void addUser(UserTest user) {
        storge.put(user.getUserId(), user);
    }

    @Override
    public UserTest findByUserId(String userId) {
        return storge.get(userId);
    }
}
