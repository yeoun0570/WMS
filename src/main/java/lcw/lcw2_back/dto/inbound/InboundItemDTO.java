package lcw.lcw2_back.dto.inbound;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InboundItemDTO {
    private Long itemId;

    private Long inboundId;

    private Long productId;

    private Long quantity;
}
