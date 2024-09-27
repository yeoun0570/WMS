package lcw.lcw2_back.outbound.mapper;

// import lcw.lcw2_back.domain.outbound.OutboundPK;
import lcw.lcw2_back.domain.outbound.Outbound;
import lcw.lcw2_back.dto.outbound.page.PageOutboundRequestDTO;
import lcw.lcw2_back.mapper.OutboundMapper;
        import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class OutboundMapperTests {
    @Autowired
    private OutboundMapper outboundMapper;

    @Test
    public void updateOutboundApproveTest() {
        List<Long> ids = new ArrayList<>();
        ids.add(1L);
        ids.add(3L);

        outboundMapper.updateOutboundApprove(ids);
    }

    @Test
    public void selectOutboundNotDoneList() {
        PageOutboundRequestDTO pageOutboundRequestDTO = PageOutboundRequestDTO.builder()
                .page(1)
                .size(15)
                .outboundMart(true)
                .item("Product Y")
                .build();

        List<Outbound> voList = outboundMapper.selectOutboundNotDoneList(pageOutboundRequestDTO);
        voList.forEach(vo-> System.out.println(vo));
    }

    @Test
    public void getCountOutboundNotDoneList() {
        PageOutboundRequestDTO pageOutboundRequestDTO = PageOutboundRequestDTO.builder()
                .page(1)
                .size(5)
                .build();

        int total = outboundMapper.getCountOutboundNotDoneList(pageOutboundRequestDTO);
    }

    @Test
    public void selectOutboundDoneListTest() {
        PageOutboundRequestDTO pageOutboundRequestDTO = PageOutboundRequestDTO.builder()
                .page(1)
                .size(5)
                .item("Product Z")
                .outboundMart(true)
                .build();

        List<Outbound> voList = outboundMapper.selectOutboundDoneList(pageOutboundRequestDTO);
        voList.forEach(vo-> System.out.println(vo));

    }
}