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
    private String userId;             // 사용자 ID
    private Long productId;          // 제품 ID
    private Long requestQuantity;    // 요청 수량
    private String status;
    private LocalDateTime requestDate;
    private LocalDateTime approvedDate;
    private LocalDateTime completeDate;
    private String productName;
    private String storageFromName;  // 출고 창고명
    private String storageToName;    // 입고 창고명

    public OutboundDTO(Long outboundId, String productName, String storageFromName, Long requestQuantity, String status, LocalDateTime requestDate, String storageToName) {
        this.outboundId = outboundId;
        this.productName = productName;
        this.storageFromName = storageFromName;
        this.requestQuantity = requestQuantity;
        this.status = status;
        this.requestDate = requestDate;
        this.storageToName = storageToName;
    }

    public OutboundDTO(Long outboundId, String productName, String storageFromName, Long requestQuantity, LocalDateTime completeDate, String status, String storageToName) {
        this.outboundId = outboundId;
        this.productName = productName;
        this.storageFromName = storageFromName;
        this.requestQuantity = requestQuantity;
        this.completeDate = completeDate;
        this.status = status;
        this.storageToName = storageToName;
    }
}
