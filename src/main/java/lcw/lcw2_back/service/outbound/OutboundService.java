package lcw.lcw2_back.service.outbound;

import lcw.lcw2_back.dto.outbound.OutboundDTO;
import lcw.lcw2_back.dto.outbound.page.PageOutboundRequestDTO;
import lcw.lcw2_back.dto.outbound.page.PageOutboundResponseDTO;

import java.util.List;

public interface OutboundService {
    //출고요청서 작성
    void registerOutbound(OutboundDTO outboundDTO);

    //체크박스에서 체크한 요청 승인 service
    void modifyOutboundApprove(List<Long> outboundIds);

    //체크박스에서 체크한 요청 승인 service
    void modifyOutboundRejected(List<Long> outboundIds);

    //출고요청서 전체 조회
    PageOutboundResponseDTO<OutboundDTO> getOutboundNotDoneList(PageOutboundRequestDTO pageOutboundRequestDTO);

    //출고목록(처리) 전체 조회
    PageOutboundResponseDTO<OutboundDTO> getOutboundDoneList(PageOutboundRequestDTO pageOutboundRequestDTO);
}
