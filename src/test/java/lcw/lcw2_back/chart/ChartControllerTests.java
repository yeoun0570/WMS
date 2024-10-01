package lcw.lcw2_back.chart;

import lcw.lcw2_back.controller.ChartController;
import lcw.lcw2_back.dto.chart.PendingRequestDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class ChartControllerTests {
    @Autowired
    private ChartController chartController;

    @Test
    public void getPendingRequests() {
        String userId = "U002";
        PendingRequestDTO pendingRequestDTO = PendingRequestDTO.builder()
                .inboundPending(10)
                .outboundPending(20)
                .build();

        chartController.getPendingRequests(userId);

        log.info(chartController.getPendingRequests(userId));

    }

    @Test
    public void getLossHistoryTest() {
        String userId = "U002";
        chartController.getLossHistory(userId);
    }

    @Test
    public void getInboundSummaryTest() {
        String userId = "U002";
        chartController.getInboundSummary(userId);
    }

    @Test
    public void getOutboundSummaryTest() {
        String userId = "U002";
        chartController.getOutboundSummary(userId);
    }

    @Test
    public void chartStorageUsedTest() {
        String userId = "U002";
        chartController.chartStorageUsed(userId);
    }

    @Test
    public void chartStockTendTest() {
        String userId = "U002";
        chartController.chartStockTend(userId);
    }
}


