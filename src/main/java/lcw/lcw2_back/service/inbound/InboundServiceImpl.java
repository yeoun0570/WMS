package lcw.lcw2_back.service.inbound;

import lcw.lcw2_back.domain.inbound.Inbound;
import lcw.lcw2_back.domain.inbound.InboundItem;
import lcw.lcw2_back.dto.inbound.InboundDTO;
import lcw.lcw2_back.dto.inbound.InboundDoneListDTO;
import lcw.lcw2_back.dto.inbound.InboundItemDTO;
import lcw.lcw2_back.dto.inbound.InboundNotDoneListDTO;
import lcw.lcw2_back.dto.inbound.page.PageInboundRequestDTO;
import lcw.lcw2_back.dto.inbound.page.PageInboundResponseDTO;
import lcw.lcw2_back.mapper.InboundMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class InboundServiceImpl implements InboundService{
    private final ModelMapper modelMapper;
    private final InboundMapper inboundMapper;

    @Override
    @Transactional
    public void registerInbound(InboundDTO inboundDTO) {
        // Inbound 등록
        Inbound inbound = modelMapper.map(inboundDTO, Inbound.class);
        inboundMapper.insertInbound(inbound);

        // 등록된 inboundId를 DTO에 설정
        inboundDTO.setInboundId(inbound.getInboundId());

        // 품목들 추가
        List<InboundItemDTO> items = inboundDTO.getItems();
        for (InboundItemDTO item : items) {
            item.setInboundId(inboundDTO.getInboundId());
            InboundItem inboundItem = modelMapper.map(item, InboundItem.class);

            inboundMapper.insertInboundItem(inboundItem);
        }
    }

    //출고요청 승인
    @Override
    public void modifyInboundApprove(List<Long> inboundIds) {
        inboundMapper.updateInboundApprove(inboundIds);
    }


    //출고요청 반려
    @Override
    public void modifyInboundRejected(List<Long> inboundIds) {
        inboundMapper.updateInboundRejected(inboundIds);
    }


    //출고요청서 조회
    @Override
    public PageInboundResponseDTO<InboundNotDoneListDTO> getInboundNotDoneList(PageInboundRequestDTO pageInboundRequestDTO) {
        List<Inbound> inboundList =inboundMapper.selectInboundNotDoneList(pageInboundRequestDTO);
        List<InboundNotDoneListDTO> inboundDTOList = inboundList.stream()
                .map(vo -> modelMapper.map(vo, InboundNotDoneListDTO.class))
                .collect(Collectors.toList());

        int total = inboundMapper.getCountInboundNotDoneList(pageInboundRequestDTO);

        PageInboundResponseDTO<InboundNotDoneListDTO> pageInboundResponseDTO = PageInboundResponseDTO.
                <InboundNotDoneListDTO>withAll().dtoList(inboundDTOList)
                .total(total).pageInboundRequestDTO(pageInboundRequestDTO).build();
        return pageInboundResponseDTO;
    }


    //출고현황 조회
    @Override
    public PageInboundResponseDTO<InboundDoneListDTO> getInboundDoneList(PageInboundRequestDTO pageInboundRequestDTO) {
        List<Inbound> inboundList =inboundMapper.selectInboundDoneList(pageInboundRequestDTO);
        List<InboundDoneListDTO> inboundDTOList = inboundList.stream()
                .map(vo -> modelMapper.map(vo, InboundDoneListDTO.class))
                .collect(Collectors.toList());

        int total = inboundMapper.getCountInboundDoneList(pageInboundRequestDTO);

        PageInboundResponseDTO<InboundDoneListDTO> pageInboundResponseDTO = PageInboundResponseDTO.
                <InboundDoneListDTO>withAll().dtoList(inboundDTOList)
                .total(total).pageInboundRequestDTO(pageInboundRequestDTO).build();
        return pageInboundResponseDTO;
    }

    @Override
    @Scheduled(cron = "0 0 16 * * *")
    public void modifyInboundCompleteOutbound() {
        inboundMapper.updateInboundCompleteOutbound();
    }

    @Override
    @Scheduled(cron = "0 0 * * * *")
    public void modifyInboundCompleteInbound() {
        inboundMapper.updateInboundCompleteInbound();
    }
}
