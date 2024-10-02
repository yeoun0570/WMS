package lcw.lcw2_back.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import lcw.lcw2_back.dto.chart.InboundSummaryDTO;
import lcw.lcw2_back.service.chart.ChartService;
import lcw.lcw2_back.dto.chart.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chart")
@Log4j2
public class ChartController {

    private final ChartService chartService;

    // 대기중인 출고 및 입고 요청 수
    @GetMapping("/pending_requests")
    public ResponseEntity<PendingRequestDTO> getPendingRequests(@RequestParam String userId) {
        int outboundPending = chartService.getCountOutboundNotDoneList(userId);
        int inboundPending = chartService.getCountInboundNotDoneList(userId);

        PendingRequestDTO pendingRequestsDTO = new PendingRequestDTO();
        pendingRequestsDTO.setOutboundPending(outboundPending); //출고 대기 중 요청 수
        pendingRequestsDTO.setInboundPending(inboundPending); //입고 대기 중 요청 수

        return ResponseEntity.ok(pendingRequestsDTO);
    }

    // 손실 기록 조회
    @GetMapping("/loss_history")
    public ResponseEntity<List<LossDTO>> getLossHistory(@RequestParam String userId) {
        List<LossDTO> lossHistory = chartService.getLoss(userId);
        return ResponseEntity.ok(lossHistory);
    }
    

    // 입고 관련 데이터 합산 (최근 7일 + 이번 달)
    @GetMapping("/inbound_summary")
    public ResponseEntity<InboundSummaryDTO> getInboundSummary(@RequestParam String userId) {
        int recentRequests = chartService.getCountInboundWeekendRequests(userId);
        int recentCompleted = chartService.getCountInboundWeekendDone(userId);
        int monthRequests = chartService.getCountInboundMonth(userId);
        int monthCompleted = chartService.getCountInboundMonthDone(userId);
        int monthNotApproved = chartService.getCountInboundMonthNotApproved(userId);
        int monthApproved = chartService.getCountInboundMonthApproved(userId);

        InboundSummaryDTO inboundSummaryDTO = new InboundSummaryDTO();
        inboundSummaryDTO.setRecentInboundRequests(recentRequests);
        inboundSummaryDTO.setRecentInboundCompleted(recentCompleted);
        inboundSummaryDTO.setMonthInboundRequests(monthRequests);
        inboundSummaryDTO.setMonthInboundCompleted(monthCompleted);
        inboundSummaryDTO.setMonthInboundNotApproved(monthNotApproved);
        inboundSummaryDTO.setMonthInboundApproved(monthApproved);

        return ResponseEntity.ok(inboundSummaryDTO);
    }

    // 출고 관련 데이터 합산 (최근 7일 + 이번 달)
    @GetMapping("/outbound_summary")
    public ResponseEntity<OutboundSummaryDTO> getOutboundSummary(@RequestParam String userId) {
        int recentRequests = chartService.getCountOutboundWeekendRequests(userId);
        int recentCompleted = chartService.getCountOutboundWeekendComplete(userId);
        int monthRequests = chartService.getCountOutboundMonth(userId);
        int monthCompleted = chartService.getCountOutboundMonthDone(userId);
        int monthNotApproved = chartService.getCountOutboundMonthNotApproved(userId);
        int monthApproved = chartService.getCountOutboundMonthApproved(userId);

        OutboundSummaryDTO outboundSummaryDTO = new OutboundSummaryDTO();
        outboundSummaryDTO.setRecentOutboundRequests(recentRequests);
        outboundSummaryDTO.setRecentOutboundCompleted(recentCompleted);
        outboundSummaryDTO.setMonthOutboundRequests(monthRequests);
        outboundSummaryDTO.setMonthOutboundCompleted(monthCompleted);
        outboundSummaryDTO.setMonthOutboundNotApproved(monthNotApproved);
        outboundSummaryDTO.setMonthOutboundApproved(monthApproved);

        return ResponseEntity.ok(outboundSummaryDTO);
    }


    // 창고사용
    @GetMapping("/storage_used")
    public ResponseEntity<List<StorageUsedDTO>> chartStorageUsed(@RequestParam String userId) {
        List<StorageUsedDTO> storageUsed = chartService.getStorageUsed(userId);
        return ResponseEntity.ok(storageUsed);
    }
    
    //재고 추이
    @GetMapping("/stock_tend")
//    public ResponseEntity<Map<String, List<StockTendDTO>>> chartStockTend(@RequestParam String userId) {
    public ResponseEntity<Map<String, List<Long>>> chartStockTend(@RequestParam String userId) {
//        List<StockTendDTO> stockTend = chartService.getStockTend(userId);

//        return ResponseEntity.ok(stockTend);

        Map<String, List<Long>> map = new HashMap<>();
    for (int i = 1; i <= 5; i++) {
      List<Long> list = new ArrayList<>();
      for (int j = 1; j <= 12; j++) {
        long x = (long) Math.max(0, 1000.0 + (Math.random() * 1000 - 500));
        list.add(x);
      }
      map.put("상품" + i, list);
    }

    log.info("입고 : " + map);

        return ResponseEntity.ok(map);
    }
}
