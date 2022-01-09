import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from "@emotion/styled";
import HandingOrders from "../../components/HandingOrders";
import MainIncomes from "../../components/MainIncomes";
import PeriodIncomes from "../../components/PeriodIncomes";
import ChartWrapper from "../../components/chartWrapper";
import { useRouter } from 'next/router'
import handler from '../api/hello';

export default function Home() {
  const router = useRouter()
  const { user } = router.query

  return (
    <View >
      <TextWrapper>
        <HandingOrders user = {user}></HandingOrders>
      </TextWrapper>
      <ChartWrapper>
        <Title>David</Title>
        <MainIncomes></MainIncomes>
        <PeriodIncomes></PeriodIncomes>
        <PeriodIncomes></PeriodIncomes>
      </ChartWrapper>

    </View>
  )
}

const Title = styled.div`
  width: calc(100% - 10px);
  padding: 5px;
  // margin: 10px;
  text-align: center;
  font-family: 微軟正黑體;
  font-size: 40px;
  border-bottom: 3px solid #ccc;
`;

const View = styled.div`
  --gray: #F6F6F6;
  positon: relative;
  background: var(--gray);
  height: 100vh;
  overflow: hidden;
  display: flex;

`

const TextWrapper = styled.div`
  width: 100%;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const sql = `
select * from order
inner join order_product as op on order.id = order.id 
inner join product on product.id = op.product_id

`



