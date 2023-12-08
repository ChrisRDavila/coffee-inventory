import React from "react";

function OrderDetail(props){
  const { order } = props;
  return (
    <React.Fragment>
      <h1>Order Detail</h1>
      <h3>{order.name} - {order.origin}</h3>
      <p><em>Price per pound: ${order.price}</em></p>
      <p><em>Roast: {order.roast}</em></p>
      <p><em>In Stock: {order.amount}</em></p>

      <hr/>
    </React.Fragment>
  );
}

OrderDetail.propTypes = {
  order: PropTypes.object
};

export default OrderDetail;