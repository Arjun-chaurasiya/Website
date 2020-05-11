import React from 'react'
import './style.css'
import Navbar1 from '../NavBar/Navbar1'
import {Container, Row, Col, NavbarBrand} from 'reactstrap';

import Footer from '../../Footer/Footer';
import Cards from '../Card/Cards'


function Home() {

    return (
        <> <Navbar1 />

            <Container  id='adbox' className="mt-2 mr-auto">

                <Row  className=" p-4 backgroundcolor">
                    <Col  md="5" class="">
                        <div className="quta  "  >
                            <div className="quotes p-4" >
                                             <h3 >It’s never easy...<br />
                                            When it comes to family.<br />
                                            But we can set <br />
                                            everything straight.</h3>
                            </div>
                        </div>
                    </Col>

                    <Col className="p-1" md="7">

                        <div className="text-center  mr-auto">
                            <img src="images/home/family-large.jpg" alt="THE MANES WINCHESTER PROMISE" style={{ width: `70%`, maxWidth: `500px` }}  />
                        </div>
                    </Col>
                </Row>
                </Container>

                <Container className="p-3 mt-2 border-bottom ">
                <div class="">
                    <div class="">
                        <Row>
                            <Col md="8" className="border-right border-left ">
                                <div className="ml-4">
                                <h3>The Manes Winchester Promise</h3>
                                <p>
                                This website template has been designed by<u> Free Website Templates </u>for you, for free.
                             You can <br/>replace all this text with your own text. You can remove any link to our website
                             from this website <br/>template, you're free to use this website template without linking back
                             to us. If you're having<br></br> problems editing this website template, then don't hesitate to ask
                             for help on the <u>Forums.</u>
                                </p>
                                </div>
                            </Col>
                            <Col md="4" className="">
                                <h3  className=""> TESTIMONIALS</h3>
                                <p>
                                    “Aenean ullamcorper purus vitae nisl tristique sollicitudin. Quisque vestibulum, erat ornare.”
                                    </p>

                                  <p>
                                      <b>-John Doe and Jane Doe- </b></p>
                            </Col>
                        </Row>
                    </div>
                </div>
                    <Cards />
                </Container>

            <Footer />
        </>
    )
}

export default Home    ;