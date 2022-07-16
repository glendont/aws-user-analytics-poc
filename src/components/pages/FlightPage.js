import React, { Fragment } from "react";
import Banner from "../layout/Banner"

import FlightSearchComponent from "../layout/FlightSearchComponent"

import { Amplify, Analytics, AWSKinesisProvider} from 'aws-amplify';

Analytics.autoTrack('flightpageView', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // OPTIONAL, the event name, by default is 'pageView'
  eventName: 'flightpageView',
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
      return window.location.origin + window.location.pathname;
  }
});

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



