package lcw.lcw2_back.controller;

import lcw.lcw2_back.service.outbound.OutboundServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class OutboundController {

    private final OutboundServiceImpl outboundService;

    @PostMapping("/api/outbound/update_request")
    public String approveOutboundRequests(@RequestParam(name = "outboundId") List<Long> outboundIds) {
        outboundService.approveOutboundRequests(outboundIds);
        return "redirect:/api/outbound/list";
    }
}
