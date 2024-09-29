package lcw.lcw2_back.dto.outbound;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OutboundNotDoneListDTO {
    private Long outboundId;
    private String status;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate requestDate;
    private String departStorageName;
    private String arriveName;
    private boolean outboundMart;
    private String products;
}
