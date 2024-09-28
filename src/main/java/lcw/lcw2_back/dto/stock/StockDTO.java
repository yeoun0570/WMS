package lcw.lcw2_back.dto.stock;

import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@ToString
public class StockDTO {

        private Long storageId;
        private Long productId;
        private Long stockQuantity;

        private String storageName;
        private String productName;


}
