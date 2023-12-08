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
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewOrderForm />;
    } else {
      currentlyVisibleState = <OrderList />;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default OrderControl;