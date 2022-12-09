import React from 'react'
import { Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function ProductCard({product}) {

  let navigate=useNavigate()

  return (
    <>

    <Card style={{ width: '18rem' }}>
      <Card.Img height="200" variant="top" src={product.image_url} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <h6>Quantity: {product.quantity}</h6>
        <h6>Price: {product.price}</h6>
        <h6>Description: {product.description}</h6>
        <Button onClick={() => {navigate (`/products/${product.id}`)}}  type="button" className="btn btn-success mt-3">Add to cart</Button> 
      </Card.Body>
    </Card>  

  
    </>
  )
  
}

export default ProductCard;