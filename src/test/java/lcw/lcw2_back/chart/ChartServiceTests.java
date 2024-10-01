package lcw.lcw2_back.chart;

import lcw.lcw2_back.dto.chart.LossDTO;
import lcw.lcw2_back.service.chart.ChartService;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Log4j2
public class ChartServiceTests {
    @Autowired
    private ChartService chartService;

    @Test
    public void getCountInboundNotDoneListTest() {
        String userId = "U002";

        int total = chartService.getCountInboundNotDoneList(userId);
        log.info("테스트 : " + total);
    }

    @Test
    public void getCountOutboundNotDoneListTest() {
        String userId = "U002";

        int total = chartService.getCountOutboundNotDoneList(userId);
        log.info("테스트................" + total);
    }

    @Test
    public void getLossTest() {
        String userId = "U002";

        List<LossDTO> lossDTOList = chartService.getLoss(userId);
        log.info("테스트.................................." + lossDTOList);
    }
}
