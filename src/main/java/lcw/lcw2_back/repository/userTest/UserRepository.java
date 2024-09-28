package lcw.lcw2_back.repository.userTest;

import lcw.lcw2_back.domain.userTest.UserTest;

public interface UserRepository {
    void addUser(UserTest user);
    UserTest findByUserId(String userId);
}
