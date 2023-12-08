import React from "react";
import PropTypes from "prop-types";

function OrderDetail(props){
  const { order,onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Order Detail</h1>
      <h3>{order.name} - {order.origin}</h3>
      <p><em>Price per pound: ${order.price}</em></p>
      <p><em>Roast: {order.roast}</em></p>
      <p><em>In Stock: {order.amount}</em></p>
      <button onClick={()=> onClickingDelete(order.id) }>Delete Order</button>
      <hr/>
    </React.Fragment>
  );
}

OrderDetail.propTypes = {
  order: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default OrderDetail;