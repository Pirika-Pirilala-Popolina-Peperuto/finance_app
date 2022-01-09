import styled from "@emotion/styled";
import Image from "next/image";
import Chart from "./chart";
import 'chart.js/auto';
import { Line, Pie } from "react-chartjs-2";
import useMainIncomesService from "../hooks/useMainIncomesService";

const MainIncomes = function ({user: userId} ) {
  
  return <MainIncomesPic userId = {userId}></MainIncomesPic>;
};

const MainIncomesPic = function ({userId}) {
  //console.log(userId);
  var orders = useMainIncomesService(userId)
  console.log(orders);
  if(orders.length >= 3) orders = orders.slice(0,3);
  console.log(orders);

  var labels = orders.map(order => order.name);
  var labels = labels.slice(0, orders.length);

  var colors = ["#FF6384", "#36A2EB", "#FFCE56"];
  var colors = colors.slice(0, orders.length);

  var price = orders.map(order => order.price);
  //console.log(price)

  //console.log(labels);
  const data = {
    labels: labels,
    datasets: [
      {
        data: price,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };


  return (
    <Chart>
      <h2>購買金額圓餅圖</h2>
      <Pie data={data} width={400} height={400} />
    </Chart>
  );
};



export default MainIncomes;
