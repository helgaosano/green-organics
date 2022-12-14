import React, { useEffect, useState} from "react";
import ProductNav from "./components/ProductNav";
import ProductCard from "./components/ProductCard";
import './Product.css'

const Product = () => {
  const [products, setProducts] = useState([""]);
  
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((r) => r.json())
      .then((products) =>setProducts(products));
  }, []);

//   use POST for cart
  

return (
  <>
    <div>
    <ProductNav />
    </div>

<div className="container">
        <h2>View our available products</h2>
        <div className="cardinfo">
          {products.map((product) => {
         return (<ProductCard product={product} key={product.id}/>)
          })}
        </div>
    </div>
  </>
)

}
export default Product;