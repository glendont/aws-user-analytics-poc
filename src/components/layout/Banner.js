import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Banner = (props) => {
    const {imageurl, backgroundPos, secondaryText } = props;

  return (
   <div className="header"> 
   <Container fluid className="banner-div"
   style={{backgroundImage:`${imageurl}`,backgroundPosition: `${backgroundPos}`}}
   > 
    <Row style={{paddingTop:"6rem"}}>
    <Col xs={1} sm={0} md={1} lg={0} xl={2}></Col>
       <h1 className="banner-text-primary"> TravelBuddy </h1> 
       </Row>

       <Row>
       <Col xs={1} sm={0} md={1} lg={0} xl={2}></Col>
       <h3 className="banner-text-secondary"> The internet's source for the <u style={{fontWeight:"bolder", opacity:"0.85"}}> best {secondaryText}.</u> </h3> 
       <Col xs={2} xl={0}> </Col>
       </Row>


  </Container>
   </div>
  );
};

export default Banner; 