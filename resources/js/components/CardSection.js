import React from 'react';
import {CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import '../../../public/css/CheckoutForm.css'
import { Label } from 'reactstrap';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
    return (
        <div>
          <h3>Payment details</h3>
          <Label for="cardNumber">Card number</Label>
          <CardNumberElement options={CARD_ELEMENT_OPTIONS} id="cardNumber"/>
          <Label for="cardExpiry">Expiry date</Label>
          <CardExpiryElement options={CARD_ELEMENT_OPTIONS} id="cardExpiry"/>
          <Label for="cardCvc">3-digit CVC code</Label>
          <CardCvcElement options={CARD_ELEMENT_OPTIONS} id="cardCvc"/>
        </div>
    );
};

export default CardSection;
