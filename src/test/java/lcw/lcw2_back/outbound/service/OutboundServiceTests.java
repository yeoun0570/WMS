package lcw.lcw2_back.outbound.service;


import lcw.lcw2_back.dto.outbound.OutboundDTO;
import lcw.lcw2_back.dto.outbound.OutboundItemDTO;
import lcw.lcw2_back.dto.outbound.page.PageOutboundRequestDTO;
import lcw.lcw2_back.dto.outbound.page.PageOutboundResponseDTO;
import lcw.lcw2_back.service.outbound.OutboundService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootTest
public class OutboundServiceTests {

    @Autowired
    OutboundService outboundService;

    @Test
    public void selectInboundNotDoneList() {
        PageOutboundRequestDTO pageOutboundRequestDTO = PageOutboundRequestDTO.builder()
                .page(1)
                .size(10)
                .build();

        PageOutboundResponseDTO<OutboundDTO> list = outboundService.getOutboundNotDoneList(pageOutboundRequestDTO);
        System.out.println(list);
    }

    @Test
    public void selectInboundDoneList() {
        PageOutboundRequestDTO pageOutboundRequestDTO = PageOutboundRequestDTO.builder()
                .page(1)
                .size(15)
                .startDate(LocalDateTime.of(2024,9,6,0,0,0))
                .endDate(LocalDateTime.of(2024,9,10,23,59,59))
                .build();

        PageOutboundResponseDTO<OutboundDTO> list = outboundService.getOutboundDoneList(pageOutboundRequestDTO);
        System.out.println(list);
    }

    @Test
    public void modifyApproveTest() {
        List<Long> outboundIds = new ArrayList<>();
        outboundIds.add(1L);
        outboundIds.add(3L);

        outboundService.modifyOutboundApprove(outboundIds);
    }

    @Test
    public void registerOutboundTest() {

        // 품목 리스트 생성
        OutboundItemDTO item1 = OutboundItemDTO.builder()
                .productId(1L)
                .quantity(55L)
                .build();

        OutboundItemDTO item2 = OutboundItemDTO.builder()
                .productId(2L)
                .quantity(24L)
                .build();

        // OutboundDTO 생성 및 품목 추가
        OutboundDTO outboundDTO = OutboundDTO.builder()
                .userId("user2")
                .receivingStorageId(1L)
                .status("NOT APPROVED")
                .items(Arrays.asList(item1, item2)) // 품목 리스트 설정
                .build();

        // 메서드 호출
        outboundService.registerOutbound(outboundDTO);

    }

}
