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
    private String departStorageName;
    private List<InboundItemDTO> items;
}
