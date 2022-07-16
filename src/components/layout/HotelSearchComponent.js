import React, {Fragment, useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

import HotelCard from "./HotelCard"
import hotelsData from "../data/hotels.json"

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import useWindowDimensions from "../function/useWindowDimensions";

import { Amplify, Analytics, AWSKinesisProvider} from 'aws-amplify';
Analytics.addPluggable(new AWSKinesisProvider());
Analytics.configure({
  AWSKinesis: {

      // OPTIONAL -  Amazon Kinesis Firehose service region
      region: 'us-east-1',
      
      // OPTIONAL - The buffer size for events in number of items.
      bufferSize: 1000,
      
      // OPTIONAL - The number of events to be deleted from the buffer when flushed.
      flushSize: 100,
      
      // OPTIONAL - The interval in milliseconds to perform a buffer check and flush if necessary.
      flushInterval: 5000, // 5s
      
      // OPTIONAL - The limit for failed recording retries.
      resendLimit: 5
  } 
});
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



const HotelSearchComponent = () => { 
  const { width } = useWindowDimensions();

  const [gridStyle, setgridStyle] = useState({
    display: "grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gridGap: "2%",
    padding: "3%",
    overflowY: "hidden",
    justifyContent: "center",
    width: "72%",
  })

  useEffect(() => {
    function handleResize() {
      window.addEventListener("resize", handleResize);
    }
    handleResize();
    if (width > 1200) {
      setgridStyle({
        display: "grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        gridGap: "2%",
        padding: "3%",
        overflowY: "hidden",
        justifyContent: "center",
        width: "72%",
        paddingTop:"3%",
        paddingBottom:"10%"
      });
    } else if (width<1200 && width>900) {
      setgridStyle({
        display: "grid",
        gridTemplateColumns:"1fr 1fr",
        gridGap: "2%",
        padding: "3%",
        overflowY: "hidden",
        justifyContent: "center",
        width: "72%",
        paddingTop:"10%",
        paddingBottom:"45%"
      });
    } else {
      setgridStyle({
        display: "grid",
        gridTemplateColumns:"1fr",
        gridGap: "2%",
        padding: "3%",
        overflowY: "hidden",
        justifyContent: "center",
        width: "72%",
        paddingTop:"10%",
        paddingBottom:"45%"
        
      });
    }
  },[width]);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "98%"
    },
    selectEmpty: {
      marginTop: theme.spacing(100),
    },
  }));

  const classes = useStyles();

  const Analytics_function_hotelSearch = () => { 
    console.log("Calling to pinpoint...")
    Analytics.record({
      name: 'hotelSsearch', 
      attributes: { action: 'CLICK', view: 'decyfir/hotelSearch', X:'7', Y:'3'},  
      metrics: { numOfClicks: 1 },
  });
  console.log("Pinpoint (hotelSsearch) called!")
  }

return(

<Fragment> 
<Container fluid style={{paddingTop:"50px",width: "70%"}}> 
<h3 className='landing-secondary-text'>Plan your Travel with Value</h3>
<h1 className="landing-main-text">ALL HOTELS</h1> 
<Row noGutters style={{marginTop:"30px"}}> 

<Col xs={12} xl={10}> 
<center>
<FormControl variant="outlined" className={classes.formControl} >
              <InputLabel id="demo-simple-select-outlined-label">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // onChange={handleChange}
                label="Categories"
              >
                <MenuItem value="1">Singapore</MenuItem>
                <MenuItem value="2">Malaysia</MenuItem>
                <MenuItem value="3">Indonesia</MenuItem>
              </Select>
</FormControl>
</center> 
</Col>
<Col xs={12} xl={2}>  
 <Button variant="outline-secondary" className="search-button" style={{ border:"solid 0.5px", marginLeft:"2.2%" }} onClick={Analytics_function_hotelSearch}><center>  Search </center> </Button>{' '} 
</Col>
</Row> 

<Row noGutters style={{paddingTop:"2%"}} >
<Col xl={4}> </Col>
<Col xl={5}> </Col>
<Col xs={12} xl={3}> 
<center> 
<Form.Group>
<Form.Label htmlFor="disabledTextInput" style={{float:"right", marginLeft:"2.2%"}}> Sort By</Form.Label>
  <Form.Control as="select" size="lg">
    <option>Lowest Price</option>
    <option>Highest Price</option>
    <option>Location</option>
  </Form.Control>
</Form.Group>
</center> 
 </Col>
</Row>

</Container> 
<Container fluid
        style={gridStyle}
      >
          {hotelsData.available_hotels.map((hotel) => (
                  <HotelCard
                  name={hotel.name}
                  country={hotel.country}
                  address={hotel.address}
                  short_description = {hotel.short_description}
                  image={hotel.image}
                  price={hotel.price}
                  review_count={hotel.review_count}
                  special = {hotel.special}
                  special_time_remaining={hotel.special_time_remaining}
                  property_highlights = {hotel.property_highlights}

                  />
        ))}
</Container>
    </Fragment>
)

}

export default HotelSearchComponent; 