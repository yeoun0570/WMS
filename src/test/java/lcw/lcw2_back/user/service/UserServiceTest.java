package lcw.lcw2_back.user.service;

import lcw.lcw2_back.domain.user2.Login;
import lcw.lcw2_back.domain.user2.User;
import lcw.lcw2_back.dto.outbound.page.PageOutboundRequestDTO;
import lcw.lcw2_back.dto.user.LoginDTO;
import lcw.lcw2_back.dto.user.UserDTO;
import lcw.lcw2_back.dto.user.page.PageUserRequestDTO;
import lcw.lcw2_back.dto.user.page.PageUserResponseDTO;
import lcw.lcw2_back.mapper.UserMapper;
import lcw.lcw2_back.service.user.UserService;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Log4j2
public class UserServiceTest {

    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;
    @Autowired
    ModelMapper modelMapper;

    PageUserRequestDTO pageUserRequestDTO = PageUserRequestDTO.builder()
            .page(1)
            .size(15)
            .userStatus("1")
            .build();

    UserDTO userDTO = UserDTO.builder()
            .loginDTO(LoginDTO.builder().userId("202409").userPw("newPASSWORDTEST").build())
            .userEmail("newEmail@test.com")
            .userContact("new-test-test")
            .build();

    @Test
    public void getUserListTest(){

//        log.info("List<> TEST");
//        log.info(userMapper.selectUserList(pageUserRequestDTO).toString());

//        log.info("Service TEST");
        PageUserResponseDTO<UserDTO> userList1 = userService.getUserList(pageUserRequestDTO);
        log.info(userList1.toString());
    }

    @Test
    public void getUserOneTest() {
        UserDTO userdto = userService.getUserOne(LoginDTO.builder().userId("202413").build());
        log.info(userdto.getLoginDTO().getUserId() != null);
        log.info(userdto.toString());
    }

    @Test
    public void mapperDTOTest() {
        List<User> userVO = userMapper.selectUserList(pageUserRequestDTO);
        List<UserDTO> userDTO = userVO.stream()
                .map(vo -> modelMapper.map(vo, UserDTO.class))
                .toList();
        log.info("Mapping TEST");
        log.info(userDTO.toString());

        PageUserResponseDTO<UserDTO> pageUserResponseDTO = userService.getUserList(pageUserRequestDTO);
        log.info("Page RESPONSE DTO TEST");
        log.info(pageUserResponseDTO.toString());
    }

    @Test
    public void serviceTest() {
        LoginDTO login = LoginDTO.builder().userId("202409").build();
        UserDTO userOne = userService.getUserOne(login);
        log.info("GET ONE TEST");
        log.info(userOne.toString());
        log.info(userOne.getLoginDTO().toString() != null);
    }

    @Test
    public void serviceTest2() {
//        User user = modelMapper.map(userDTO, User.class);
//        log.info(user.toString());
//        log.info(user.getLogin().toString() != null);

        modelMapper.typeMap(LoginDTO.class, Login.class);
        modelMapper.typeMap(UserDTO.class, User.class)
                .addMappings(mapper -> mapper.map(UserDTO::getLoginDTO, User::setLogin));
        User user = modelMapper.map(userDTO, User.class);

        log.info("여기부터 테스트!!!");
//        if (user.getLogin() != null) {
//            log.info(user.getLogin().toString());
//        } else {
//            log.info("Login is null");
//        }

        log.info(user.toString());
        int result = userMapper.updateUserInfo(user);
        log.info(result != 0);

    }

    @Test
    public void serviceTest3() {
        LoginDTO loginDTO = LoginDTO.builder()
                .userId("202413")
                .userStatus("2")
                .build();
        boolean result = userService.updateUserStatus(loginDTO);
        log.info("UPDATE USER STATUS TEST");
        log.info(result);
    }

    @Test
    public void serviceTest4() {
        LoginDTO loginDTO =userService.getLogin("202413");
        log.info(loginDTO);
    }



}
