import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import './OrderSummary.module.css';

class OrderSummary extends Component {
  // This could be a functional component, does not have to be a class
  UNSAFE_componentWillUpdate() {
    console.log('[Order Summary] WillUpdate');
  }

  render () {

    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}><span>{igKey}</span>: {this.props.ingredients[igKey]}</li>
      );
    });

    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button
          btnType="danger"
          clicked={this.props.purchaseCancelled}
        >
          CANCEL
        </Button>
        <Button
          btnType="success"
          clicked={this.props.purchaseContinued}
        >
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
};

export default OrderSummary;