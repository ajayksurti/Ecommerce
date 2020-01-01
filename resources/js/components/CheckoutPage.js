import React from 'react';
import Store from '../_store/Store';
import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const CheckoutPage = (props) => {
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
                                           onChange={Store.setFirstName}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleLastName">Last Name</Label>
                                    <Input type="text" name="lastName" id="exampleLastName"
                                           onChange={Store.setLastName}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" onChange={Store.setEmail}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePhone">Phone</Label>
                                    <Input type="text" name="phone" id="examplePhone" onChange={Store.setPhone}/>
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
                                           onChange={Store.setCardNumber}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Card Exp. Month</Label>
                                    <Input type="text" name="expMonth" id="expMonth" onChange={Store.setCardExpMonth}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Card Exp. Year</Label>
                                    <Input type="text" name="expYear" id="expYear" onChange={Store.setCardExpYear}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">CVV</Label>
                                    <Input type="text" name="cvv" id="cvv" onChange={Store.setCardCvv}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="primary" size="lg" block onClick={Store.checkOut}>Checkout</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default CheckoutPage;
