import React, {useState, useEffect} from 'react';
import {Button} from "reactstrap";
import ProductCard from "./ProductCard";
import BasketIcon from "./BasketIcon";

function ProductsPage() {

    const [products, setProducts] = useState({});
    const [basket, setBasket] = useState([]);
    const addToBasket = () => {
        setBasket(prevArray => [...prevArray, {"product"}])
    }

    function getData() {
        const response = fetch('/api/products').then(response => response.json())
          .then(response => setProducts(response.data))
      }

    useEffect(() => {
        getData();
    }, []);

    function goToBasket() {
        return window.location.href = window.location.origin + '/#/basket';
    }

    console.log(basket)

    return (
        <div className="container">
            <BasketIcon style={{ float: "right" }} count={basket.length}/>
            <div className="card-deck">
                {(Array.from(products)).map(function(product, key){
                    return <ProductCard name={product.name} description={product.description} logo={product.logo} price={product.price} key={key} addToBasket={addToBasket}/>
                })}
            </div>
            <Button color="primary" style={{ width: "200px", float: "right", margin: "50px 0px" }} block onClick={() => goToBasket()}>Go to Basket</Button>
        </div>
    )
}

export default ProductsPage;
