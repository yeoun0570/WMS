package lcw.lcw2_back.outbound.controller;

import lcw.lcw2_back.controller.OutboundController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class OutboundControllerTests {
    @Autowired
    OutboundController outboundController;


//    @Test
//    public void requestListTest() {
//
//        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
//                .page(1)
//                .size(15)
//                .item("Product X")
//                .build();
//
//        outboundController.requestList(pageRequestDTO);
//
//    }
//
//    @Test
//    public void requestDoneListTest() {
//        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
//                .page(1)
//                .size(10)
//                .status("APPROVED")
//                .build();
//
//        outboundController.requestDoneList(pageRequestDTO);
//    }

//    @Test
//    public void writeOutboundTest() {
//        outboundController.writeOutbound();
//    }
}
