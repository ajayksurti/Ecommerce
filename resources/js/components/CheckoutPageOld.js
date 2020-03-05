import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function CheckoutPage() {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        cardNumber: "",
        cardExpMonth: "",
        cardExpYear: "",
        cardCvv: ""
      };

      const [{firstName, lastName, email, phone, cardNumber, cardExpMonth, cardExpYear, cardCvv},setState] = useState(initialState);

      const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
      };

      const clearState = () => {
          setState({ ...initialState });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstname: firstName,
            lastname: lastName,
            phone: phone,
            email: email,
            cardnumber: cardNumber,
            cardexpmonth: cardExpMonth,
            cardexpyear: cardExpYear,
            cardcvc: cardCvv
        };

        fetch('/api/submit', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(clearState)
    };

    return (
        <div className="container">
            <div className="left">
                <div className="form_header">
                    <h3>Personal</h3>
                </div>
                <div className="container-checkout">
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleFirstName">First Name</Label>
                                    <Input type="text" name="firstName" id="exampleFirstName"
                                        onChange={onChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleLastName">Last Name</Label>
                                    <Input type="text" name="lastName" id="exampleLastName"
                                        onChange={onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" onChange={onChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePhone">Phone</Label>
                                    <Input type="text" name="phone" id="examplePhone" onChange={onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
            <div className="right">
                <div className="form_header">
                    <h3>Secure Payment</h3>
                </div>
                <div className="container-checkout">
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Card Number</Label>
                                    <Input type="text" name="cardNumber" id="cardNumber"
                                        onChange={onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Card Exp. Month</Label>
                                    <Input type="text" name="cardExpMonth" id="expMonth" onChange={onChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Card Exp. Year</Label>
                                    <Input type="text" name="cardExpYear" id="expYear" onChange={onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">CVV</Label>
                                    <Input type="text" name="cardCvv" id="cvv" onChange={onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="primary" size="lg" block onClick={handleSubmit}>Checkout</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage;
