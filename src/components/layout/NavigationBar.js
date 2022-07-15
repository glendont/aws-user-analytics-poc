import React, { Fragment, useState, useEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import {SiFloatplane} from "react-icons/si"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Modal from 'react-bootstrap/Modal'
import Image from "react-bootstrap/Image"
import {useDropzone} from 'react-dropzone'
import {IoMdPhotos} from 'react-icons/io'
import Row from "react-bootstrap/Row"
import {SyncLoader} from "react-spinners"
import Col from "react-bootstrap/Col"

import { Auth, Storage } from 'aws-amplify';

const NavigationBar = (props) => {
  const [click, setClick] = useState(false);
  const [profileModal, setprofileModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [photoUploaded, setphotoUploaded] = useState(false)
  const [isError, setisError] = useState(false)
  const [username,setUsername] = useState("")

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false 
  }).then(user => setUsername(user.username))
  .catch(err => console.log(err));
  }, []);

  useEffect(() => {
  // Insert code here
  }, []);

  const saveFile=()=>{
 // Insert code here
  }

  const removeProfilePic = () => {
 // Insert code here
  }

  const isLoadingMethod = () => {
    if (isLoading===true) {
return (

  <Button variant="primary" onClick={saveFile}>
  <SyncLoader size={8} style={{marginTop:'5px'}} />
</Button>
)
    } else {
return (
  <Button variant="primary" onClick={saveFile}>
  Make Changes
</Button>
)
    }
  }
  const [profileState, setprofileState] = useState({
    fileUrl:'',
    file:'',
    filename:''
  })

  const handleClick=()=> setClick(!click);

  const profileClose = () =>{
    setprofileModal(false)  
  }

  const profileOpen = () =>{
    setprofileModal(true)  
  }

  const showProfilepic=()=>{
    if (photoUploaded===false) {
      return (
        <Link to="/home" onClick={profileOpen}> <AccountCircleIcon style={{marginBottom:"3px", opacity:"0.7"}} />  {username} </Link>
      )
    }
    else if (photoUploaded===true) {
      return (
        <Link to="/home" onClick={profileOpen}>  <Image src={profileState.fileUrl} roundedCircle style={{height:'23px',width:"23px", marginRight:"5px", marginBottom:"2px"}} /> {username} </Link>
      )
    }
  }
  
  const onDrop = useCallback(e => {
    const file = e[0];
    if (file.type === "image/jpeg" || file.type==="image/png") {
    setisError(false); 
    setprofileState({
      fileUrl:URL.createObjectURL(file),
      file,
      filename:username
    });
    setphotoUploaded(true)
  } else {
    setisError(true)
  }
  }, [username])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const showProfilePic = () =>{
    if (photoUploaded===true && isError ===false){
      return(
        <> 
<Row style={{padding:"5%"}}> 
      <h1 style={{color:"grey", fontSize:"17px", textAlign:"center"}}> Your profile picture</h1>
    </Row>
    <Row> 
      <Col></Col>
    <Col><Image src={profileState.fileUrl} roundedCircle style={{height:"100%"}} /></Col> 
    <Col></Col>
      {/* <img src ={profileState.fileUrl}/> */}
    </Row> 
    </> 
      )
    }else if (isError === true){
      return (
        <Row style={{padding:"5%"}}> 
        <Col xl={2}></Col>
        <Col xl={8}><h1 style={{color:"grey", fontSize:"17px", textAlign:"center"}}>Invalid File Type!</h1></Col>
        <Col xl={2}></Col>
    </Row>
      )
    } else {
      return (
        <>
<Row style={{padding:"5%"}}> 
        <Col xl={2}></Col>
        <Col xl={8}><h1 style={{color:"grey", fontSize:"17px", textAlign:"center"}}>No current profile picture </h1></Col>
        <Col xl={2}></Col>
    </Row>
    </>
      )
    }
  }

  const removalButtonMethod = () => {
    if (photoUploaded===true) {
      return (
        <>
        <Button variant="secondary" onClick={removeProfilePic}>
            Remove
          </Button>
        </> 
      )
    } else {
      return (
        <>
        </> 
      )
    }
  }

  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li className="nav-links-homepage">
          <Link to="/home" activeClassName="currentlyOn" style={{letterSpacing:"2px",fontSize:"20px", fontWeight:"bolder", textShadow:"0px 0px, 0px 0px, 10.5x 0px"}}>
            <SiFloatplane className="nav-icon" style={{marginRight:"5px", marginBottom:"4px"}} /> 
            TravelBuddy 
          </Link>{" "}
        </li>
      </ul>
      <div className="burger" >
        <div className="line1"> </div>
        <div className="line2"> </div>
        <div className="line3"> </div>
      </div>
      <Fragment>
      <ul className="navbar-logo">
      <li className="nav-links-lang">
        <LanguageIcon fontSize="small" style={{marginBottom:'2px', opacity:'0.8', marginRight:"1px"}} /> {'  '}
          <Link to="/home">
            English (UK)
          </Link>{" "}
        </li>
      <li className="nav-links-loyalty" >
          <Link to="/home">
            Loyalty
          </Link>{" "}
        </li>
        <li className="nav-links-manage" >
          <Link to="/home">Manage</Link>
        </li>
        <Divider orientation="vertical" className="navbar-divider" flexItem style={{height:"24px"}} /> 
     <li className="nav-links-login" >
  {showProfilepic()}
  <Modal show={profileModal} onHide={profileClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Select profile picture</Modal.Title>
        </Modal.Header>

        <Modal.Body>  
    <div style={{height:"350px",width:"500px"}}> 
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        !isDragActive ?
          (
            <div 
            style={{
              border: 'dashed lightgrey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              alignContent:'center',
              alignItems:"center",
              top: "5%",
              bottom: 0,
              left: "5%", 
              right: 0,
              zIndex: 9999,
              height:"50%",
              width:"90%",
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '25%',
                right: 0,
                left: "5%",
                textAlign: 'center',
                color: 'grey',
                fontSize: 36,
                height:"80%",
                width:"90%",
              }}
            >
              <div style={{opacity:"0.5"}}>
                <p><IoMdPhotos/></p>
                <h1 style={{fontSize:"20px"}}> Drag and drop your photo here!</h1>
              </div>
            </div>
          </div>
            
          ):
          (
            <div 
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              alignContent:'center',
              alignItems:"center",
              top: "5%",
              bottom: 0,
              left: "5%", 
              right: 0,
              zIndex: 9999,
              height:"50%",
              width:"90%",
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '25%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>
              <p><IoMdPhotos/></p>
                <h1 style={{fontSize:"20px"}}> Drag and drop your photo here!</h1>
              </div>
            </div>
          </div>
          )
      }
    </div>        
    </div> 
    
    {showProfilePic()}
        </Modal.Body>
        <Modal.Footer >
        {removalButtonMethod()}
          {/* <Button variant="secondary" onClick={profileClose}>
            Close
          </Button> */}
          {isLoadingMethod()}
        </Modal.Footer>
</Modal>
</li>
<li className="nav-links-join" >
  <Button variant="light" size="sm" className="join-button" onClick={()=>{Auth.signOut()}}> <p className="join-button-text"> <center> Sign Out </center> </p></Button></li>
      </ul>
      </Fragment>
    </nav>
  )
}
  export default NavigationBar;