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
  Filler,
} from "chart.js";
import { useAPI } from "../../../axios/useAPI";

// Chart.js 구성 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LossChart(props) {
  const { get } = useAPI();
  const [labelsArray, setLabelsArray] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const fetchDataset = async () => {
    try {
      const response = await get("/chart/loss_history", { userId : 'U002' });

      console.log("qweqwe" + response.data[0].lossCost);
      
      const fetchedData = response.data;

      const labels = fetchedData.map((item) => item.lossDate);
      const data = fetchedData.map((item) => item.lossCost);

      setLabelsArray(labels);
      setDataArray(data);

    } catch (error) {
      ////////////////////////////////////////////// 예외 처리 해줘야하는데...
      console.log("손실 그래프 에러");
    }
  };

  useEffect(() => {
    fetchDataset();
  }, []);


  const total = dataArray.reduce((acc, item) => acc + item, 0);

  const data = {
    labels: labelsArray,
    datasets: [
      {
        label: "Loss",
        data: dataArray,
        borderColor: "rgba(255, 0, 0, 0.8)",
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        fill: "start",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        align: "start",
        text: " 월간 손실: $" + total,
        padding: 10,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
      },
    },
  };

  return (
    <div style={{width: "100%", height: "100%"}}>
      <Line data={data} options={options} />
    </div>
  );
}
