package lcw.lcw2_back.domain.user;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lcw.lcw2_back.domain.storage.Storage;
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

    @ManyToOne
    @JoinColumn(name = "STORAGE_ID", nullable = false)
    private Storage storageId;
}
