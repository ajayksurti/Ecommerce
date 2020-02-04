import React, {useState, useEffect} from 'react';
import Store from '../_store/Store';
import BootstrapTable from 'react-bootstrap-table-next';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import {Button} from "reactstrap";
import Basket from '../basket.json';

function BasketPage() {
    const [basket, setBasket] = useState(Basket);

    // async function getData() {
    //     // const response = await fetch('/api/basket');
    //     // const data = await response.json();
    //     // setData(data.data);
    //     setData(Basket.data)
    //   }

    // useEffect(() => {
    //     getData();
    // });

    // const product = JSON.parse(JSON.stringify(basket));

    function goToCheckout() {
        return fetch('/api/order', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(basket)
        }).then(response => response.json()).then(response => {window.location.href = window.location.origin + '/#/checkout'})
    }

    const columns = [{
        dataField: 'name',
        text: 'Product',
    }, {
        dataField: 'price',
        text: 'Price'
    }, {
        dataField: 'quantity',
        text: 'Quantity'
    }];

    return (
        <div className="container">
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={basket.data.items}
                columns={columns}
            />
            <div>
                <h4 className="totals">Total: £ {basket.total}</h4>
            </div>
            <Button color="primary" size="lg" block onClick={() => goToCheckout()}>Go to Checkout</Button>
        </div>
    )
}

export default BasketPage;
