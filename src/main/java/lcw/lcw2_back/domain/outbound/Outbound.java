package lcw.lcw2_back.domain.outbound;

import jakarta.persistence.*;
import lcw.lcw2_back.domain.user.User;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Outbound {

    @EmbeddedId
    private OutboundPK outboundPK;

    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private User userId;

    @Column(name = "REQUEST_QUANTITY", length = 50, nullable = false)
    private Long requestQuantity;

    @Column(name = "STATUS", nullable = false)
    private String status;

    @Column(name = "REQUEST_DATE")
    private LocalDateTime requestDate;

    @Column(name = "APPROVED_DATE")
    private LocalDateTime approvedDate;

    @Column(name = "COMPLETE_DATE")
    private LocalDateTime completeDate;

    @Column(name = "RECEIVING_STORAGE_ID")
    private Long receivingStorageId;

    @Column(name = "OUTBOUND_MART")
    private boolean outboundMart;
}
