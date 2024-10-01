import styled from "@emotion/styled";
import * as H from "../../../styles/pageStyles";

export default function SearchDoneContent({
  status,
  setStatus,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  arriveName,
  setArriveName,
  item,
  setItem,
  fetchData,
}) {
  console.log("SearchContent 렌더링"); // 렌더링될 때마다 출력
  console.log("fetchData: ", fetchData);


  const handleArriveNameChange = (e) => {
    const selectedValue = e.target.value;

    // 수신지가 '귤로벌마트'일 경우 arrive_storage_id를 null로 보내도록 처리
    if (selectedValue === "귤로벌마트") {
      setArriveName(null); // arrive_storage_id를 null로 설정
      //setOutboundMart(1);
    } else {
      setArriveName(selectedValue); // 다른 창고명은 그대로 설정
      //setOutboundMart(0);
    }
  };


  return (
    <div>
      <label>진행 상태</label>
      <select value={status}
      onChange={(e) => setStatus(e.target.value)}>
        <option value="" disabled selected hidden>선택</option>
        <option>승인</option>
        <option>출고완료</option>
        <option>입고완료</option>
      </select>

      <label>요청 날짜</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <label>수신지</label>
      <select
        value={arriveName}
        onChange={handleArriveNameChange}>
        <option value="" disabled selected hidden>선택</option>
        <option>서울 창고</option>
        <option>부산 창고</option>
        <option>대구 창고</option>
        <option>광주 창고</option>
        <option>인천 창고</option>
        <option>귤로벌마트</option>
      </select>

      <label>품목</label>
      <select value={item}
      onChange={(e) => setItem(e.target.value)}>
        <option value="" disabled selected hidden>선택</option>
        <option>귤</option>
        <option>한라봉</option>
        <option>사과</option>
        <option>레몬</option>
        <option>감귤</option>
      </select>


      <button onClick={fetchData}>검색</button>
    </div>
  );
}


// {/* 데이터 리스트 렌더링 */}
//       {/* data와 data.data가 존재하고, data.data가 배열인지 확인 */}
//       {/* data : data가 null이나 undefined인지 확인 */}
//       {/* Array.isArray(data.data) : .map() 메서드를 사용하기 위해서 data.data가 배열인지 확인 */}
//       {/* data.data.length : 길이가 0이면 출력할 데이터가 없는 것이므로 false를 반환 */}
//       {data && Array.isArray(data.data) && data.data.length > 0 ? (
//         <ul>
//           {data.data.map((item, index) => (
//             <li key={index}>
//               {/* 체크박스와 출고 ID 표시 */}
//               <input
//                 type="checkbox"
//                 checked={outboundIds.includes(item.outboundId)}
//                 onChange={() => handleCheckboxChange(item.outboundId)}
//               />

//               <p>출고 ID: {item.outboundId}</p>
//               <p>진행상태: {item.status}</p>
//               <p>출고 창고명: {item.departStorageName}</p>
//               <p>도착지 이름: {item.arriveName}</p>
//               <p>상품 목록: {item.products}</p>
//               <p>요청 날짜: {item.requestDate}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>데이터가 없습니다.</p> // 데이터를 찾을 수 없을 때 출력
//       )}

//       {/* 승인 버튼 추가 */}
//       <button onClick={approveOutboundRequests}>승인</button>
//       <button onClick={rejectOutboundRequests}>반려</button>