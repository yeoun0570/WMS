//package lcw.lcw2_back.domain.outbound;
//
//import jakarta.persistence.*;
//import lcw.lcw2_back.domain.product.Product;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Getter
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor
//public class OutboundItem {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)  // 자동 증가 키
//    private Long itemId;
//
//    @ManyToOne
//    @JoinColumn(name = "OUTBOUND_ID", nullable = false)
//    private Outbound outboundId;  // Outbound와 연관
//
//    @ManyToOne
//    @JoinColumn(name = "PRODUCT_ID", nullable = false)
//    private Product productId;  // Product와 연관
//
//    @Column(name = "QUANTITY", nullable = false)
//    private Long quantity;
//}
