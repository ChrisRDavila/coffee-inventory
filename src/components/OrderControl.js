import React from "react";
import OrderList from "./OrderList";
import NewOrderForm from "./NewOrderForm";

class OrderControl extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        mainOrderList: []
      };
    }

    handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }

    handleAddingNewOrderToList = (newOrder) => {
      const newMainOrderList = this.state.mainOrderList.concat(newOrder);
      this.setState({mainOrderList: newMainOrderList,
                    formVisibleOnPage: false });
    }
    

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewOrderForm onNewOrderCreation={this.handleAddingNewOrderToList}/>;
      buttonText = "Return to Order List";
    } else {
      currentlyVisibleState = <OrderList orderList={this.state.mainOrderList}/>;
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