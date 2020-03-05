import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FormGroup, Input, Label, Col } from 'reactstrap';
import '../../../public/css/CheckoutForm.css'
import CardSection from './CardSection';

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const initialState = {
        name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: ""
    };

    const [{name, addressLine1, addressLine2, city, state, zip}, setState] = useState(initialState);

    const onChange = e => {
      const { name, value } = e.target;
      setState(prevState => ({ ...prevState, [name]: value }));
    };

    const clearState = () => {
        setState({ ...initialState });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Make  sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const cardNumber = elements.getElement('cardNumber');
        const userData = {
            name: name,
            address_line1: addressLine1,
            address_line2: addressLine2,
            address_city: city,
            address_state: state,
            address_zip: zip,
            address_country: "GB"
        };
        const result = await stripe.createToken(cardNumber, userData);

        if (result.error) {
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            stripeTokenHandler(result.token).then(clearState());
        }
    }

   async function stripeTokenHandler(token) {
      const paymentData = {token: token.id};

      // Use fetch to send the token ID and any other payment data to your server.
      const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify(paymentData),
      });

      // Return and display the result of the charge.
      return response.json();
    }

   return (
      <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Personal details</h3>
          <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" className="formElement" onChange={onChange}/>
          </FormGroup>
          <FormGroup>
              <Label for="addressLine1">Address Line 1</Label>
              <Input type="text" name="addressLine1" id="addressLine1" className="formElement" onChange={onChange}/>
          </FormGroup>
          <FormGroup>
              <Label for="addressLine2">Address Line 2</Label>
              <Input type="text" name="addressLine2" id="addressLine2" className="formElement" onChange={onChange}/>
          </FormGroup>
          <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="city" className="formElement" onChange={onChange}/>
          </FormGroup>
          <FormGroup>
              <Label for="state">County</Label>
              <Input type="text" name="state" id="state" className="formElement" onChange={onChange}/>
          </FormGroup>
          <FormGroup>
              <Label for="zip">Postcode</Label>
              <Input type="text" name="zip" id="zip" className="formElement" onChange={onChange}/>
          </FormGroup>
          <CardSection />
          <button disabled={!stripe}>Confirm order</button>
      </form>
  );

}
