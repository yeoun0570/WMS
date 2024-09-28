package lcw.lcw2_back.dto.inbound;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InboundDoneListDTO {
    private Long inboundId;
    private String status;
    private LocalDateTime inboundCompleteDate;
    private String departStorageName;
    private String arriveName;
    private String products;
}
