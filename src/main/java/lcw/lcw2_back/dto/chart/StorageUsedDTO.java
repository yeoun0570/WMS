package lcw.lcw2_back.dto.chart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StorageUsedDTO {
    private String storageName;
    private String productName;
    private int storageArea;
    private int stockQuantity;
    private int totalAreaUsed;
}
