package lcw.lcw2_back.service.outbound;

import lcw.lcw2_back.domain.outbound.Outbound;
import lcw.lcw2_back.dto.OutboundDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface OutboundService {
    //체크박스에서 체크한 요청 승인 service
    void approveOutboundRequests(List<Long> outboundIds);

    //출고요청서 전체 조회(미승인, 승인 조건 만들어야 하는데 검색엔진으로 커버 가능한지 모르겠으니 일단 보류)
    Page<OutboundDTO> getOutboundNotDoneList(int page, int size);

    //출고목록(처리) 전체 조회(검색엔진 위와같은 이유로 보류)
    Page<OutboundDTO> getOutboundDoneList(int page, int size);
}
