package lcw.lcw2_back.dto.chart;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PendingRequestDTO {
    private int outboundPending;
    private int inboundPending;
}
