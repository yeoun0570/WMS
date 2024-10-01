package lcw.lcw2_back.service.auth;

import lcw.lcw2_back.domain.user.User;
import lcw.lcw2_back.dto.auth.LoginJwtResponse;
import lcw.lcw2_back.dto.auth.LoginRequest;
import lcw.lcw2_back.dto.auth.SignInRequest;
import lcw.lcw2_back.exception.auth.UserIdNotFoundException;
import lcw.lcw2_back.exception.auth.UserPasswordNotCorrectException;

public interface AuthService {
    //로그인
    public LoginJwtResponse login(LoginRequest loginRequest) throws UserIdNotFoundException, UserPasswordNotCorrectException;
    //로그아웃
    public void logout(String userId);
    //회원가입
    public void signIn(SignInRequest signInRequest);
    //토큰재발급
    public LoginJwtResponse reissueAccessToken(String refreshToken);
    //로그인 유저의 정보를 가져옵니다.
    public User getLoginUserInfo();
}
