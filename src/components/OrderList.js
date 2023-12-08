import React from "react";
import Order from "./Order";

function OrderList(){
  return (
    <Order 
      name={coffee.name}
      origin={coffee.origin}
      price={coffee.price}
      roast={coffee.roast}
      amount={coffee.amount}
    />
  );
}

export default OrderList;