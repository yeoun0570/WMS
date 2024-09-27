package lcw.lcw2_back.domain.stock;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@ToString
public class StockVO {

    private Long storageId;
    private Long productId;
    private Long stockQuantity;

    private String storageName;
    private String productName;


}

