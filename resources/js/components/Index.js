import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from "react-router-dom";

import '../../sass/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutPage from "./CheckoutPage";
import CheckoutPageStripe from "./CheckoutPageStripe";
import BasketPage from "./BasketPage";

export default class Index extends Component {
    render() {
        return (
            <Router basename="/">
                <Route path="/basket" component={BasketPage}/>
                <Route path="/checkout" component={CheckoutPage}/>
                <Route path="/checkout-stripe" component={CheckoutPageStripe}/>
            </Router>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index/>, document.getElementById('index'));
}
