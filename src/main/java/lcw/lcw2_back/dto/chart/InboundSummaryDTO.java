package lcw.lcw2_back.dto.chart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InboundSummaryDTO {
    private int recentInboundRequests;
    private int recentInboundCompleted;
    private int monthInboundRequests;
    private int monthInboundCompleted;
    private int monthInboundNotApproved;
    private int monthInboundApproved;
}
