import React, { Fragment } from "react";
import SignInUpComponent from "../layout/signup/SignInUpComponent"
import Infographic from "../layout/Infographic"
import Footer from "../layout/Footer"
import NavigationBarPreLogin from "../layout/NavigationBarPreLogin"

const PreLoginPage = (props) => {
  return (
    <Fragment>
    <NavigationBarPreLogin />
    <div className="home">
    <SignInUpComponent signedIn={props.signedIn} signInMethod={props.signInMethod} setUsernameMethod={props.setUsernameMethod} imageurl={"url(https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)"} backgroundPos ={"50% 35%"} secondaryText={"deals"}/>
    <Infographic/>
    <Footer/>
    </div>
    </Fragment>
  );
};

export default PreLoginPage;