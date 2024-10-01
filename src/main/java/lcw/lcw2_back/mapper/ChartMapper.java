package lcw.lcw2_back.mapper;



public interface ChartMapper {
     
    
    
    //최근 7일 동안 출고요청/완료수
    int getCountOutboundRequests(Long userId);
    int getCountOutboundComplete(Long userId);

    //최근 7일 동안 입고요청/완료수
    int getCountInboundRequests(Long userId);
    int getCountInboundDone(Long userId);
}
