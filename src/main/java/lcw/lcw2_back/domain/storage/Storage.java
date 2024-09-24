package lcw.lcw2_back.domain.storage;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Storage {
    @Id
    private Long storageId;

    @Column(name = "STORAGE_NAME", nullable = false)
    private String storageName;

    @Column(name = "ADDRESS", nullable = false)
    private String address;

    @Column(name = "ADDRESS_DETAIL", nullable = false)
    private String addressDetail;

    @Column(name = "ZIPCODE", nullable = false)
    private Long zipcode;

    @Column(name = "STORAGE_AREA", nullable = false)
    private Long storageArea;
}
