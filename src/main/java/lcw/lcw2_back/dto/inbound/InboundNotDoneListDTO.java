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
public class InboundNotDoneListDTO {
    private Long inboundId;
    private String status;
    private LocalDateTime requestDate;
    private String departStorageName;
    private String arriveName;
    private String products;
}
