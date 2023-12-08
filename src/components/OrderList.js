import React from "react";
import Order from "./Order";
import PropTypes from "prop-types";

function OrderList(props){
  return (
    <React.Fragment>
      <hr/>
      {mainOrderList.map((order, index) =>
        <Order
          name={order.name}
          origin={order.origin}
          price={order.price}
          roast={order.roast}
          amount={order.amount}
          key={index}/>
      )}
    </React.Fragment>
  );
}

OrderList.propTypes = {
  orderList: PropTypes.array
};

export default OrderList;