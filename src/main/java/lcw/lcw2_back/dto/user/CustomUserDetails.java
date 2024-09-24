package lcw.lcw2_back.dto.user;

import lcw.lcw2_back.vo.user.UserVO;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@RequiredArgsConstructor
@AllArgsConstructor
public class CustomUserDetails implements UserDetails {

    private final UserVO userVO;

    //만약에 중복 로그인이 적용안되면 아래 방법 활용하기
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        CustomUserDetails that = (CustomUserDetails) o;
//        return Objects.equals(userVO, that.userVO);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(userVO);
//    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() { //사용자의 특정 권한 리턴. ROLE 값 리턴
        Collection<GrantedAuthority> collection = new ArrayList<>();
        collection.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return userVO.getUserPosition();
            }
        });
        return collection;
    }

    @Override
    public String getPassword() {
        return userVO.getUserPw();
    }

    @Override
    public String getUsername() {
        return userVO.getUserId();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        boolean isEnabled = userVO.getUserStatus() != null && userVO.getUserStatus() == (byte) 1;
        return isEnabled;
    }
}
