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

    handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  
    

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewOrderForm />;
      buttonText = "Return to Order List";
    } else {
      currentlyVisibleState = <OrderList />;
      buttonText = "Add Order";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default OrderControl;