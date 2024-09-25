package lcw.lcw2_back.domain.inbound;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Inbound {

    private Long inboundId;

    private String userId;

    private String status;

    private Long quantity;

    private LocalDateTime requestDate;

    private LocalDateTime approvedDate;

    private LocalDateTime completeDate;

    private String shippingStorageName;

    private Long shippingStorageId;

    private String productName;

}
