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
    let addOrderButton = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewOrderForm />;
    } else {
      currentlyVisibleState = <OrderList />;
      addOrderButton = <button onClick={this.handleClick}>Add Order</button>;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addOrderButton}
      </React.Fragment>
    );
  }
}

export default OrderControl;