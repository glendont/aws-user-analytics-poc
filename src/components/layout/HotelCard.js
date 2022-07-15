import React, {useState, Fragment} from "react"
import Card from 'react-bootstrap/Card'
import {ListingDialog} from "./ListingDialog"
import Button from "react-bootstrap/Button"

const HotelCard = (props) => {    

    const [hovered,setHovered] = useState(true)
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
          name={props.name}
          country={props.country}
          address={props.address}
          short_description={props.short_description}
          image={image}
          price={props.price}
          review_count={props.review_count}
          special = {props.special}
          special_time_remaining={props.special_time_remaining}
          state={open}
          close={handleClose}
          ListingType={"hotel"}
          property_highlights = {props.property_highlights}
        />
        
        <Card
          border="light"
          className="hotel-specials-card">

{hovered ? (

<Fragment> 

{props.special ? (
  <div className="special-tag" style={{marginTop:"2px"}}> 
  <p>   
    <b className="special-tag-primary-text"> {props.special_time_remaining}  </b> 
    <p className="special-tag-secondary-text">  MINUTES  <br/> TO GO</p> 
  </p> 
</div>
) : (
  <></>
)}

<div className="hotel-specials-img" onMouseEnter={mouseOver} onMouseLeave={mouseOut} style={{backgroundImage:"url("+`${image}`+")"}}> </div> 
</Fragment> 
) : (
    <div className="hotel-specials-img-hovered" onMouseEnter={mouseOver} onMouseLeave={mouseOut} style={{backgroundImage:'linear-gradient(rgba(27,55,82,0.9), rgba(27,55,82,0.9)),url('+`${image}`+')'}}>
    
<h1 className="hovered-text-primary"> <center> {props.short_description} </center></h1> 
<h1 className="hovered-text-secondary"> Deluxe Room with Garden View <br/> Free Buffet Breakast <br/> Min. 3 Nights</h1> 
<h1 className="hovered-text-tertiary"> 

<a style={{color:"#FF7B59"}}> <Button variant="outline-light" onClick={handleOpen} style={{fontSize:'14px'}}>Find out More!</Button> </a>


</h1> 


    </div> 
      
    )}
          <Card.Body style={{backgroundColor:"#1A3752"}}>
            <Card.Title>
              <h1 className="hotel-box-primary-text" onClick={ handleOpen}>
                {"\n"}
                {props.name} <br/> {props.country}
              </h1>{" "}

              { props.special ? (
              <h5 style={{float:'right'}}> <span class="badge badge-pill badge-success box-secondary-badge" style={{fontSize:"14px", color:"white",backgroundColor:'#017864'}}> Best Value! </span> <br/> <p className="hotel-box-secondary-text" style={{float:"right"}}>  ${props.price} / night</p> </h5>
              ) : (
                <h5 style={{float:'right'}}><br/> <p className="hotel-box-secondary-text" style={{float:"right"}}>  ${props.price} / night</p> </h5>
                )}

            </Card.Title>
          </Card.Body>
        </Card>
</Fragment>
)
}

export default HotelCard;
