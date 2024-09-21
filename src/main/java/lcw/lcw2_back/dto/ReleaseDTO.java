package lcw.lcw2_back.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReleaseDTO {
    private Long releaseId;          // 엔티티에서 자동 생성되므로 읽기 전용으로 사용
    private Long userId;             // 사용자 ID
    private Long productId;          // 제품 ID
    private Long requestQuantity;    // 요청 수량
    private String requestComment;   // 요청 코멘트
}
