import React from 'react';
import {Button, Card, Text, Title, Img, Body} from "react-bootstrap";

function ProductCard(props) {

    return (
        <Card className="text-center" style={{ width: '300px', margin: '20px' }}>
            <Card.Img variant="top" src={props.logo} style={{ margin: '20px', width: '90%' }}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.name}</Card.Title>
                <h5>£{props.price}</h5>
                <Card.Text>{props.description}</Card.Text>
                <Button className="mt-auto" variant="primary" onClick={props.addToBasket} >Add to Basket</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;
