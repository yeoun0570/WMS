package lcw.lcw2_back.repository;

import lcw.lcw2_back.dto.OutboundDTO;
import lcw.lcw2_back.service.outbound.OutboundServiceImpl;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class OutboundRepositoryTests {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private OutboundRepository outboundRepository;

    @Test
    public void updateStatusForOutboundIdsTest() {
        OutboundServiceImpl outboundService = new OutboundServiceImpl(modelMapper, outboundRepository);

        List<Long> outboundIds = new ArrayList<>();
        outboundIds.add(0,1L);
        outboundIds.add(1,2L);
        outboundIds.add(2,3L);
        outboundIds.add(3,4L);
        outboundIds.add(4,5L);

        outboundService.approveOutboundRequests(outboundIds);
    }

    @Test
    public void findByStatusNotTest() {
        OutboundServiceImpl outboundService = new OutboundServiceImpl(modelMapper, outboundRepository);
        Page<OutboundDTO> result = outboundService.getOutboundNotDoneList(0,5);

        result.forEach(outboundDTO -> {
            System.out.println(outboundDTO); // DTO 객체를 콘솔에 출력
        });
    }
}
