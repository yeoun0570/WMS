package lcw.lcw2_back.repository;

import jakarta.transaction.Transactional;
import lcw.lcw2_back.domain.outbound.Outbound;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OutboundRepository extends JpaRepository<Outbound, Long> {
    
    //체크박스에서 체크한 요청 승인 dao
    @Modifying
    @Transactional
    @Query("UPDATE Outbound r SET r.status = 'APPROVED' WHERE r.outboundPK.outboundId IN :ids")
    void updateStatusForOutboundIds(@Param("ids") List<Long> outboundIds);
}
