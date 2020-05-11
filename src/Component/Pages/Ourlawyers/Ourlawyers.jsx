import React from 'react'
import Navbar1 from '../NavBar/Navbar1'
import Footer from '../../Footer/Footer'
import './style.css'

import { Row, Col } from "reactstrap";
import Container from "reactstrap/es/Container";


function Ourlawyers() {
    return (
        <>
            <Navbar1 />
            <Container>
                <Row className="p-4 border-left border-right  border-bottom" >
                    <Col md="4" className="text-monospace border-right">
                            <h3>
                                OUR LAWYERS
                            </h3>
                            <p >
                                This website template has been designed
                                by Free Website Templates for you, for free.
                                You can replace all
                                this text with your own text.
                            </p>
                            <p >
                                You can remove any link to our website
                                from this website template, you're free to
                                use this website template without linking
                                back to us.
                            </p>
                            <p >
                                If you're having problems editing this
                                website template, then don't hesitate to
                                ask for help on the Forums.
                            </p>
                    </Col>

                    <Col md="8">
                        <div >
                            <h2 className='text-muted'> OUR LAWYERS</h2>
                            <p className="ml-1" >
                                <b>DIRECTORS</b>
                            </p>

                            <ul className="liststyle">
                                <li>
                                    <div className="float border border-info mt-2 p-1">
                                        <img src="images/ourlawyears/thumbnail-sideview.jpg" alt="Img" height="99" width="94" />
                                    </div>
                                    <p>
                                        <p class="font-weight-normal"> <b>PAULINE H. WILSON</b> </p>
                                        This website template has been designed by Free Website Templates for you, for
                                        free. You can replace all this text with your
                                        own text.You can remove any link to our website from this website template.
                                    </p>
                                </li>
                                <li className="border-bottom">
                                    <div className="float border border-info mt-2 p-1 ">
                                        <img src="images/ourlawyears/thumbnail-focus.jpg" alt="Img" height="99" width="94" />
                                    </div>
                                    <p>
                                        <p class="font-weight-normal"> <b> KENNETH E. LUNDERBERG </b> </p>
                                        You're free to use this website template without linking back to us.
                                        If you're having problems editing this website template, then don't hesitate
                                        to ask for  help on the Forums.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="border-bottom" >
                            <p className="ml-1" ><b>SENIOR ASSOCIATES</b>
                            </p>
                            <ul className="liststyle ">
                                <li>
                                    <div className="float border border-info mt-2 p-1">
                                        <img src="images/ourlawyears/thumbnail-smile.jpg" alt="Img" height="99" width="94" />
                                    </div>
                                    <p>
                                        <p class="font-weight-normal"> <b>PAULINE H. WILSON</b> </p>
                                        This website template has been designed by Free Website Templates
                                        for you, for free. You can replace all this text with your own text.
                                        You can remove any link to our website from this website template.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div >
                            <p className="ml-1" ><b>ASSOCIATES</b>
                            </p>
                            <ul className="liststyle">
                                <li bo>
                                    <div className="float border border-info mt-2 p-1">
                                        <img src="images/ourlawyears/thumbnail-happy.jpg" alt="Img" height="99" width="94" />
                                    </div>
                                    <p>
                                        <p class="font-weight-normal"> <b>  DENISE M. SILVIA</b> </p>

                                        This website template has been designed by Free Website
                                        Templates for you, for free. You can replace all this text with your own text.
                                        You can remove any link to our website from this website template.
                                    </p>
                                </li>
                                <li>
                                    <div className="float border border-info mt-2 p-1">
                                        <img src="images/ourlawyears/thumbnail-frontview.jpg" alt="Img" height="99" width="94" />
                                    </div>
                                    <p>
                                        <p class="font-weight-normal"> <b> NANCY R. BAKKEN</b> </p>

                                        You're free to use this website template without linking  back to us.
                                        If you're having problems editing this website  template,
                                        then don't hesitate to ask for help on the Forums.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer/>
        </>

    )
}

export default Ourlawyers
