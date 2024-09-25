package lcw.lcw2_back.dto.outbound;

import lcw.lcw2_back.domain.outbound.Outbound;
import lcw.lcw2_back.domain.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OutboundItemDTO {
    private Long itemId;

    private Long outboundId;

    private Long productId;

    private Long quantity;
}
