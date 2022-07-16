import React from "react";
import Banner from "../layout/Banner"
import HotelSearchComponent from "../layout/HotelSearchComponent"
import { Amplify, Analytics, AWSKinesisProvider} from 'aws-amplify';

Analytics.autoTrack('hotelpageView', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // OPTIONAL, the event name, by default is 'pageView'
  eventName: 'hotelpageView',
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

const HotelPage = () => {

  return (
    <div className="home">

    <Banner imageurl={"url(https://images.unsplash.com/photo-1565013759991-fc031d42c553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)"} backgroundPos ={"center left"} secondaryText={"hotels"}/>

   <HotelSearchComponent/> 
    </div>
  );
};

export default HotelPage;