import React, { Fragment } from "react";
import Banner from "../layout/Banner"
import Infographic from "../layout/Infographic"
import FlightSpecials from "../layout/FlightSpecials"
import HotelSpecials from "../layout/HotelSpecials"

import { Amplify, Analytics, AWSKinesisProvider} from 'aws-amplify';

Analytics.autoTrack('specialpageView', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // OPTIONAL, the event name, by default is 'pageView'
  eventName: 'specialpageView',
  // OPTIONAL, the attributes of the event, you can either pass an object or a function 
  // which allows you to define dynamic attributes
  attributes: {
      attr: 'attr'
  },
  // when using function
  // attributes: () => {
  //    const attr = somewhere();
  //    return {
  //        myAttr: attr
  //    }
  // },
  // OPTIONAL, by default is 'multiPageApp'
  // you need to change it to 'SPA' if your app is a single-page app like React
  type: 'multiPageApp',
  // OPTIONAL, the service provider, by default is the Amazon Pinpoint
  provider: 'AWSPinpoint',
  // OPTIONAL, to get the current page url
  getUrl: () => {
      // the default function
      console.log("specialpageView");
      return window.location.origin + window.location.pathname;
  }

});

const Home = () => {
  
  return (
    <Fragment> 
    <div className="home">
    <Banner imageurl={"url(https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)"} backgroundPos ={"50% 35%"} secondaryText={"deals"}/>
    <FlightSpecials/>
    <HotelSpecials/> 
    <Infographic/> 
    </div>

    </Fragment>
  );
};

export default Home;