package lcw.lcw2_back.outbound;

import lcw.lcw2_back.domain.outbound.Item;
import lcw.lcw2_back.domain.outbound.Outbound;
// import lcw.lcw2_back.domain.outbound.OutboundPK;
import lcw.lcw2_back.domain.storage.Storage;
import lcw.lcw2_back.domain.user.User;
import lcw.lcw2_back.dto.OutboundDTO;
import lcw.lcw2_back.repository.OutboundRepository;
import lcw.lcw2_back.service.outbound.OutboundServiceImpl;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
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
        outboundIds.add(0, 1L);
        outboundIds.add(1, 2L);
        outboundIds.add(2, 3L);
        outboundIds.add(3, 4L);
        outboundIds.add(4, 5L);

        outboundService.approveOutboundRequests(outboundIds);
    }

    @Test
    public void findOutboundNotDoneTest() {
        OutboundServiceImpl outboundService = new OutboundServiceImpl(modelMapper, outboundRepository);
        Page<OutboundDTO> result = outboundService.getOutboundNotDoneList(0, 15);

        result.forEach(outboundDTO -> {
            System.out.println(outboundDTO); // DTO 객체를 콘솔에 출력
        });
    }

    @Test
    public void findByStatusDoneTest() {
        OutboundServiceImpl outboundService = new OutboundServiceImpl(modelMapper, outboundRepository);
        Page<OutboundDTO> result = outboundService.getOutboundDoneList(0, 5);

        result.forEach(outboundDTO -> {
            System.out.println(outboundDTO); // DTO 객체를 콘솔에 출력
        });
    }

    @Test
    public void insertTest() {
        User user = User.builder()
                .userId("user1")
                .build();

        Storage storage = Storage.builder()
                .storageId(2L)
                .build();

        List<Item> itemList = new ArrayList<>();

        for (int i = 0; i < 2; i++) {
            Item item = Item.builder()
                    .quantity(100L)
                    .build();
            itemList.add(item);
        }

        Outbound outbound = Outbound.builder()
                .userId(user)
                .items(itemList)
                .status("NOT APPROVED")
                .requestDate(LocalDateTime.now())
                .receivingStorageId(storage)
                .outboundMart(false)
                .build();

        outboundRepository.save(outbound);
    }
}