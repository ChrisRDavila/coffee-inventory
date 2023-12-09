import React from "react";
import PropTypes from "prop-types";
import ReusableOrderForm from "./ReusableOrderForm";

function EditOrderForm(props){
  const { order } = props;

  function handleEditOrderFormSubmission(event) {
    event.preventDefault();
    const numberOfBags = 0;
    props.onEditOrder({
      name: event.target.name.value, 
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      amount: parseInt(event.target.amount.value),
      bags: numberOfBags,
      id: order.id
    });
  }

  return (
    <React.Fragment>
      <ReusableOrderForm
      formSubmissionHandler={handleEditOrderFormSubmission}
      buttonText="Update Order" />
    </React.Fragment>
  );
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  onEditOrder: PropTypes.func
};

export default EditOrderForm;