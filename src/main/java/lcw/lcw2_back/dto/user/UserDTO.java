package lcw.lcw2_back.dto.user;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private LoginDTO loginDTO; //로그인 및 인가 데이터

    @NotNull
    private int storageId; //창고아이디 (창고 테이블과 조인)

    @NotEmpty
    @Size(max = 30)
    private String userName; //이름

    @NotEmpty
    private LocalDate userBirth; //생일

    @NotEmpty
    @Size(max = 30)
    private String userEmail; //이메일

    @NotEmpty
    @Size(max = 15)
    private String userContact; //전화번호

    @Nullable
    private LocalDateTime regDate; //최초 생성일

    @Nullable
    private LocalDateTime modDate; //최종 수정일


    //내 계정 페이지에서 수정할 때
    @Builder
    public UserDTO(String userEmail, String userContact, String userAddress, LoginDTO loginDTO) {
        this.loginDTO = loginDTO;
        this.userEmail = userEmail;
        this.userContact = userContact;
    }

    @Builder
    public UserDTO(LoginDTO loginDTO) {
        this.loginDTO = loginDTO;
    }


}
