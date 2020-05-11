/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink,Button } from "reactstrap";
import './style.css'
import Footnode from "./Footnode";
import {Link} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
        <div>
      <Container className='p-2'  >
        <Row>
          <Col md="4" className="border-left text-muted">
              <h3 ><u>LATEST NEWS</u></h3>
              This website template has been designed by
               Free Website Templates for you, for free.
               You can replace all this text with your own text.
                You can remove any link.
          </Col>
          <Col md="4" className="border-left text-muted">
              <h3 ><u>SEND US A MESSAGE</u></h3>
              If you're having problems editing this website
              template, then don't hesitate to ask for help
              on the Forums.
          </Col>
          <Col md="4" className="border-right border-left text-muted ">
              <h3 ><u>CONTACT US</u></h3>
                ADDRESS: the address city, state 1111
                PHONE: (+20) 000 222 999
                  EMAIL: info@freewebsitetemplates.com
                  <Link to='/' >
                    <Button  className="subscribe mt-2">Click to send us an email</Button>
                  </Link>
           </Col>
        </Row>
      </Container>
    <Footnode/>
        </div>
    );
  }
}

export default Footer;
