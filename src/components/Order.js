import React from "react";

function Order(){
  return (
    <React.Fragment>
      <h3>{props.name} from {props.origin}</h3>
      <p><em>Price per pound: ${props.price}</em></p>
      <p><em>Roast: {props.roast}</em></p>
      <p><em>In Stock: {props.amount}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Order;