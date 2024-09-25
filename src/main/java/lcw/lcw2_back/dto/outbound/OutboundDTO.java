package lcw.lcw2_back.dto.outbound;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OutboundDTO {
    private Long outboundId;          // 엔티티에서 자동 생성되므로 읽기 전용으로 사용
    private String userId;             // 사용자 ID
    private Long productId;          // 제품 ID
    private Long quantity;    // 요청 수량
    private String status;
    private LocalDateTime requestDate;
    private LocalDateTime approvedDate;
    private LocalDateTime completeDate;
    private String productName;
    private Long receivingStorageId;
    private String storageFromName;  // 출고 창고명
    private String storageToName;    // 입고 창고명
    private boolean outboundMart;
    private List<Long> outboundIds;
    private List<OutboundItemDTO> items;
}
