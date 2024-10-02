package lcw.lcw2_back.domain.chart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DatasetVO {
  //대기중인 요청수
  private int outboundPending;
  private int inboundPending;

  //손실
  private LocalDate lossDate;
  private Long lossCost;

  //입고 7일, 월간
  private int recentInboundRequests;
  private int recentInboundCompleted;
  private int monthInboundRequests;
  private int monthInboundCompleted;
  private int monthInboundNotApproved;
  private int monthInboundApproved;

  //출고 7일, 월간
  private int recentOutboundRequests;
  private int recentOutboundCompleted;
  private int monthOutboundRequests;
  private int monthOutboundCompleted;
  private int monthOutboundNotApproved;
  private int monthOutboundApproved;

  //창고사용률
  private String storageName;
  private String productName;
  private int storageArea;
  private int stockQuantity;
  private int totalAreaUsed;

  //재고 추이 (productName은 위에서 끌어옴)
  private String month;
  private int totalInbound;
  private int totalOutbound;
  private int stockChange;
}
