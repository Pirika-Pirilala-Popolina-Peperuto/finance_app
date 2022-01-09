import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const useHandingOrdersService = function (userId) {
  const [orders, setOrders] = useState([]);
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
      SELECT * FROM products
      INNER JOIN order_products ON order_products.product_id = products.id
      INNER JOIN orders
      ON orders.id = order_products.order_id
      WHERE orders.customer_id = '${userId}'
      ORDER BY created_at
      `                                                                     
      //console.log(url)
      fetch(url)
        .then((response) => response.json())
        .then((orders) => setOrders(orders));
    }, [userId]);
  return(orders)
//   const orders = [];
//   orders.push({
//       no: "1234",
//       name: "david",
//       quantity: 2,
//       price: 87
//   })
//   orders.push({
//     no: "123",
//     name: "david",
//     quantity: 2,
//     price: 87
// })
// orders.push({
//     no: "12",
//     name: "david",
//     quantity: 2,
//     price: 87
// })
// orders.push({
//     no: "1",
//     name: "david",
//     quantity: 2,
//     price: 87
// })
  // return { orders };
};

export default useHandingOrdersService;
