import styled from "@emotion/styled";
import Chart from "./chart";
import 'chart.js/auto';
import { Line, Pie } from "react-chartjs-2";
import usePeriodIncomesService from "../hooks/usePeriodIncomesService";
const PeriodIncomes = function ({user: userId}) {
  return <LineChart userId = {userId}></LineChart>;
};

const LineChart = function({userId}){
  const orders = usePeriodIncomesService(userId)
  //console.log(orders)
  
  var labels = orders.map(order => order.date);
  var prices =  orders.map(order => order.price);


  const data = {
    labels: labels,
    datasets: [
      {
        label: "每日消費圖",
        data: prices,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  return (
    <Chart>
      <h2>line chart</h2>
      <Line data={data} />
    </Chart>
  );
};

export default PeriodIncomes;
