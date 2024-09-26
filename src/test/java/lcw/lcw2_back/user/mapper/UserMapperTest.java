package lcw.lcw2_back.user.mapper;

import lcw.lcw2_back.domain.user2.Login;
import lcw.lcw2_back.domain.user2.User;
import lcw.lcw2_back.dto.user.page.PageUserRequestDTO;
import lcw.lcw2_back.mapper.UserMapper;
import org.junit.jupiter.api.Test;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserMapperTest {

    @Autowired
    private UserMapper userMapper;

    Login login = Login.builder()
            .userId("202409")
            .userPw("password")
            .userRole("ROLE_MANAGER")
            .userStatus((byte) 1)
            .build();

    @Test
    public void selectUserList() {
        PageUserRequestDTO page = PageUserRequestDTO.builder()
                .page(1)
                .size(15)
                .build();

        List<User> users = userMapper.selectUserList(page);


        users.forEach(user -> System.out.println(user));
    }


    @Test
    public void selectUser() {
        User user = userMapper.selectUserById(login);
        System.out.println(user.toString());
    }


    @Test
    public void updateUser() {
        User user = User.builder()
                .login(login)
                .userEmail("test@test.com")
                .userContact("test-test-test")
                .build();

        userMapper.updateUserInfo(user);

    }


    @Test
    public void updateUserStatus() {
        login.setUserStatus((byte) 0);
        userMapper.updateUserStatus(login);
    }


    @Test
    public void getLogin() {
        Login login = userMapper.getLoginVo("202409");
        System.out.println(login.toString());
    }


    @Test
    public void insertUser() {
        User user = User.builder()
                .userName("테스트")
                .userEmail("javaisthebest@java.com")
                .userContact("java-java-java")
                .userBirth(LocalDate.parse("2000-01-01"))
                .regDate(LocalDateTime.parse("2024-08-10T00:00:00"))  // 시간 정보 추가
                .modDate(LocalDateTime.parse("2024-08-10T00:00:00"))
                .storageId(1)
                .login(login)
                .build();

        userMapper.insertNewUser(user);
    }
}