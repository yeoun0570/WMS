package lcw.lcw2_back.dto.chart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StockTendDTO {
    private LocalDate monthOfStock;
    private String productName;
    private int totalInbound;
    private int totalOutbound;
    private int stockChange;
}
