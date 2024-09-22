package lcw.lcw2_back.repository;

import jakarta.transaction.Transactional;
import lcw.lcw2_back.domain.outbound.Outbound;
import lcw.lcw2_back.dto.OutboundDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OutboundRepository extends JpaRepository<Outbound, Long> {
    
    //체크박스에서 체크한 요청 승인 dao
    @Modifying
    @Transactional
    @Query("UPDATE Outbound o SET o.status = 'APPROVED' WHERE o.outboundPK.outboundId IN :ids")
    void updateStatusForOutboundIds(@Param("ids") List<Long> outboundIds);

    //출고요청서 전체 조회(미승인, 승인 조건 만들어야 하는데 검색엔진으로 커버 가능한지 모르겠으니 일단 보류)
    //만약 입고창고가 null이면 마트출고여부(outboundMart)가 1이 되고 입고창고 값을 '하나로마트'로 고정
    @Query(" SELECT o.outboundPK.outboundId, p.productName, s_from.storageName, s_to.storageName, o.requestQuantity, o.status, o.requestDate " +
            "FROM Outbound o " +
            "JOIN User u ON o.userId = u.userId " +
            "JOIN Storage s_from ON u.storageId = s_from.storageId " +
            "JOIN Storage s_to ON o.receivingStorageId = s_to.storageId " +
            "JOIN Product p ON o.outboundPK.productId = p.productId " +
            "ORDER BY o.outboundPK.outboundId DESC ")
    Page<OutboundDTO> findOutboundNotDone(Pageable pageable);

    //출고목록(처리) 전체 조회(검색엔진 위와같은 이유로 보류)
    @Query("SELECT o.outboundPK.outboundId, p.productName, s.storageName, o.requestQuantity, o.status, o.requestDate " +
            " FROM Outbound o, User u, Storage s, Product p " +
            " WHERE o.userId = u.userId AND u.storageId = s.storageId AND o.outboundPK.productId = p.productId " +
            " ORDER BY o.outboundPK.outboundId DESC ")
    Page<Outbound> findOutboundDone(Pageable pageable);
}
