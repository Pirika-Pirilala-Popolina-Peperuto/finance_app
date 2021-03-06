import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from "@emotion/styled";
import HandingOrders from "../components/HandingOrders";
import MainIncomes from "../components/MainIncomes";
import PeriodIncomes from "../components/PeriodIncomes";
import ChartWrapper from "../components/chartWrapper";

export default function Home({ posts}) {
  return (
    <View >
      <TextWrapper>
        <HandingOrders></HandingOrders>
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


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://220.135.101.179/query?sql=SELECT * FROM orders where customer_id = 'b6b60fbf-82be-44fc-9099-b72e9e26c812'")
  const orders = await res.json()
  const posts = orders;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
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



