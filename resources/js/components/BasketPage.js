import React from 'react';
import Store from '../_store/Store';
import BootstrapTable from 'react-bootstrap-table-next';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import {Button} from "reactstrap";

const BasketPage = (props) => {
    if (!Store.products) {
        return (
            <div></div>
        )
    }

    const columns = [{
        dataField: 'name',
        text: 'Product',
    }, {
        dataField: 'price',
        text: 'Price'
    }];
    return (
        <div className="container">
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={[Store.products.data]}
                columns={columns}
            />
            <div>
                <h4 className="totals">Total: £ {Store.products.total}</h4>
            </div>
            <Button color="primary" size="lg" block onClick={Store.goToCheckout}>Go to Checkout</Button>
        </div>
    )
};

export default BasketPage;
