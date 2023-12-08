import React from "react";
import OrderList from "./OrderList";
import NewOrderForm from "./NewOrderForm";

class OrderControl extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
    }
  
    

  render(){
    return (
      <React.Fragment>
        <OrderList />
        <NewOrderForm />
      </React.Fragment>
    );
  }
}

export default OrderControl;