import React from 'react';
import {Button} from "reactstrap";

function ProductsPage() {

    function goToBasket() {
        return window.location.href = window.location.origin + '/#/basket';
    }

    return (
        <div className="container">
            <h3>Products Page Placeholder</h3>
            <Button color="primary" block onClick={() => goToBasket()}>Go to Basket</Button>
        </div>
    )
}

export default ProductsPage;
