package lcw.lcw2_back.repository;

import lcw.lcw2_back.domain.Release;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReleaseRepository extends JpaRepository<Release, Long> {
    
    //체크박스에서 체크한 요청 승인
    @Modifying
    @Query("UPDATE Release r SET r.status = 'APPROVED' WHERE r.releaseId IN :ids")
    void approveReleaseRequests(@Param("ids") List<Long> releaseIds);
}
