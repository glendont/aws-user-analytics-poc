import React, {useState, useEffect, Fragment} from "react";
import { Link, useLocation } from "react-router-dom";
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Divider from '@material-ui/core/Divider';


const SegmentBar = () => {

  const [SpecialClassName, setSpecialClassName] = useState('activated-tab')
  const [FlightClassName, setFlightCassName] = useState('deactivated-tab')
  const [HotelClassName, setHotelClassName] = useState('deactivated-tab')

  const location = useLocation();
  const changeSpecialClass=()=>{
    setSpecialClassName('activated-tab')
    setFlightCassName('deactivated-tab')
    setHotelClassName('deactivated-tab')

  }
  const changeFlightClass=()=>{
    setSpecialClassName('deactivated-tab')
    setFlightCassName('activated-tab')
    setHotelClassName('deactivated-tab')
  }

  const changeHotelClass=()=>{
    setSpecialClassName('deactivated-tab')
    setFlightCassName('deactivated-tab')
    setHotelClassName('activated-tab')
  }


  useEffect(() => {
    if (location.pathname==="/home") {
      changeSpecialClass()  
    }
  
    if (location.pathname==="/flight") {
      changeFlightClass()  
    }
  
    if (location.pathname==="/hotel") {
      changeHotelClass()  
    }
  },[location]) 

return (
  <Fragment> 
    <nav className="navbar">
      <ul className="segment-links">
      <li className="segment-links-specials">
          <Link to="/home" onClick={changeSpecialClass} >
            <p className={SpecialClassName} > 
            <LoyaltyIcon fontSize="small" style={{marginBottom:"3px"}}/> {' '}
            Specials  
            </p>
     
          </Link>{" "}
        </li>
          
        <Divider orientation="vertical" flexItem style={{height:"26px", opacity:"1", color:"black"}} />

        <li className="segment-links-Flights">
        <Link to="/flight" onClick={changeFlightClass} className={FlightClassName}>
        <p className={FlightClassName} > 
              <LocalAirportIcon fontSize="small" style={{marginBottom:"4px"}}/> {' '}
            Flights 
            </p>
          </Link>{" "}
        </li>


        <li className="segment-links-Hotels">
        <Link to="/hotel" onClick={changeHotelClass} className={HotelClassName}>
        <p className={HotelClassName} > 
          <ApartmentIcon fontSize="small" style={{marginBottom:"4px"}}/> {' '}
            Hotels 
            </p>
          </Link>{" "}
        </li>
      </ul>
    </nav>
    </Fragment>
)
}

export default SegmentBar; 

