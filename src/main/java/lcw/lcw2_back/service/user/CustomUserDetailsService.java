package lcw.lcw2_back.service.user;

import lcw.lcw2_back.dto.user.CustomUserDetails;
import lcw.lcw2_back.mapper.UserMapper;
import lcw.lcw2_back.vo.user.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
//시큐리티를 통해 인증을 진행하는 방법은 사용자가 Login 페이지를 통해 아이디, 비밀번호를 POST 요청시 스프링 시큐리티가 데이터베이스에 저장된 회원 정보를 조회 후 비밀번호를 검증하고 서버 세션 저장소에 해당 아이디에 대한 세션을 저장한다.

    private final UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException { //사용자가 로그인 하면 검증을 해줘요
        Optional<UserVO> result = userMapper.findById(userId);
        UserVO userVO = result.orElseThrow();
        return new CustomUserDetails(userVO);
    }

}
