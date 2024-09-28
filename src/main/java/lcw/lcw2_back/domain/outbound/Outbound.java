package lcw.lcw2_back.domain.outbound;

import lcw.lcw2_back.dto.outbound.OutboundItemDTO;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Outbound {

    private Long outboundId;

    private String userId;

    private String status;

    private Long quantity;

    private LocalDateTime requestDate;

    private LocalDateTime approvedDate;

    private LocalDateTime completeDate;

    private String departStorageName;
    private Long arriveStorageId;
    private String arriveName;

    private boolean outboundMart;

    private String products;

    private List<OutboundItemDTO> items; // 필요시 item 리스트 유지
}

