import React from 'react'
import Navbar1 from '../NavBar/Navbar1'
import Footer from '../../Footer/Footer'
import './style.css'

import {Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom'
import Container from "reactstrap/es/Container";

function Ourlawyers() {
    return (
        <>
            <Navbar1 />
            <Container>
                <Row className="p-3  border-secondary" >
                    <Col md="4" className=" border-bottom  ">
                        <div className="text-monospace p-4 ml-2">
                            <h3  className="border-bottom">
                                RECENT NEWS
                            </h3>
                        </div>
                        <div className=" p-2 ml-4 " >
                            <p >
                                This website template has been designed
                                by Free Website Templates for you, forfree.
                                You can replace all
                                this text<br /> with your own text.
                            </p>
                        </div>
                        <div className=" p-2 ml-4 ">
                            <p >
                                You can remove any link to our website
                                from this website template, you're free to
                                use this website template without linking
                                back to us.
                            </p>
                        </div>
                        <div className=" p-2 ml-4 border-bottom  ">
                            <p >
                                If you're having problems editing this
                                website template, then don't hesitate to
                                ask for help on the Forums.
                            </p>
                        </div>
                        <div className=" p-2 ml-4 border-bottom  ">
                            <div className="text-muted  ">
                                <b>CLIENT TESTIMONIALS</b>
                            </div>

                            <p >
                                “The best family lawyers in the city so far.
                                Me and my ex-wife didn’t have any
                                problems settling the terms and >agreement.
                                Everything went so  smoothly. We’re both very happy.”
                            </p>
                        </div>
                    </Col>

                    <Col md="8">
                        <ul className="news p-2">
                            <li className="border-bottom ">
                                <div className="box">
                                    <img className="border border-secondary" src="/images/news/bride-sideview.jpg" alt="Img"  />
                                </div>
                                <div className=""></div>
                                <p >
                                    31st January 2023 by <span className="author">Manes Winchester</span>
                                </p>
                                <h3 >The Basics of Marriage Laws</h3>
                                <p>
                                    This website template has been designed by Free Website Templates for you, for free. You
                                    can replace all this text with your own text.You can remove any link
                                </p>
                                <Link to='/'><Button className="card-subtitle"> Read More</Button></Link>

                            </li>
                            <li className="border-bottom p-4 ">
                                <div className="box">
                                    <img className="border border-secondary" src="images/news/happy.jpg" alt="Img" height="245" width="213"/>
                                </div>
                                <p >
                                    31st January 2023 by <span className="author">Manes Winchester</span>
                                </p>
                                <h3 >Happy Newly Divorced Women</h3>

                                <p>
                                    This website template has been designed by Free Website Templates for you, for free. You
                                    can replace all this text with your own text.You can remove any link
                                </p>
                                <Link to='/'><Button className="card-subtitle"> Read More</Button></Link>
                            </li>
                            <li className="border-bottom ">
                                <div className="box">
                                    <img className="border border-secondary" src="images/news/children.jpg" alt="Img" height="245" width="213"/>
                                </div>
                                <p >
                                    31st January 2023 by <span className="author">Manes Winchester</span>
                                </p>
                                <h3 >Divorced Parents</h3>
                                <p>
                                    This website template has been designed by Free Website Templates for you, for free. You
                                    can replace all this text with your own text.You can remove any link
                                </p>
                                <Link to='/'><Button className="card-subtitle"> Read More</Button></Link>
                            </li>
                        </ul>

                    </Col>
                </Row>
            </Container>


            <Footer/>
        </>

    )
}

export default Ourlawyers
