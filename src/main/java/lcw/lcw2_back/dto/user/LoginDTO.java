package lcw.lcw2_back.dto.user;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    @NotNull
    @Size(min = 6, max = 6)
    private String userId; //사원번호이자, 로그인 아이디

    @NotNull
    @Size(min = 10, max = 16)
    private String userPw; //패스워드

    @NotEmpty
    @Size(max = 20)
    private String userRole; //직책 : ROLE_MANAGER, ROLE_USER

    @Nullable
    private Byte userStatus; //계정 상태 : 0 - 비활성  1- 활성 Null - 미승인


    @Builder
    public LoginDTO(String userId, String userPw) { //내 계정 페이지에서 비밀번호 수정 시 또는 로그인 시
        this.userId = userId;
        this.userPw = userPw;
    }

    @Builder
    public LoginDTO(String userId, String userPw, String userRole) {
        this.userId = userId;
        this.userPw = userPw;
        this.userRole = userRole;
    }

    @Builder
    public LoginDTO(String userId) {
        this.userId = userId;
    }

    @Builder
    public LoginDTO(String userId, @Nullable Byte userStatus) {
        this.userId = userId;
        this.userStatus = userStatus;
    }


}
