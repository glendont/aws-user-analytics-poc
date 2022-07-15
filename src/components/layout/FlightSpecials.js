import React,{ useEffect, useState } from "react";
import FlightCard from "./FlightCard"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import * as flightsData from "../data/flights.json"
import useWindowDimensions from "../function/useWindowDimensions";
import {IoIosArrowForward} from "react-icons/io"


const FlightSpecials = () => {

  const { width } = useWindowDimensions();
  const [numspad, setNumspad] = useState(2);

  useEffect(() => {
    function handleResize() {
      window.addEventListener("resize", handleResize);
    }
    handleResize();

    if (width > 1200) {
      setNumspad(2);
    } else {
      setNumspad(1);
    }
  },[width]);

  var settings = {
        dots: true,
        infinite: true,
        arrow: true,
        speed: 500,
        slidesToShow: numspad,
        slidesToScroll: 1,
      };

      var saleFlights = flightsData.available_flights.filter(flight => flight.special === true)

    return (
        <div className='flight-specials-div'> 
          <h3 className='landing-secondary-text'>Limited Deals for Unlimited Fun</h3>
            <h1 className="landing-main-text">FLIGHT SPECIALS</h1> 
            <Link to="/flight" style={{color:"black"}}> <h3 className='landing-secondary-text' style={{marginTop:"10px"}}>View all Flights<IoIosArrowForward/></h3> </Link>
              <Slider {...settings} className="slider-div-flight">
                {saleFlights.map((flight) => (
                  <FlightCard
                  origin={flight.origin}
                  destination={flight.destination}
                  short_description={flight.short_description}
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
              </Slider>
     </div>
    )
}
export default FlightSpecials;