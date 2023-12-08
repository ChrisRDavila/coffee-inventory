import React from "react";
import PropTypes from "prop-types";

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
      <form onSubmit={handleEditOrderFormSubmission}>
      <input
          type='text'
          name='name'
          placeholder='name of blend'
          className='form-control' />
        <input
          type='text'
          name='origin'
          placeholder='country of origin'
          className='form-control' />
        <input
          type='number'
          name='price'
          min='0'
          placeholder="price per pound"
          className='form-control' />
        <input
          type='text'
          name='roast'
          placeholder='style of roast'
          className='form-control' />
        <input
          type='number'
          name='amount'
          min='0'
          placeholder='pounds in inventory' 
          className='form-control'/>

        <button type='submit'>Edit this List Item</button>
      </form>
    </React.Fragment>
  );
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  onEditOrder: PropTypes.func
};

export default EditOrderForm;