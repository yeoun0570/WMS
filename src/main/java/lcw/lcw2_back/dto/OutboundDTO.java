package lcw.lcw2_back.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OutboundDTO {
    private Long outboundId;          // 엔티티에서 자동 생성되므로 읽기 전용으로 사용
    private Long userId;             // 사용자 ID
    private Long productId;          // 제품 ID
    private Long requestQuantity;    // 요청 수량
    private String status;
    private LocalDateTime requestDate;
    private LocalDateTime approvedDate;
    private LocalDateTime completeDate;
    private String productName;
    private String storageFromName;  // 출고 창고명
    private String storageToName;    // 입고 창고명

    public OutboundDTO(Long outboundId, String productName, String storageFromName, String storageToName, Long requestQuantity, String status, LocalDateTime requestDate) {
        this.outboundId = outboundId;
        this.productName = productName;
        this.storageFromName = storageFromName;
        this.storageToName = storageToName;
        this.requestQuantity = requestQuantity;
        this.status = status;
        this.requestDate = requestDate;
    }
}
