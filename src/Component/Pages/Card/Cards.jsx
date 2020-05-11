import React from 'react';
import {
  Card,  CardText, CardBody,
  CardTitle,
} from 'reactstrap';
import { Container, Row, Col,  Button,CardHeader,CardImg  } from "reactstrap";
import { Link } from 'react-router-dom'
import './style.css'

const Cards = (props) => {
  return (
    <Container className=" p-3 " >

      <Row className=''>
        <Col md="3" className='mb-1'>
            <Card className=" card-header " color="dark" inverse>
            <CardHeader>
              <CardTitle>OUR LAWYERS</CardTitle>
            </CardHeader>
            <CardImg width="100%" src="card/meeting.jpg" alt="Family layer  online" />
            <CardBody className="" >
              <CardText className="text-light">
                Our website templates are created with inspiration, checked for quality and originality. </CardText>
              <Link to="/" ><Button class="subscribe ">Read More </Button></Link>
            </CardBody>
          </Card>
        </Col>

        <Col md="3" className="mb-1">
            <Card className=" card-header " color="dark" inverse>
              <CardHeader>
                <CardTitle>WHAT WE OFFER</CardTitle>
              </CardHeader>
              <CardImg width="100%" src="card/handshake.jpg" alt="family layer" />
              <CardBody >
                <CardText className="text-light">Join the discussion on our forum and meet other people in the community.  </CardText>
                <Link to="/" ><Button class="subscribe ">Read More </Button></Link> 
              </CardBody>
            </Card>
        </Col>

        <Col md="3" className="mb-1">
            <Card className=" card-header " color="dark" inverse>
              <CardHeader>
                <CardTitle>GET  TOUCH WITH US</CardTitle>
              </CardHeader>
              <CardImg width="100%" src="card/smile.jpg" alt="Family layer  online" />
              <CardBody className="" >
                <CardText className="text-light">
                And we love the challenge of doing something diferent and something special. </CardText>
                  <Link to="/" ><Button class="subscribe ">Read More </Button></Link> 
              </CardBody>
            </Card>
        </Col>

        <Col md="3" className="mb-1">
            <Card className=" card-header " color='dark' inverse>
              <CardHeader>
                <CardTitle>OUR LAWYERS</CardTitle>
              </CardHeader>
              <CardImg width="100%" src="card/handshake.jpg" alt=" lawyer  online " />
              <CardBody >
                <CardText className="text-light">
                  Our website templates are created with inspiration, checked for quality and originality.</CardText>
                <Link to="/" ><Button class="subscribe ">Read More </Button></Link> 
              </CardBody>
            </Card>
        </Col>
      </Row>
    </Container >

  );
};

export default Cards;

