package lcw.lcw2_back.domain;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(value= AuditingEntityListener.class)
public class CommonEntity {
    @CreatedDate
    @Column(name="regdate",updatable = false)
    private LocalDateTime regDate; //작성 시간 자동 저장

    @LastModifiedDate
    @Column(name="moddate")
    private LocalDateTime modDate; //수정 시간을 자동 저장
}
