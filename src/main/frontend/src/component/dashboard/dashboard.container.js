import DashboardUI from "./dashboard.presenter";
import React, { useState, useEffect } from "react";
import axios from "axios";

/*
  필요한 데이터 셋
  1. 손실
    - 당월 1일부터 당일까지 값 리스트

  2. 사용률
    - 현재 <상품, 적재량> 리스트
    - 창고 전체 적재가능 면적
  
    3. 입고 통계
    - 최근 7일 입고 요청 건수
    - 최근 7일 입고 완료 건수

    - 당월 1일부터 당일까지 입고 요청 건수
    - 당월 1일부터 당일까지 입고 처리 중 건수
    - 당월 1일부터 당일까지 입고 완료 건수
  
    4. 출고 통계
    - 최근 7일 출고 요청 건수
    - 최근 7일 출고 완료 건수

    - 당월 1일부터 당일까지 출고 요청 건수
    - 당월 1일부터 당일까지 출고 처리 중 건수
    - 당월 1일부터 당일까지 출고 완료 건수
  
    5. 재고 추이
      - 1년 전부터 당일까지 <상품, 값> 리스트
*/

export default function Dashboard(props) {
  const [inReqForWeek, setInReqForWeek] = useState();
  const [inCompForWeek, setInCompForWeek] = useState();
  const [inReqForMonth, setInReqForMonth] = useState();
  const [inProcForMonth, setInProcForMonth] = useState();
  const [inCompForMonth, setInCompForMonth] = useState();
  const [outReqForWeek, setOutReqForWeek] = useState();
  const [outCompForWeek, setOutCompForWeek] = useState();
  const [outReqForMonth, setOutReqForMonth] = useState();
  const [outProcForMonth, setOutProcForMonth] = useState();
  const [outCompForMonth, setOutCompForMonth] = useState();
  const [invenTrend, setInvenTrend] = useState([]);

  // 최근 7일 입고 그래프 데이터셋 초기화
  
  // const lossDataset = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/api/lossData");
  //     console.log(response.data);
  //     setLoss(response.data);
  //     setUsage();
  //     setStorageArea();
  //     setInReqForWeek();
  //     setInCompForWeek();
  //     setInReqForMonth();
  //     setInProcForMonth();
  //     setInCompForMonth();
  //     setOutReqForWeek();
  //     setOutCompForWeek();
  //     setOutReqForMonth();
  //     setOutProcForMonth();
  //     setOutCompForMonth();
  //   } catch (error) {
  //     console.log('에러');
  //   } finally {
  //     return loss;
  //   }
  // }

  return <DashboardUI
  />;
}
