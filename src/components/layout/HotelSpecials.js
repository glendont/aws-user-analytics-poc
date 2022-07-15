import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard"
import Slider from "react-slick";
import * as hotelsData from "../data/hotels.json"
import { Link } from "react-router-dom";
import useWindowDimensions from "../function/useWindowDimensions";
import {IoIosArrowForward} from "react-icons/io"


const HotelSpecials = () => {

  const { width } = useWindowDimensions();
  const [numspad, setNumspad] = useState(3);

  useEffect(() => {
    function handleResize() {
      window.addEventListener("resize", handleResize);
    }

    handleResize();

    if (width > 1200) {
      setNumspad(3);
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

  var saleHotels = hotelsData.available_hotels.filter(hotel => hotel.special === true)


    return (
        <div style={{backgroundColor:'#F7F8FA', paddingTop:'25px'}}> 
        <div className='hotel-specials-div'> 
          <h3 className='landing-secondary-text'>Limited Deals for Unlimited Fun</h3>
            <h1 className="landing-main-text">HOTEL SPECIALS</h1> 
            <Link to="/hotel" style={{color:"black"}}> <h3 className='landing-secondary-text' style={{marginTop:"10px"}}>View all Hotels<IoIosArrowForward/></h3> </Link>

            
              <Slider {...settings} className="slider-div-hotel">
                {saleHotels.map((hotel) => (
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
              </Slider>
     </div>
     </div>
    )
}
export default HotelSpecials;