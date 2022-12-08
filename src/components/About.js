import React from 'react'
import '../About.css'
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
    // <Container id="about">
    //   <Row>
    //     <Col xs={12} md={6}className='p-5'>
    //       <p className='fs-1 text-success fw-bold m-3' ><b>
    //         Get to know Vegmart </b>
    //       </p>
    //       <p className='p-3'>
    //         Vegmart is your one stop organic grocery store providing you with fresh farm products which are
    //         certified.This network of local organic grocerrrrries store promotes ecological agriculture.We sell good 
    //         good quality, pesticide free groceries.<br/> This website is created to make the it easier for consumers get access
    //         to the best organic goods.
    //       </p>
    //     </Col>
    //     <Col xs={12} md={6}>
    //       <Row>
    //         <Col>
    //         <img  className='img-fluid mt-3' src="https://thumbs.dreamstime.com/b/glasses-fresh-organic-vegetable-fruit-juices-white-detox-diet-49588793.jpg" alt="ima"/>            
    //         </Col>
    //         <Col>
    //           <img  className='img-fluid mt-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgWjHduDQHb_FWsDYAQffy0izw5sbM9m2uA&usqp=CAU" alt="ima"/> 
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col>
    //           <img  className='img-fluid mt-3 mb-3' src="https://thumbs.dreamstime.com/b/organic-food-background-farmers-vegetable-market-25149902.jpg" alt="ima"/>
    //         </Col>
    //         <Col>
    //           <img  className='img-fluid mt-3 mb-3' src="https://thumbs.dreamstime.com/b/farmer-holds-his-hands-wooden-box-vegetables-produce-green-background-fresh-organic-food-153356347.jpg" alt="ima"/>
    //         </Col>
    //       </Row>
    //     </Col>

    //   </Row>
    // </Container>
    <div className="container">
    <div className="about">
        <div className="content">
            <h2>About VegMart Organics</h2>
            <div className="info">
                <p>
           Vegmart is your one stop organic grocery store providing you with fresh farm products which are
           certified.This network of local organic groceries store promotes ecological agriculture.We sell good 
           good quality, pesticide free groceries.<br/> This website is created to make the it easier for consumers get access
           to the best organic goods.<br/>Connecting you with the best farmers as we offer <b>fresh vegetables, fruits and dairy</b>

                </p>
            </div>
        </div>
        <div className='image'>
            <img src="https://thumbs.dreamstime.com/b/farmer-holds-his-hands-wooden-box-vegetables-produce-green-background-fresh-organic-food-153356347.jpg" alt="about us" />
            <img src="https://thumbs.dreamstime.com/b/milkshakes-smoothies-assortment-wooden-table-72553947.jpg" alt=" "></img>
        </div>
    </div>
</div>
)
}
  


export default About