package lcw.lcw2_back.service.outbound;

import java.util.List;

public interface OutboundService {
    //체크박스에서 체크한 요청 승인 service
    void approveOutboundRequests(List<Long> outboundIds);
}
