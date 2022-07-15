import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Auth} from 'aws-amplify'; 
import Spinner from 'react-bootstrap/Spinner'
import {BiError} from 'react-icons/bi';
const SignInComponent = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [ isLoading , setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const usernameInput = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setUsername(e.target.value);
      };
    
      const passwordInput = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        e.preventDefault();
      };

      const triggerSignIn=()=> {
        setIsError(false)
        setIsLoading(true)
        console.log(username,password)
        Auth.signIn({
            username: username,
            password: password
        })
        .then(() => {
            props.setUsernameMethod(username);
            props.signInMethod();
            setIsLoading(false)
        })
    
        .catch((err) => {console.log(`Error signing in: ${ err }`);setIsError(true)})
    }

    const getButton=()=>{
        if (isLoading===false && isError ===false){
            return (
                <Button variant="light" type="submit" style={{width:"150px", height:"44px", backgroundColor:"#FF7B59", border:"none"}} onClick ={triggerSignIn}><b> Sign In </b></Button>
                )}
        else if (isLoading===true && isError ===false){
            return (
                <Button variant="light" type="submit" style={{width:"150px", height:"44px", backgroundColor:"#FF7B59", border:"none"}} onClick ={triggerSignIn} >      
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
            />   
            <b> Signing In </b>
            </Button>)
        }
        else if (isError === true){
            return (
                <Button variant="danger" type="submit" style={{width:"150px", height:"45px", border:"none", marginTop:"2px", fontSize:"13px"}} onClick ={triggerSignIn} > <BiError/> <b>Please try again!</b> </Button>
            )
        }
    }

  return (
   <div className="header"> 
    <Container>         
    <Row style={{marginTop:"30px"}}> 
        <Col md={6} xl={5}> 
        <Form >
        <Form.Group controlId="formBasicEmail">
            <Form.Control style={{padding:"5%", fontSize:"14px"}} type="email" placeholder="Enter your username" onChange={usernameInput} onKeyPress={e => { if (e.key==='Enter') {triggerSignIn()}}}/>
        </Form.Group>
        </Form>
        </Col>

        <Col md={6} xl={5}> 
        <Form onSubmit={e => { e.preventDefault() }} >
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control style={{padding:"5%", fontSize:"14px"}}  type="password" placeholder="Enter your password" onChange={passwordInput} onKeyPress={e => { if (e.key==='Enter') {triggerSignIn()}}}
     />

  </Form.Group>
  </Form>
</Col>

<Col md={12} xl={2} style={{marginTop:"19px"}}> 
{getButton()}
</Col> 
</Row> 
</Container>
   </div>
  );
};

export default SignInComponent