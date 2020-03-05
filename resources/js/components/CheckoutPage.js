import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_iPjNCUNznVWWzJMsRbbLlL7B00FfU7ozyD");

function CheckoutPage() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm className="checkout-form"/>
        </Elements>
    )
}

export default CheckoutPage;
