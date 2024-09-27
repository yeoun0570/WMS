package lcw.lcw2_back.mapper;


import lcw.lcw2_back.domain.inbound.Inbound;
import lcw.lcw2_back.domain.inbound.InboundItem;
import lcw.lcw2_back.dto.inbound.page.PageInboundRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface InboundMapper {
    //입고요청서 작성
    void insertInbound(Inbound inbound);

    //입고요청서 작성할 때 품목 추가
    void insertInboundItem(InboundItem inboundItem);

    //입고요청서 전체조회
    List<Inbound> selectInboundNotDoneList(PageInboundRequestDTO pageInboundRequestDTO);

    //입고요청서 전체조회 수
    int getCountInboundNotDoneList(PageInboundRequestDTO pageInboundRequestDTO);

    //입고처리목록 전체조회
    List<Inbound> selectInboundDoneList(PageInboundRequestDTO pageInboundRequestDTO);

    //입고처리목록 전체조회 수
    int getCountInboundDoneList(PageInboundRequestDTO pageInboundRequestDTO);

    //입고요청 승인하기
    void updateInboundApprove(List<Long> inboundIds);

    //입고요청 반려하기
    void updateInboundRejected(List<Long> inboundIds);

    //입고요청 출고완료 처리
    void updateInboundCompleteOutbound();

    //입고요청 배송완료 처리
    void updateInboundCompleteInbound();
}
