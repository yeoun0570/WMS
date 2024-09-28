import * as S from "./writeoutbound.styles";

export default function OutboundUI({
  userId,
  setUserId,
  requestDate,
  setRequestDate,
  arriveName,
  setArriveName,
  outboundMart,
  setOutboundMart,
  outboundId,
  setOutboundId,
  productName,
  setProductName,
  quantity,
  setQuantity,
  fetchData,
}) {

  return (
    <S.Wrapper>
      <h2>출고 요청서 작성</h2>
      <br></br>
      <label>품목</label>
      <select 
      value={productName} 
      onChange={(e) => setProductName(e.target.value)}>
        <option>선택</option>
        <option>Product X</option> 
        <option>Product Y </option> 
        <option>Product Z </option>
      </select>
      <br></br>
      <br></br>
      <label>수량</label>
      <input type="text"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}></input>
      <br></br>
      <br></br>
      <label>수신지</label>
      <select
      value={arriveName}
      onChange={(e) => setArriveName(e.target.value)}>
        <option>선택</option>
        <option>Storage A</option> 
        <option>Storage B</option> 
        <option>Storage C</option> 
        <option>Storage D</option> 
        <option>Storage E</option> 
      </select>
      <br></br>
      <label>마트 출고 여부</label>
        <select value={outboundMart} onChange={(e) => setOutboundMart(Number(e.target.value))}>
          <option value={0}>미출고</option>
          <option value={1}>출고</option>
        </select>
        <br></br>
      <button onClick={fetchData}>요청</button>
      <button type="reset">초기화</button>
    </S.Wrapper>
  );
}
