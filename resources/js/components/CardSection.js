import React from 'react';
import {CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import '../../../public/css/CheckoutForm.css'

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
        <div class="checkout-form">
          <h3>Personal details</h3>
          <h3>Payment details</h3>
          Card number
          <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
          Expiry date
          <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
          3-digit CVC code
          <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
        </div>
    );
};

export default CardSection;
