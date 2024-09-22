package lcw.lcw2_back.domain.user;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {
    @Id
    private String userId;

    @JoinColumn(name = "STORAGE_ID", nullable = false)
    private Long storageId;
}
