package lcw.lcw2_back.domain.outbound;

import jakarta.persistence.*;
import lcw.lcw2_back.domain.User;
import lombok.*;

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

    @Column(length = 50, nullable = false)
    private Long requestQuantity;

    @Column(nullable = false)
    private String status;
}
