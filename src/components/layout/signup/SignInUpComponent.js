import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignInComponent from "./SignInComponent"
import SignUpComponent from "./SignUpComponent"

const SignInUpComponent = (props) => {
    const {imageurl, backgroundPos, secondaryText } = props;
    const [signIn, setSignIn] = useState(true)

    const createTrigger = () => {
        setSignIn(!signIn)
    }
  return (
   <div className="header"> 
   <Container fluid 
   style={{height:"55vh", backgroundImage:`${imageurl}`,backgroundPosition: `${backgroundPos}`, filter:"brightness(100%)", padding:"5%"}}
   > 
    <Row className="pre-login-banner-row" >
    <Col xs={1} sm={0} md={1} lg={0} xl={2}></Col>
       <h1 className="banner-text-primary"> TravelBuddy </h1> 
       </Row>

{!signIn ? (
       <Row>
       <Col xs={1} sm={0} md={1} lg={0} xl={2}></Col>
       <h3 className="banner-text-secondary"> Already a member? <a onClick={createTrigger}><u style={{fontWeight:"bolder", opacity:"0.85"}}> Sign in</u> now.</a> </h3> 
       <Col xs={2} xl={0}> </Col>
       </Row>
) : (
    <Row>
    <Col xs={1} sm={0} md={1} lg={0} xl={2}></Col>
    <h3 className="banner-text-secondary"> Not a member? <a onClick={createTrigger} > Create an <u style={{fontWeight:"bolder", opacity:"0.85"}}> account. </u> </a> </h3> 

    <Col xs={2} xl={0}> 
    </Col>
    </Row>
)}
     {!signIn ? (
         <SignUpComponent createTrigger={createTrigger}/> 
     ) : (
        <SignInComponent signedIn={props.signedIn} signInMethod={props.signInMethod} setUsernameMethod={props.setUsernameMethod}/> 
     )}     
  </Container>
   </div>
  );
};

export default SignInUpComponent; 