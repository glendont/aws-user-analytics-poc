import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Auth} from 'aws-amplify'; 
import Spinner from 'react-bootstrap/Spinner'
import {BiError} from 'react-icons/bi';

const SignUpComponent = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhone] = useState("")
    const [confirmationCode, setConfirmationcode] = useState("")
    const [signUp, setsignUp] = useState(false)
    const [ isLoading , setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const usernameInput = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
      };
    
      const passwordInput = (e) => {
        setPassword(e.target.value);
        e.preventDefault();
      };

      const emailInput = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
      };
    
      const phoneInput = (e) => {
        setPhone(e.target.value);
        e.preventDefault();
      };

      const confirmationInput = (e) => {
        setConfirmationcode(e.target.value);
        e.preventDefault();
      };

      const triggerSignUp=()=> {
        setIsError(false)
        setIsLoading(true);
        Auth.signUp({
            username: username,
            password: password,
            attributes : {
                email : email,
                phone_number:phone_number
            }
        })
        .then(() => {
            console.log('Successfully signed up');
            setIsLoading(false);
            setsignUp(true);
            setPassword("");
            setConfirmationcode("");
        })
        .catch((err) => {console.log(`Error signing up: ${ err }`); setIsError(true)})
        
    }
    const triggerconfirmSignUp = () => {

        Auth.confirmSignUp(username, confirmationCode)
        .then(()=> {console.log("confirmed sign up");
        props.createTrigger();
        })
        .catch(err=>console.log(err))

    }

    const getButton=()=>{
    if (isLoading===false && isError ===false){
        return (
    <Button variant="light" type="submit" style={{width:"150px", height:"60px", backgroundColor:"#FF7B59", border:"none", marginTop:"2px"}} onClick={triggerSignUp} > <b>Sign Up</b> </Button>
        )}
    else if (isLoading===true && isError ===false){
        return (
            <Button variant="light" type="submit" style={{width:"150px", height:"60px", backgroundColor:"#FF7B59", border:"none", marginTop:"2px"}} >
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
        />   
        <b> Signing Up </b>
        </Button>)
    }
    else if (isError === true){
        return (
            <Button variant="danger" type="submit" style={{width:"150px", height:"60px", border:"none", marginTop:"2px", fontSize:"13px"}} onClick={triggerSignUp} > <BiError/> <b>Please try again!</b> </Button>
        )
    }
}
  return (
   <div className="header"> 

   {signUp ? (
    <Container> 
    <Row style={{marginTop:"30px"}}> 
        <Col xl={5}> 
        <Form onSubmit={e => { e.preventDefault() }} >
        <Form.Group controlId="formBasicEmail">
        <Form.Text className="text-muted">
      Enter your username
    </Form.Text>
            <Form.Control style={{padding:"5%", fontSize:"14px"}} type="name" placeholder="Enter a username" onChange={usernameInput} onKeyPress={e => { if (e.key==='Enter') {triggerconfirmSignUp()}}}/>
        </Form.Group>
        </Form>
        </Col>
        <Col xl={5}> 
        <Form onSubmit={e => { e.preventDefault() }} >
  <Form.Group>
  <Form.Text className="text-muted">
      Enter the confirmation code sent to your email 
    </Form.Text>
    <Form.Control style={{padding:"5%", fontSize:"14px"}}  type="name" placeholder="Enter confirmation code" onChange={confirmationInput} onKeyPress={e => { if (e.key==='Enter') {triggerconfirmSignUp()}}}/>
  </Form.Group>
  </Form>

</Col>
<Col xl={2} style={{marginTop:"19px"}}> 
<Button variant="light" type="submit" style={{width:"170px", height:"45px", backgroundColor:"#FF7B59", border:"none", marginTop:"23px", fontSize:"14px"}} onClick={triggerconfirmSignUp}> <b> Confirm Sign Up </b> </Button>

</Col> 
</Row>

</Container>

   ) : (
       
    <Container> 
    <Row style={{marginTop:"30px"}}> 
        <Col xs={6} md={6} xl={5}> 
        <Form onSubmit={e => { e.preventDefault() }} >
        <Form.Group controlId="formBasicEmail">
            <Form.Control style={{padding:"7%", fontSize:"14px"}} type="name" placeholder="Enter a username" onChange={usernameInput} onKeyPress={e => { if (e.key==='Enter') {triggerSignUp()}}} />

        </Form.Group>
        </Form>
        </Col>
        <Col xs={6} md={6} xl={5}> 
        <Form onSubmit={e => { e.preventDefault() }} >
  <Form.Group controlId="formBasicEmail">
    <Form.Control style={{padding:"7%", fontSize:"14px"}}  type="password" placeholder="Enter a password" onChange={passwordInput} onKeyPress={e => { if (e.key==='Enter') {triggerSignUp()}}} />
  </Form.Group>
  </Form>

</Col>
<Col xs={0} md={0} xl={2}> 
</Col> 
</Row> 

<Row > 
        <Col  xs={6} md={6} xl={5}> 
        <Form onSubmit={e => { e.preventDefault() }} >
        <Form.Group controlId="formBasicEmail">
            <Form.Control style={{padding:"7%", fontSize:"14px"}} type="email" placeholder="Enter your email" onChange={emailInput} onKeyPress={e => { if (e.key==='Enter') {triggerSignUp()}}}/>
        </Form.Group>
        </Form>
        </Col>
        <Col  xs={6} md={6} xl={5}> 
        <Form onSubmit={e => { e.preventDefault() }} >
  <Form.Group controlId="formBasicEmail">
    <Form.Control style={{padding:"7%", fontSize:"14px"}}  type="name" placeholder="Enter your phone number" onChange={phoneInput} onKeyPress={e => { if (e.key==='Enter') {triggerSignUp()}}}/>
  </Form.Group>
  </Form>

</Col>
<Col xl={2} style={{marginTop:"17px"}}> 
{getButton()};
</Col> 
</Row> 
</Container>

   )}

   </div>
  );
};

export default SignUpComponent;