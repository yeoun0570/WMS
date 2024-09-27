package lcw.lcw2_back.domain.waybill;

import lcw.lcw2_back.domain.inbound.InboundItem;
import lcw.lcw2_back.domain.outbound.OutboundItem;
import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@ToString
public class WaybillVO {

    private Long waybillId;
    private Long outboundId;
    private Long inboundId;
    private Date createdDate;
    private String departAddress;
    private String arriveAddress;
    private String departAddressDetail;
    private String arriveAddressDetail;
    private Long departZipcode;
    private Long arriveZipcode;
    private String departStorageName;
    private String arriveStorageName;

    private List<OutboundItem> outboundItemList;
    private List<InboundItem> inboundItemList;

}
