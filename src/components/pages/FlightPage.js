import React, { Fragment } from "react";
import Banner from "../layout/Banner"

import FlightSearchComponent from "../layout/FlightSearchComponent"

const FlightPage = () => {
  return (
    <Fragment> 
    <div className="home">
    <Banner imageurl={"url(https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80)"} backgroundPos ={"left right"} secondaryText={"flights"}/>

    <FlightSearchComponent/>
    
    </div>
    </Fragment>
  );
};

export default FlightPage;



