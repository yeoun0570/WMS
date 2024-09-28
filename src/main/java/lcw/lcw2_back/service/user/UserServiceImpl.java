package lcw.lcw2_back.service.user;

import lcw.lcw2_back.domain.user2.Login;
import lcw.lcw2_back.domain.user2.User;
import lcw.lcw2_back.dto.user.LoginDTO;
import lcw.lcw2_back.dto.user.UserDTO;
import lcw.lcw2_back.dto.user.page.PageUserRequestDTO;
import lcw.lcw2_back.dto.user.page.PageUserResponseDTO;
import lcw.lcw2_back.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final ModelMapper modelMapper;
    private final UserMapper userMapper;


    @Override
    public PageUserResponseDTO<UserDTO> getUserList(PageUserRequestDTO pageUserRequestDTO) {
        List<User> users = userMapper.selectUserList(pageUserRequestDTO);
        modelMapper.typeMap(Login.class, LoginDTO.class);
        modelMapper.typeMap(User.class, UserDTO.class).addMappings(mapper -> {mapper.map(User::getLogin, UserDTO::setLoginDTO);});
        List<UserDTO> dto = users.stream().map(user -> modelMapper.map(user, UserDTO.class)).toList();
        return PageUserResponseDTO.<UserDTO>withAll().dtoList(dto).total(dto.size()).pageUserRequestDTO(pageUserRequestDTO).build();
    }


    @Override
    public UserDTO getUserOne(LoginDTO loginDTO) {
        modelMapper.typeMap(Login.class, LoginDTO.class);
        modelMapper.typeMap(User.class, UserDTO.class).addMappings(mapper -> {mapper.map(User::getLogin, UserDTO::setLoginDTO);});
        User user = userMapper.selectUserById(modelMapper.map(loginDTO, Login.class));
        return modelMapper.map(user, UserDTO.class);
    }


    @Override
    public boolean updateUserInfo(UserDTO userDTO) {
        modelMapper.typeMap(LoginDTO.class, Login.class);
        modelMapper.typeMap(UserDTO.class, User.class).addMappings(mapper -> mapper.map(UserDTO::getLoginDTO, User::setLogin));
        int result = userMapper.updateUserInfo(modelMapper.map(userDTO, User.class));
        return result > 0;
    }


    @Override
    public boolean updateUserStatus(LoginDTO loginDTO) {
        int result = userMapper.updateUserStatus(modelMapper.map(loginDTO, Login.class));
        return result > 0;
    }


    @Override
    public LoginDTO getLogin(String userId) {
        return modelMapper.map(userMapper.getLoginVo(userId), LoginDTO.class);
    }


}
