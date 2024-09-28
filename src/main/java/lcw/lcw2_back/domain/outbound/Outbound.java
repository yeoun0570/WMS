package lcw.lcw2_back.domain.outbound;

import lcw.lcw2_back.dto.outbound.OutboundItemDTO;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Outbound {

    private Long outboundId;

    private String userId;

    private String status;

    private Long quantity;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate requestDate;

    private LocalDate approvedDate;

    private LocalDate outboundCompleteDate;
    private LocalDate inboundCompleteDate;

    private String departStorageName;
    private Long arriveStorageId;
    private String arriveName;

    private boolean outboundMart;

    private String products;

    private List<OutboundItemDTO> items; // 필요시 item 리스트 유지
}

