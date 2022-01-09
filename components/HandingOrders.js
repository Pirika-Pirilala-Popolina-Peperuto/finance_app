import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useHandingOrdersService from "../hooks/useHandingOrdersService";

const HandingOrders = function ({ user: userId }) {
  const orders =  useHandingOrdersService(userId);
  
  const rows = orders.map(renderOrderRows);

  return (
    <OrdersTableWrapper className="cssHandingOrders">
      <h2>Order</h2>
      <OrdersTable>
        <thead>
          <tr>
            <th>商品編號</th>
            <th>商品名稱</th>
            <th>商品數量</th>
            <th>商品價錢</th>
            <th>商品備註</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </OrdersTable>
    </OrdersTableWrapper>
  );
};

const renderOrderRows = function (order) {
  return (
    <tr key = {order.id} >
      <td>{order.id}</td>
      <td>{order.name}</td>
      <td>1</td>
      <td>{order.price}</td>
      <td>{order.remark}</td>
    </tr>
  );
};

const OrdersTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  th {
    font-family:微軟正黑體;
    //border: black;
    background-color: #EEEEEE;
    color: #777777;

  }

  td:nth-of-type(1){
    width: 250px;
    
  }

  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5) {
    width: 100px;
    
  }

  th,
  td {
    text-align: left;
    padding: 10px;
  }

  td:nth-of-type(3),
  td:nth-of-type(4),
  th:nth-of-type(3),
  th:nth-of-type(4),
  th:nth-of-type(5),
  td:nth-of-type(5) {
    text-align: right;
  }

  tbody,
  td:not(:nth-of-type(0)) {
    border-bottom: #cccccc 2px solid;
    padding: 15px;
  }
`;

const OrdersTableWrapper = styled.div`
  width: 60%;
  max-width: 800px;

  padding: 25px;
  border-radius: 7px;
  box-shadow: #666666 0px 0px 6px;
  background: #fff;
  margin: 3% 0 0 3%;
  text-align: left
`;

export default HandingOrders;
