package lcw.lcw2_back.mapper;

import lcw.lcw2_back.domain.user2.Login;
import lcw.lcw2_back.domain.user2.User;
import lcw.lcw2_back.dto.user.page.PageUserRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    List<User> selectUserList(PageUserRequestDTO pageUserRequestDTO); //모든 사원 목록 조회하기
    User selectUserById(Login login); //한 명의 회원 정보 조회하기
    int updateUserInfo(User user); //회원 정보 수정하기
    int updateUserStatus(Login login); //사원아이디의 status 수정하기 (사원->비사원)
    Login getLoginVo(String userId); //사원아이디로 로그인 정보 조회(pw, role, status)
    void insertNewUser(User user); //사원 입력
}
