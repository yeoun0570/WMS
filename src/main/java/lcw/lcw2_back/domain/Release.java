package lcw.lcw2_back.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Release {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long releaseId;
    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private User userId;
    @Column(length = 50, nullable = false)
    private Long productId;
    @Column(length = 50, nullable = false)
    private Long requestQuantity;
    @Column(length = 1000, nullable = false)
    private String requestComment;
    @Column(nullable = false)
    private Boolean status;
}
