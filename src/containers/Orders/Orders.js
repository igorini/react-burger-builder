import React, { useEffect, useState } from 'react';
import axios from 'axios-orders';
import Order from 'components/Order/Order';
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/orders.json')
      .then((response) => {
        console.log(response.data);
        const fetchedOrders = Object.keys(response.data).map((i) => ({
          ...response.data[i],
          id: i,
        }));
        setLoading(false);
        setOrders(fetchedOrders);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      {orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ))}
    </div>
  );
};

export default withErrorHandler(Orders, axios);
