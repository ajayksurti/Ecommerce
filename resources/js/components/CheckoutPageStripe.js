import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CardSection from './CardSection';

const stripePromise = loadStripe("pk_test_iPjNCUNznVWWzJMsRbbLlL7B00FfU7ozyD");

function CheckoutPageStripe() {
    return (
        <Elements stripe={stripePromise}>
            <CardSection />
        </Elements>
    )
}

export default CheckoutPageStripe;
