package lcw.lcw2_back.dto.user;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    @NotEmpty
    @Size(max = 20)
    private String userId;
    @NotEmpty
    private int storageId;
    @NotEmpty
    @Size(max = 30)
    private String userPw;
    @NotEmpty
    @Size(max = 30)
    private String userName;
    @NotEmpty
    private Date userBirth;
    @NotEmpty
    @Size(max = 30)
    private String userEmail;
    @NotEmpty
    @Size(max = 15)
    private String userContact;
    @NotEmpty
    @Size(max = 20)
    private String userPosition;
    @NotEmpty
    private Byte userStatus;
    @Nullable
    @Size(max = 100)
    private String userAddress;
    @Nullable
    private LocalDateTime regDate;
    @Nullable
    private LocalDateTime modDate;
}
