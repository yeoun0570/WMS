package lcw.lcw2_back.dto.inbound;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InboundDTO {
    private Long inboundId;
    private String userId;
    private String status;
    private LocalDateTime requestDate;
    private LocalDateTime approvedDate;
    private LocalDateTime outboundCompleteDate;
    private LocalDateTime inboundCompleteDate;
    private Long departStorageId;
    private String departName;
    private List<InboundItemDTO> items;
    private List<Long> inboundIds;
}
