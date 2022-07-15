import React, {Fragment, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

import FlightCard from "./FlightCard"

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import flightsData from "../data/flights.json"
import useWindowDimensions from "../function/useWindowDimensions";


const FlightSearchComponent = () => { 

  const { width } = useWindowDimensions();

  const [gridStyle, setgridStyle] = useState({
    display: "grid",
    gridTemplateColumns:"1fr 1fr",
    gridGap: "2%",
    padding: "3%",
    overflowY: "hidden",
    justifyContent: "center",
    width: "70%",
    height:"100%",
    paddingBottom:"10%",
    paddingTop:"3%"
  })

  useEffect(() => {
    function handleResize() {
      window.addEventListener("resize", handleResize);
    }
    handleResize();
    if (width > 1200) {
      setgridStyle({
        display: "grid",
        gridTemplateColumns:"1fr 1fr",
        gridGap: "2%",
        padding: "3%",
        overflowY: "hidden",
        justifyContent: "center",
        width: "70%",
        height:"100%",
        paddingBottom:"10%",
        paddingTop:"3%"
      })
    } else {
      setgridStyle({
        display: "grid",
        gridTemplateColumns:"1fr",
        gridGap: "2%",
        padding: "3%",
        overflowY: "hidden",
        justifyContent: "center",
        width: "70%",
        height:"100%",
        paddingTop:"10%",
        paddingBottom:"45%"
      })
    }
  },[width]);



  const useStyles = makeStyles((theme) => ({
    formControl: {
      left:"-2%",
      margin: theme.spacing(1),
      minWidth: "97%"
    },
    selectEmpty: {
      marginTop: theme.spacing(100),
    },
  }));
  const classes = useStyles();


return(

<Fragment> 
<Container fluid style={{width: "70%", padding:'2%',paddingTop:"3%"}}> 
<h3 className='landing-secondary-text'>Plan your Travel with Value</h3>
<h1 className="landing-main-text">ALL FLIGHTS</h1> 

<Row noGutters style={{marginTop:"30px"}}> 
<Col xl={5}> 

<FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                From
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

</Col>
<Col xl={5}> 

<FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                To
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // onChange={handleChange}
                label="Categories"
              >
                <MenuItem value="1">Everywhere</MenuItem>
                <MenuItem value="2">United States</MenuItem>
                <MenuItem value="3">China</MenuItem>
              </Select>
</FormControl>

</Col>
<Col xl={2} style={{paddingRight:"2%"}}> 
<Button variant="outline-secondary" className="search-button" style={{ border:"solid 1px",marginLeft:"1%" }}><center> <h4 style={{marginTop:"6px", fontSize:'18px', color:'black'}}> Search </h4></center> </Button>{' '}
</Col> 
</Row> 


<Row style={{marginBottom:"-40px",marginTop:"20px"}}>
<Col xs={0} xl={4}> </Col>
<Col xs={0} xl={5}> </Col>
<Col xs={12} xl={3}> 
<Form.Group>
<Form.Label htmlFor="disabledTextInput" style={{float:"right"}}> Sort By</Form.Label>
  <Form.Control as="select" size="lg">
    <option>Lowest Price</option>
    <option>Highest Price</option>
    <option>Location</option>
  </Form.Control>
</Form.Group>
 </Col>
</Row>

</Container> 

<Container fluid
       style={gridStyle}>
         
          {flightsData.available_flights.map((flight) => (
            <FlightCard
            origin={flight.origin}
            destination={flight.destination}
            short_description = {flight.short_description}
            image={flight.image}
            price={flight.price}
            flight_number={flight.flight_number}
            review_count={flight.review_count}
            arrival_date={flight.arrival_date}
            duration={flight.duration}
            special = {flight.special}
            special_time_remaining={flight.special_time_remaining}
            journey_map={flight.journey_map}
            journey_timeline={flight.journey_timeline}
            />
        ))}
</Container>
    </Fragment>
 )
}

export default FlightSearchComponent; 