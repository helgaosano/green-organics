import React, { useEffect, useState, useParams} from "react";
import { Container, Row, Col} from "react-bootstrap";
import ProductNav from "../components/ProductNav";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products/${id}`)
      .then((r) => r.json())
      .then((products) => setProducts(products));
  }, []);

//   use POST for cart
  

return (
    <>
    <ProductNav />
    <Container>
             <Row>
             {products.map((product) => (
            <Col xs={12} md={4}className='p-5'>
            <ProductCard  product={product} key={product.id}/>
            </Col>
             ))}
           </Row>
    </Container>
    </>
)

}
export default Products