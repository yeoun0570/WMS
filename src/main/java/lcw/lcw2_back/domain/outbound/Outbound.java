package lcw.lcw2_back.domain.outbound;

import jakarta.persistence.*;
import lcw.lcw2_back.domain.storage.Storage;
import lcw.lcw2_back.domain.user.User;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Outbound {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long outboundId;

    @Column(name = "product_id")
    private Long productId;

    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private User userId;

//    @Column(name = "REQUEST_QUANTITY", length = 50, nullable = false)
//    private Long requestQuantity;

    @Column(name = "STATUS", nullable = false)
    private String status;

    @Column(name = "REQUEST_DATE")
    private LocalDateTime requestDate;

    @Column(name = "APPROVED_DATE")
    private LocalDateTime approvedDate;

    @Column(name = "COMPLETE_DATE")
    private LocalDateTime completeDate;

    @ManyToOne
    @JoinColumn(name = "RECEIVING_STORAGE_ID")
    private Storage receivingStorageId;

    @Column(name = "OUTBOUND_MART")
    private boolean outboundMart;

    // OutboundItem과 1:N 관계 설정
    @OneToMany //(mappedBy = "outbound", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    private List<Item> items = new ArrayList<>();
}
