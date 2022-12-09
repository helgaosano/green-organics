import React from 'react'
import { Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../ProductCard.css'

function ProductCard({product}) {

  let navigate=useNavigate()

  return (
    <>
    <div className='card'>
      <img src={product.image_url}/>
      <div className='details'>
        <h3>{product.name}</h3>
        <h6>Quantity: {product.quantity}</h6>
        <h6>Price: {product.price}</h6>
        <h6>Description: {product.description}</h6>
        <Button onClick={() => {navigate (`/carts`)}}  type="button" className="btn btn-success mt-3">Add to cart</Button> 
      </div>
      
    </div>
  
    </>
  )
  
}

export default ProductCard;