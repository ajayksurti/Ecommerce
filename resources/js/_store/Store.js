import {observable, decorate} from 'mobx';
import Products from '../products.json';

class BaseStore {
    constructor() {
        this.products = this.getProducts();
    }

    getProducts = () => {
        // return fetch('/api/products')
        //     .then(response => response.json())
        //     .then(response => {
        //         this.products = response.data;
        //     });
        return Products;
    };

    checkOut = () => {
        let data = {
            firstname: this.firstName,
            lastname: this.lastName,
            phone: this.phone,
            email: this.email,
            cardnumber: this.cardNumber,
            cardexpmonth: this.cardExpMonth,
            cardexpyear: this.cardExpYear,
            cardcvc: this.cardCvv,
        };
        return fetch('/api/submit', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    };

    setFirstName = (event) => {
        this.firstName = event.target.value;
    };

    setLastName = (event) => {
        this.lastName = event.target.value;
    };

    setPhone = (event) => {
        this.phone = event.target.value;
    };

    setEmail = (event) => {
        this.email = event.target.value;
    };

    setCardNumber = (event) => {
        this.cardNumber = event.target.value;
    };

    setCardExpMonth = (event) => {
        this.cardExpMonth = event.target.value;
    };

    setCardExpYear = (event) => {
        this.cardExpYear = event.target.value;
    };

    setCardCvv = (event) => {
        this.cardCvv = event.target.value;
    };

    goToCheckout = () => {
        window.location.href = window.location.origin + '/#/checkout'
    };

}

decorate(BaseStore, {
    products: observable,
});

const Store = new BaseStore();

export default Store;
