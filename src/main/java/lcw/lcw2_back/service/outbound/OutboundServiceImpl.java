package lcw.lcw2_back.service.outbound;

import lcw.lcw2_back.repository.OutboundRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

}
