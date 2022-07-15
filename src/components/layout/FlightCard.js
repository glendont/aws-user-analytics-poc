import React, {Fragment,useState} from "react"
import Card from 'react-bootstrap/Card'
import {ListingDialog} from "./ListingDialog"
import Button from "react-bootstrap/Button"

const FlightCard = (props) => {   
  const [hovered,setHovered] = useState(true);
  const [open, setOpen] = useState(false);

  const mouseOver = () =>{ 
      setHovered(false)
  }
  const mouseOut = () =>{ 
      setHovered(true)
  }
  const {image} = props;

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }

return (
    <Fragment>

        <ListingDialog
          origin={props.origin}
          destination={props.destination}
          image={image}
          price={props.price}
          flight_number={props.flight_number}
          review_count={props.review_count}
          arrival_date={props.arrival_date}
          duration={props.duration}
          special = {props.special}
          special_time_remaining={props.special_time_remaining}
          state={open}
          close={handleClose}
          ListingType={"flight"}
          journey_map={props.journey_map}
          journey_timeline={props.journey_timeline}

        />

        <Card
          border="light"
          className="flight-specials-card">
{hovered ? (

<Fragment> 

  {props.special ? (
    <div className="special-tag"> 
    <p>   
      <b className="special-tag-primary-text">{props.special_time_remaining}</b> 
      <p className="special-tag-secondary-text">  MINUTES  <br/> TO GO</p> 
    </p> 
  </div>
  ) : (
    <></>
  )}


<div className="flight-specials-img" onMouseEnter={mouseOver} onMouseLeave={mouseOut} onClick={handleOpen}  style={{backgroundImage:"url("+`${image}`+")"}}> </div> 
</Fragment>
) : (
    <div className="flight-specials-img-hovered" onClick={handleOpen} onMouseEnter={mouseOver} onMouseLeave={mouseOut} style={{backgroundImage:'linear-gradient(rgba(27,55,82,0.9), rgba(27,55,82,0.9)),url('+`${image}`+')'}}>
    
<h1 className="flight-hovered-text-primary"> <center> {props.short_description} </center></h1> 
<h1 className="flight-hovered-text-secondary"> Deluxe Room with Garden View <br/> Free Buffet Breakast <br/> Min. 3 Nights</h1> 

<h1 className="flight-hovered-text-tertiary"> 
{/* <a style={{color:"#FF7B59"}}> <u> 2 </u> </a> deals to go! */}
<a style={{color:"#FF7B59"}}> <Button variant="outline-light" onClick={handleOpen} style={{fontSize:'14px'}}>Find out More!</Button> </a>
</h1> 
</div>
    )}

                <Card.Body style={{backgroundColor:"#1A3752"}} onClick={handleOpen}>
                  <Card.Title>
                    <h1 className="flight-box-primary-text">
                      {"\n"}
                      {props.origin} to <br/> {props.destination}
                    </h1>{" "}

                    { props.special ? (
                   <h5 style={{float:'right'}}> <span class="badge badge-pill badge-success box-secondary-badge flight-box-secondary-text" style={{fontSize:"14px", color:"white"}}> Best Value! </span> <br/> <p className="flight-box-secondary-text" > from ${props.price} </p> </h5>

                    ) : (

                      <h5 style={{float:'right'}}>  <br/> <p className="flight-box-secondary-text" > from ${props.price} </p> </h5>

                    ) }



                  </Card.Title>
                </Card.Body>
              </Card>
    
  </Fragment>
)
}

export default FlightCard;