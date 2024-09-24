package lcw.lcw2_back.service.user;

import lcw.lcw2_back.dto.user.UserDTO;
import lcw.lcw2_back.mapper.UserMapper;
import lcw.lcw2_back.vo.user.UserVO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final ModelMapper modelMapper;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public boolean joinProcess(UserDTO userDTO) {
        UserVO userVO = modelMapper.map(userDTO, UserVO.class);
        userVO.setUserPw(bCryptPasswordEncoder.encode(userDTO.getUserPw()));
        return userMapper.save(userVO);
    }

    public UserDTO findById(String userId) {
        Optional<UserVO> userVO = userMapper.findById(userId);
        return modelMapper.map(userVO.orElseThrow(), UserDTO.class);
    }

    public List<UserDTO> findByStatus (Byte userStatus) {
        List<UserVO> vos = userMapper.findAllByStatus(userStatus);
        List<UserDTO> dto = new ArrayList<>();
        vos.forEach(vo -> dto.add(modelMapper.map(vo, UserDTO.class)));
        return dto;
    }

    public boolean update(UserDTO dto) {
        UserVO userVO = modelMapper.map(dto, UserVO.class);
        userVO.setUserPw(bCryptPasswordEncoder.encode(dto.getUserPw()));
        return userMapper.update(userVO);
    }

    public void updateStatus(List<String> userIds, byte status) {
        userIds.forEach(userId -> userMapper.updateStatus(userId, status));
    }

}
