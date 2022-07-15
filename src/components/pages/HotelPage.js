import React from "react";
import Banner from "../layout/Banner"
import HotelSearchComponent from "../layout/HotelSearchComponent"

const HotelPage = () => {
  return (
    <div className="home">

    <Banner imageurl={"url(https://images.unsplash.com/photo-1565013759991-fc031d42c553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)"} backgroundPos ={"center left"} secondaryText={"hotels"}/>

   <HotelSearchComponent/> 
    </div>
  );
};

export default HotelPage;