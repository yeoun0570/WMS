package lcw.lcw2_back.service.outbound;

import lcw.lcw2_back.domain.outbound.Outbound;
import lcw.lcw2_back.dto.OutboundDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface OutboundService {
    //체크박스에서 체크한 요청 승인 service
    void approveOutboundRequests(List<Long> outboundIds);

    Page<OutboundDTO> getOutboundNotDoneList(int page, int size);
}
