package lcw.lcw2_back.domain.inbound;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Inbound {

    private Long inboundId;

    private String userId;

    private String status;

    private Long quantity;

    private LocalDate requestDate;

    private LocalDate approvedDate;

    private LocalDate inboundCompleteDate;
    private LocalDate outboundCompleteDate;

    private LocalDate startDate;
    private LocalDate endDate;

    private String departStorageName;
    private String arriveStorageName;

    private Long departStorageId;

    private String products;
}
