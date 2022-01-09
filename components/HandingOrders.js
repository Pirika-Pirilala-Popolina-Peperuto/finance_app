import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useHandingOrdersService from "../hooks/useHandingOrdersService";
const HandingOrders = function ({ user: userId }) {
  //const data =  getOrderData();
  console.log(userId);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(userId == undefined) return;
    //const sqlQuery = `SELECT * FROM orders where customer_id = '${userId}'`;
    //console.log(sqlQuery);
    //const url = `http://220.135.101.179/query?sql=${escape(sqlQuery)}`;

    // const url = 'http://220.135.101.179/query?sql=' + escape(`\
    // SELECT products.*
    // FROM products
    // LEFT JOIN order_products
    // ON order_products.product_id = products.id
    // LEFT JOIN orders
    // ON orders.id = order_products.order_id
    // WHERE orders.customer_id = 'b6b60fbf-82be-44fc-9099-b72e9e26c812'`);

    const url = `http://220.135.101.179/query?sql= 
    SELECT products.* FROM products
    INNER JOIN order_products ON order_products.product_id = products.id
    INNER JOIN orders
    ON orders.id = order_products.order_id
    WHERE orders.customer_id = 'b6b60fbf-82be-44fc-9099-b72e9e26c812'
    `
    console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then(([user]) => setUser(user));
  }, [userId]);

  console.log(user);

  const { orders } = useHandingOrdersService();
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
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </OrdersTable>
    </OrdersTableWrapper>
  );
};

const renderOrderRows = function (order) {
  return (
    <tr key = {order.no} >
      <td>{order.no}</td>
      <td>{order.name}</td>
      <td>{order.quantity}</td>
      <td>{order.price}</td>
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

  td:nth-of-type(1),
  td:nth-of-type(3),
  td:nth-of-type(4) {
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
  th:nth-of-type(4) {
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
