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
import java.util.Date;
import java.util.List;

import static java.time.LocalTime.now;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserMapperTest {

    @Autowired
    private UserMapper userMapper;

    Login login = Login.builder()
            .userId("202413")
            .userPw("password")
            .userRole("ROLE_MANAGER")
            .userStatus(null)
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
        login.setUserStatus("0");
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
                .userEmail("hello@java.com")
                .userContact("java-java-java")
                .userBirth(LocalDate.of(1990, 1, 1))  // LocalDate로 설정
                .regDate(LocalDateTime.now())  // 현재 날짜 및 시간
                .modDate(LocalDateTime.now())  // 현재 날짜 및 시간
                .storageId(1)
                .login(login)
                .build();

        userMapper.insertNewUser(user);
    }

}