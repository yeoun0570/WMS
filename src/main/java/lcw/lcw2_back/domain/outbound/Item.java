package lcw.lcw2_back.domain.outbound;

import jakarta.persistence.*;
import lcw.lcw2_back.domain.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // 자동 증가 키
    private Long itemId;

    @ManyToOne
    @JoinColumn(name = "OUTBOUND_ID", nullable = false)
    private Outbound outbound;  // Outbound와 연관, 필드명은 Outbound 엔티티명과 일치시켜야한다.

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID", nullable = false)
    private Product product;  // Product와 연관, 필드명은 Product 엔티티명과 일치시켜야한다.

    @Column(name = "QUANTITY", nullable = false)
    private Long quantity;
}