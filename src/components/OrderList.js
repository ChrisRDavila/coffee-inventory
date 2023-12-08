import React from "react";
import Order from "./Order";

function OrderList(){
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

export default OrderList;