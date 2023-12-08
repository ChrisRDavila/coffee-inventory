import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewOrderForm(props){

  function handleNewOrderFormSubmission(event) {
    event.preventDefault();

    const amountOfBags = event.target.bags.value;


    props.onNewOrderCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: parseInt(event.target.price.value), 
      roast: event.target.roast.value,
      bags: 0,
      amount: parseInt(amountOfBags * 130),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewOrderFormSubmission}>
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
          placeholder='price per pound'
          className='form-control' />
        <input
          type='text'
          name='roast'
          placeholder='style of roast'
          className='form-control' />
        <input
          type='number'
          name='bags'
          min='0'
          placeholder='add bag to inventory' 
          className='form-control'/>

        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  );
}

NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func
};

export default NewOrderForm;