import React, { Fragment, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Card from "react-bootstrap/Card";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import Button from "react-bootstrap/Button"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import {FaPlaneDeparture,FaPlaneArrival} from "react-icons/fa"
import Accordion from 'react-bootstrap/Accordion'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
import {TiPlane} from "react-icons/ti"
import {ImCross} from "react-icons/im"
import {FaMapPin} from "react-icons/fa"
import {RiBuilding2Fill, RiBuildingFill}  from "react-icons/ri"
import { TiTick } from "react-icons/ti"

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export const ListingDialog = (props) => {

  const [AccordionState, setAccordionState] = useState(true)
  const ListingType = props.ListingType;

  var d = new Date(0); 
  d.setUTCSeconds(props.arrival_date)
  var dateString = String(d)
  var dayofWeek = dateString.slice(0,3)
  var month = dateString.slice(4,7)
  var dayofMonth = dateString.slice(8,10)
  var year = dateString.slice(11,15)



  return (
    <Fragment>
      <Dialog
        fullWidth={Boolean(false)}
        maxWidth="sm"
        onClose={props.close}
        open={props.state}
        id="dialog-box-div"

        >
          <Card style={{marginTop:"-17px", marginBottom:'-1px'}}>
            <Card.Img
              variant="top"
              src={props.image}
              style={{ width: "106%", height: "30vh", marginLeft:"-17px"}}
            />

            <div class="cross-container"> 
            <ImCross onClick={()=>{props.close()}} style={{height:"18px",width:"18px", zIndex:"2"}} /> 
            </div>


            <Card.Body>
            <b style={{float:"left", opacity:"0.7"}}> 
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <b style={{fontSize:"11px", marginLeft:'2px'}} > {props.review_count} reviews </b> 
            </b>

              <p style={{ fontSize: "12px", textAlign: "right" }}>
                <AccessAlarmsIcon
                  fontSize="small"
                  style={{
                    fontSize: "15px",
                    marginBottom: "2px",
                    marginRight: "3px",
                  }}
                />
               Deal Last Updated: {"  "}{" "}
                {props.date ? (
                  props.date
                ) : (
                  <p style={{ display: "inline" }}> 13 June 2020 </p>
                )}


              </p>{" "}
  
              <Accordion defaultActiveKey="0">
                    <Card style={{overflowX:"hidden"}}>
                        <Card.Header style={{margin:"-17px -20px -17px -20px"}} onClick={()=>{(setAccordionState(!AccordionState))}} >
                        <Accordion.Toggle as={Card.Header} eventKey="1" style={{color:"black", fontFamily:"Roboto", fontSize:"18px", backgroundColor:"#F7F7F7", border:"none"}}> 
                    <Row> 
                      <Col xs={11} xl={11}> 

               { (ListingType === "flight") ? 
               (
                <b style={{float:"left", marginBottom:"12px", opacity:"0.65", lineHeight:"30px"}}> 
                <FaPlaneDeparture style={{marginRight:"10px"}}/> {props.origin} <br/> 
               <FaPlaneArrival style={{marginRight:"10px"}}/> {props.destination} </b> 
               )
               : (
                <b style={{float:"left", marginBottom:"12px", opacity:"0.65", lineHeight:"30px"}}> 
                <RiBuilding2Fill style={{marginRight:"10px"}}/> {props.name} <br/> 
               <FaMapPin style={{marginRight:"10px"}}/> <b style={{fontSize:"13px"}}> {props.address} </b> </b> 

               ) }
                </Col> 
                    <Col xs={1} xl={1} style={{float:"right"}}>

                      { AccordionState ? 
                      
                      (<IoIosArrowDown style={{height:"30px", width:"30px", opacity:"0.6", marginTop:"10px"}}/>) : 
                      (
                        <IoIosArrowUp style={{height:"30px", width:"30px", opacity:"0.6", marginTop:"10px"}}/>
                      ) 
                      }
                      

                      </Col>
                    </Row> 
                        </Accordion.Toggle>
                        </Card.Header>
                      
                        { (ListingType === "flight") ? (

                      <Accordion.Collapse eventKey="1">
                      <Card.Body className="lead" style={{marginTop:"20px", marginBottom:"50px"}}> 
                        <p style={{fontSize:"14px",fontWeight:"bold", opacity:"0.8"}}>  <TiPlane style={{height:"24px", width:'24px', marginBottom:"3px"}}/> {props.flight_number} </p>
                        <p style={{fontSize:"14px",fontWeight:"bold", opacity:"0.8"}}> Flight Details</p>
                  
                        <Timeline style={{width:"800px", fontSize:"15px", color:"black", marginLeft:"-370px"}}>
                            { props.journey_map && props.journey_timeline && (props.journey_timeline).map((waypoint_time,index) => {
                              if(index===props.journey_timeline.length-1) {
                                return (
                                  <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot />
                                  </TimelineSeparator>
                                <TimelineContent><b>{waypoint_time}</b> {props.journey_map[index]} </TimelineContent>
                                </TimelineItem>
                                )
                              } else {
                                return (
                                  <TimelineItem>
                                  <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                  </TimelineSeparator>
                                  <TimelineContent><b>{waypoint_time}</b>  {props.journey_map[index]} </TimelineContent>
                                </TimelineItem>
                                )
                              }
                            })}
                        </Timeline>                
                      <p style={{fontSize:"12px", float:"left", marginTop:"30px", fontWeight:"400"}}>  <b> Arrives: </b> {dayofWeek}, {dayofMonth} {month} {year} | <b>Journey Duration:</b> {props.duration} </p>
                        </Card.Body>
                      </Accordion.Collapse>

                        ) : (
                          <Accordion.Collapse eventKey="1">
                          <Card.Body className="lead" style={{marginTop:"20px", marginBottom:"50px"}}> 
                            <p style={{fontSize:"14px",fontWeight:"bold", opacity:"0.8"}}>  <RiBuildingFill style={{height:"24px", width:'24px', marginBottom:"3px", marginRight:"4px"}}/> Deluxe Room with Garden View </p>
                            <p style={{fontSize:"14px",fontWeight:"bold", opacity:"0.8"}}> Property Highlights</p>

                            <ul style={{lineHeight:"50px", fontSize:"15px", marginLeft:'9px'}}>

                            {props.property_highlights && (props.property_highlights).map((highlight,index) => (
                              <Row style={{marginLeft:"-25px"}}> 
                              <Col xs={1} xl={1}><TiTick style={{color:"#575757"}}/></Col>
                              <Col xs={11} xl={11}> <li> {highlight} </li> </Col>  
                            </Row> 
                            ))
                          }
                            </ul>
                   
                        <p style={{fontSize:"12px", float:"left", marginTop:"30px", fontWeight:"400"}}>  <b> Check in: </b> From 14:00 hrs | <b>Check Out:</b> By 12:00 hrs </p>
                            </Card.Body>
                          </Accordion.Collapse> 

                        )} 




                    </Card>
                    </Accordion>

              {(ListingType==="flight") ? (
              
              <Card.Text
                className="lead"
                style={{ fontSize: "15px", letterSpacing: "0.04em", backgroundColor:"red" }}
              >
                <div style={{marginRight:"3px", marginBottom:"5px", float:"right", fontWeight:"bold", fontSize:"30px", textAlign:"center", width:"120px"}}>
            ${props.price}
                </div>
              </Card.Text>
              ) : (
                <Card.Text
                className="lead"
                style={{ fontSize: "15px", letterSpacing: "0.04em", backgroundColor:"red" }}
              >
                <div style={{marginRight:"3px", marginBottom:"5px", float:"right", fontWeight:"bold", fontSize:"18px", textAlign:"center", width:"120px"}}>
              ${props.price}
              <a style={{fontSize:"10px", letterSpacing:"0.02em"}}> Per night</a> 
                </div>
              </Card.Text>


              )}



              <Container> 

                { (ListingType ==="flight") ? (

<Row style={{float:"right"}}>
<Button variant="outlined" size="sm" style={{height:"35px",float:'right', width:'120px',backgroundColor:'#01A799'}}> <p style={{fontSize:"15px", fontWeight:"bolder", fontColor:"#767676", color:"white"}}> <center> Add to Cart </center>  </p></Button>        
</Row> 
                ) : (

                  <Row style={{float:"right"}}>
                  <Button variant="outlined" size="sm" style={{height:"35px",float:'right', width:'120px',backgroundColor:'#01A799'}}> <p style={{fontSize:"15px", fontWeight:"bolder", fontColor:"#767676", color:"white"}}> <center> Check Dates </center>  </p></Button>        
                  </Row> 
                ) }
              

              </Container>

            </Card.Body>
          </Card>
        {/* </DialogContent> */}
      </Dialog>
    </Fragment>
  );
};
