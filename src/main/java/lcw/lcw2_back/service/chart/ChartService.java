package lcw.lcw2_back.service.chart;

import lcw.lcw2_back.dto.chart.LossDTO;
import lcw.lcw2_back.dto.chart.StockTendDTO;
import lcw.lcw2_back.dto.chart.StorageUsedDTO;

import java.util.List;

public interface ChartService {
    //대기중인 출입고 요청수(미승인)

    int getCountOutboundNotDoneList(String userId);

    int getCountInboundNotDoneList(String userId);


    //최근 7일 동안 출고요청/완료수
    int getCountOutboundWeekendRequests(String userId);
    int getCountOutboundWeekendComplete(String userId);

    //최근 7일 동안 입고요청/완료수
    int getCountInboundWeekendRequests(String userId);
    int getCountInboundWeekendDone(String userId);


    //손실 - 이번달 지출 [{12일, ₩1405, 2024-09-10}]배열꼴
    List<LossDTO> getLoss(String userId);


    //이번달 입고 월간 누적
    //이번달 입고 예정량(미승인)
    int getCountInboundMonthNotApproved(String userId);
    //이번달 입고 처리중(승인)
    int getCountInboundMonthApproved(String userId);
    //이번달 입고완료
    int getCountInboundMonthDone(String userId);

    //이번달 총입고요청서 수
    int getCountInboundMonth(String userId);

    //이번달 출고 월간 누적
    //이번달 출고 예정량(미승인)
    int getCountOutboundMonthNotApproved(String userId);
    //이번달 출고 처리중(승인)
    int getCountOutboundMonthApproved(String userId);
    //이번달 출고완료
    int getCountOutboundMonthDone(String userId);

    //이번달 총입고요청서 수
    int getCountOutboundMonth(String userId);
    
    //창고사용률
    List<StorageUsedDTO> getStorageUsed(String userId);

    //재고추이
    List<StockTendDTO> getStockTend(String userId);
}
