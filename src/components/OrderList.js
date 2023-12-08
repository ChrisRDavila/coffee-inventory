import React from "react";
import Order from "./Order";
import PropTypes from "prop-types";

function OrderList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.mainOrderList.map((order, index) =>
        <Order
          whenOrderClicked = { props.onOrderSelection }
          name={order.name}
          origin={order.origin}
          price={order.price}
          roast={order.roast}
          amount={order.amount}
          id={order.id}
          key={order.id}/>
      )}
    </React.Fragment>
  );
}

OrderList.propTypes = {
  mainOrderList: PropTypes.array,
  onOrderSelection: PropTypes.func
};

export default OrderList;