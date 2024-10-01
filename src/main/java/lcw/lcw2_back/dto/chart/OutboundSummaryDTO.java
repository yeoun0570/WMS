package lcw.lcw2_back.dto.chart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OutboundSummaryDTO {
    private int recentOutboundRequests;
    private int recentOutboundCompleted;
    private int monthOutboundRequests;
    private int monthOutboundCompleted;
    private int monthOutboundNotApproved;
    private int monthOutboundApproved;
}
