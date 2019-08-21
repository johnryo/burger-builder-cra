import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import './OrderSummary.module.css';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button
        btnType="danger"
        clicked={props.purchaseCancelled}
      >
        CANCEL
      </Button>
      <Button
        btnType="success"
        clicked={props.purchaseContinued}
      >
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default orderSummary;