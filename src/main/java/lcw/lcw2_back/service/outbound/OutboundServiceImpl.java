package lcw.lcw2_back.service.outbound;

import lcw.lcw2_back.domain.outbound.Outbound;
import lcw.lcw2_back.dto.OutboundDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import lcw.lcw2_back.dto.Page.PageResponseDTO;
import lcw.lcw2_back.repository.OutboundRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OutboundServiceImpl implements OutboundService {

    private final ModelMapper modelMapper;
    private final OutboundRepository outboundRepository;

    //체크박스에서 체크한 요청 승인 serviceImpl
    @Override
    public void approveOutboundRequests(List<Long> outboundIds) {
        outboundRepository.updateStatusForOutboundIds(outboundIds);
    }

    //출고요청서 전체 조회(미승인, 승인 조건 만들어야 하는데 검색엔진으로 커버 가능한지 모르겠으니 일단 보류)
    @Override
    public Page<OutboundDTO> getOutboundNotDoneList(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return outboundRepository.findOutboundNotDone(pageable);
    }
}
