import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js 구성 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function LineChart() {
  // 선택된 옵션을 관리하는 state
  const [selectedOption, setSelectedOption] = useState("전체");

  // 선택된 옵션에 따라 다른 데이터 세트 제공
  const getData = () => {
    switch (selectedOption) {
      case "입고":
        return [12, 19, 3, 5, 2, 3]; // 입고 데이터
      case "출고":
        return [15, 10, 6, 8, 3, 7]; // 출고 데이터
      case "전체":
      default:
        return [27, 29, 9, 13, 5, 10]; // 전체 데이터 (입고 + 출고)
    }
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: selectedOption === "입고" ? "Inbound Data" :
               selectedOption === "출고" ? "Outbound Data" : "Total Data",
        data: getData(),
        borderColor: "rgba(255, 0, 0, 0.8)",
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        tension: 0.3
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        position: 'top',
        text: selectedOption + " 재고 추이", // 선택된 옵션에 따라 제목 변경
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // 버튼 클릭 시 색상 변경을 위한 CSS 클래스
  const leftButtonStyle = (option) => ({
    backgroundColor: selectedOption === option ? "#4CAF50" : "#f0f0f0",
    color: selectedOption === option ? "#fff" : "#000",
    padding: "10px 20px",
    margin: "10px 0px 0px 10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "20px 0px 0px 20px",
    fontSize: "12px",
  });

  const middleButtonStyle = (option) => ({
    backgroundColor: selectedOption === option ? "#4CAF50" : "#f0f0f0",
    color: selectedOption === option ? "#fff" : "#000",
    padding: "10px 20px",
    cursor: "pointer",
    borderRight: "solid 1px #e0e0e0",
    borderLeft: "solid 1px #e0e0e0",
    borderTop: "none",
    borderBottom: "none",
    fontSize: "12px",
  });

  const rightButtonStyle = (option) => ({
    backgroundColor: selectedOption === option ? "#4CAF50" : "#f0f0f0",
    color: selectedOption === option ? "#fff" : "#000",
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    borderRadius: "0px 20px 20px 0px",
    fontSize: "12px",
  });

  return (
    <div style={{ position: "relative" }}>
      {/* 입고, 출고, 전체 버튼 */}
      <div style={{ marginBottom: "10px", position: "absolute", right: 20 }}>
        <button
          style={leftButtonStyle("전체")}
          onClick={() => setSelectedOption("전체")}
        >
          전체
        </button>
        <button
          style={middleButtonStyle("출고")}
          onClick={() => setSelectedOption("출고")}
        >
          출고
        </button>
        <button
          style={rightButtonStyle("입고")}
          onClick={() => setSelectedOption("입고")}
        >
          입고
        </button>
      </div>
      {/* 차트 */}
      <div style={{width: "100%", height: "40vh"}}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
