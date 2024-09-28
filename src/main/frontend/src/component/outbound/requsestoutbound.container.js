import { useEffect, useState } from "react"; // useEffect와 useState를 React에서 가져온다.
import axios from "axios"; //HTTP 요청을 보내기 위해 axios 라이브러리 호출.
import OutboundUI from "./requsestoutbound.presenter";


export default function Outbound() {
  // data변수와 그것을 사용하기 위한 setData함수
  // 초기데이터는 null이며 axios를 통해 가져온 데이터를 저장할 곳
  const [data, setData] = useState(null); 

  //검색어 설정
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [item, setItem] = useState(null);
  const [status, setStatus] = useState(null);
  const [arriveName, setArriveName] = useState(null);
  const [outboundStorageName, setOutboundStorageName] = useState(null);
  const [outboundMart, setOutboundMart] = useState(null);
  const [outboundIds, setOutboundIds] = useState([]); // 한번에 여러 아이디를 담을거기 때문에 배열로 설정

  // 데이터를 가져오는 fetchData 함수 정의
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/outbound/request_list", {
        params: {
          status: status,
          startDate: startDate,
          endDate: endDate,
          item: item,
          arriveName: arriveName,
          outboundStorageName: outboundStorageName,
          outboundMart: outboundMart
        }
      });
      setData(response.data); // 데이터를 받아서 상태에 저장
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };







  // 승인 요청 함수 정의
  const approveOutboundRequests = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/outbound/approve",
        { outboundIds: outboundIds } // 선택된 ID를 POST 본문에 포함
      );
      console.log("승인된 ID:", response.data.outboundIds);
      // 승인 후 필요한 경우 상태 업데이트
      setOutboundIds([]); // 승인 완료 후 선택된 ID 초기화
      fetchData(); // 데이터를 다시 불러와 업데이트
    } catch (error) {
      console.error("승인 요청 중 오류가 발생했습니다:", error);
    }
  };

      // 반려 요청 함수 정의
  const rejectOutboundRequests = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/outbound/reject",
        { outboundIds: outboundIds } // 선택된 ID를 POST 본문에 포함
      );
      console.log("반려된 ID:", response.data.outboundIds);
      // 반려 후 필요한 경우 상태 업데이트
      setOutboundIds([]); // 반려 완료 후 선택된 ID 초기화
      fetchData(); // 데이터를 다시 불러와 업데이트
    } catch (error) {
      console.error("반려 요청 중 오류가 발생했습니다:", error);
    }
  };

    // 체크박스 클릭 시 호출될 함수
    // 매개변수를 id로 받는 함수
    const handleCheckboxChange = (id) => {
      if (outboundIds.includes(id)) { // outboudids 배열에 id가 있는지 확인하고 true, false를 반환
        // 이미 체크된 ID는 체크 해제
        setOutboundIds(outboundIds.filter((outboundId) => outboundId !== id));
      } else {
        // 새로운 ID는 체크 추가
        setOutboundIds([...outboundIds, id]);
      }
    };






  // 컴포넌트가 렌더링할 때 특정 동작을 수행하는 useEffect로 컴포넌트가 처음 렌더링될 때
  // 데이터를 가져오는 fetchData를 호출
  useEffect(() => {
    fetchData(); // 데이터를 가져오는 함수 호출
  }, []); // 의존성 배열이 빈 배열로 되어 있어, 컴포넌트가 처음 렌더링될 때 한 번만 실행됨








// 반환해서 presenter에서 쓸 값들
  return (
    <div>
      {data ? (
         <OutboundUI 
         data={data} 
         status={status} 
         setStatus={setStatus} 
         startDate={startDate} 
         setStartDate={setStartDate} 
         endDate={endDate} 
         setEndDate={setEndDate} 
         arriveName={arriveName}
         setArriveName={setArriveName}
         item={item}
         setItem={setItem}
         outboundIds={outboundIds}
         setOutboundIds={setOutboundIds}
         fetchData={fetchData} // fetchData 함수 전달
         approveOutboundRequests={approveOutboundRequests}
         rejectOutboundRequests={rejectOutboundRequests}
         handleCheckboxChange={handleCheckboxChange}
       /> // 데이터를 OutboundUI에 전달
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </div>
  );
}
