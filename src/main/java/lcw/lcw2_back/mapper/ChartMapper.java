package lcw.lcw2_back.mapper;

import lcw.lcw2_back.domain.chart.DatasetVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ChartMapper {

    //대기중인 출입고 요청수(미승인)
    int selectCountOutboundNotDoneList(String userId);
    int selectCountInboundNotDoneList(String userId);



    //최근 7일 동안 출고요청/완료수
    int selectCountOutboundWeekendRequests(String userId);
    int selectCountOutboundWeekendComplete(String userId);

    //최근 7일 동안 입고요청/완료수
    int selectCountInboundWeekendRequests(String userId);
    int selectCountInboundWeekendDone(String userId);


    //손실 - 이번달 지출 [{12일, ₩1405, 2024-09-10}]배열꼴
    List<DatasetVO> selectLoss(String userId);


    //이번달 입고 월간 누적
    //이번달 입고 예정량(미승인)
    int selectCountInboundMonthNotApproved(String userId);
    //이번달 입고 처리중(승인)
    int selectCountInboundMonthApproved(String userId);
    //이번달 입고완료
    int selectCountInboundMonthDone(String userId);

    //이번달 총입고요청서 수
    int selectCountInboundMonth(String userId);

    //이번달 출고 월간 누적
    //이번달 출고 예정량(미승인)
    int selectCountOutboundMonthNotApproved(String userId);
    //이번달 출고 처리중(승인)
    int selectCountOutboundMonthApproved(String userId);
    //이번달 출고완료
    int selectCountOutboundMonthDone(String userId);

    //이번달 총입고요청서 수
    int selectCountOutboundMonth(String userId);

    
    
    //재고 추이
    List<DatasetVO> selectStockTend(String userId);

    //창고 사용률
    List<DatasetVO> selectStorageUsed(String userId);
}