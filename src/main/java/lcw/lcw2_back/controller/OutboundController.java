package lcw.lcw2_back.controller;

import lcw.lcw2_back.domain.outbound.Outbound;
import lcw.lcw2_back.dto.OutboundDTO;
import lcw.lcw2_back.service.outbound.OutboundServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class OutboundController {

    private final OutboundServiceImpl outboundService;

    //체크박스에서 체크한 요청 승인 controller
    @PostMapping("/api/outbound/update_request")
    public String approveOutboundRequests(@RequestParam(name = "outboundId") List<Long> outboundIds) {
        outboundService.approveOutboundRequests(outboundIds);
        return "redirect:/api/outbound/list";
    }

    //출고요청서 조회(미승인, 승인 조건 만들어야 하는데 검색엔진으로 커버 가능한지 모르겠으니 일단 보류)
    @GetMapping("/api/outbound/list")
    public Page<OutboundDTO> getOutboundNotDone(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size) {

        Page<OutboundDTO> result = outboundService.getOutboundNotDoneList(page, size);

        int total = result.getTotalPages();
        boolean next = result.hasNext();
        boolean prev = result.hasPrevious();

        return result;
    }
}
