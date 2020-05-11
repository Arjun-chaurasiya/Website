import React,{useState} from 'react'

import Footer from '../../Footer/Footer'

import { Container, Row, Col, Button ,Form, FormGroup, Label, Input,} from 'reactstrap';
import Navbar1 from "../NavBar/Navbar1";



 function Contact() {
     const [person, setName] = useState(
         {
             FirstName: '',
             LastName: '',
             Email: '',
             Msg: ''
         })
     const encode = (data) => {
         return Object.keys(data)
             .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
             .join("&");
     }


    const  handleSubmit = e => {
         fetch("/", {
             method: "POST",
             headers: { "Content-Type": "application/x-www-form-urlencoded" },
             body: encode({ "form-name": "contact", ...person })
         })
             .then(() => alert("Success!"))
             .catch(error => alert(error));

         e.preventDefault();
     };

    return (

        <>
           <Navbar1/>
            <Container>
                <Row className=" border-secondary mt-4">
                    <Col md="5" className="border-right">
                        <h3>
                            CONTACT INFO
                        </h3>
                        <div>
                        <ul class="contact">
						<li>
							<p>
                             Manes Winchester <br/> Family Law Firm the address city, state 1111
							</p>
						</li>
						<li>
							<p class="phone">
								Phone: (+20) 000 222 999
							</p>
						</li>
						<li>
							<p class="fax">
								Fax: (+20) 000 222 988
							</p>
						</li>
						<li>
							<p class="mail">
								Email: info@freewebsitetemplates.com
							</p>
						</li>
					</ul>
                        </div>
                    </Col>
                    <Col md="7"><h3>
                            CONTACT INFO
                        </h3>
                        <div>
                        <b className="text-muted">SEND US A QUICK MESSAGE</b> <br/>
                            <p>
                            You can remove any link to our website from this website template, 
                            you're free to use this <br/>website template without linking back to us.
                            If you're having problems editing this website template,<br/> then don't 
                            hesitate to ask for help on the Forums.
                            </p>

                            {/*<Form onSubmit={handleSubmit} action="POST" data-netlify={"true"} >*/}
                            <Form onSubmit={handleSubmit} netlify>
                              <FormGroup>
                                <Label >First Name</Label>
                                <Input type="text" value={person.FirstName} onChange={(e) => setName({...person,FirstName: e.target.value})} placeholder="Enter Your First Name" />
                              </FormGroup>
                              <FormGroup>
                                <Label >Last  Name</Label>
                                <Input type="text"   value={person.LastName} onChange={(e)=>setName({...person,LastName:e.target.value})} placeholder="Enter Your Last Name" />
                              </FormGroup>
                              <FormGroup>
                                <Label >Email</Label>
                                <Input type="email" value={person.Email} onChange={(e)=>setName({...person,Email:e.target.value})} placeholder="Enter Your E-mail" />
                              </FormGroup>
                              <FormGroup>
                                <Label >Message</Label>
                                <Input type="textarea" name="text" value={person.Msg} onChange={(e)=>setName({...person,Msg:e.target.value})}  />
                              </FormGroup>
                                <div className={'field'}>
                                    <div data-netlify-recaptch></div>

                                </div>

                                <Button type="submit"   >Send Message </Button>
                            </Form>
                        </div>
                        </Col></Row>
            </Container>
            <Footer />
        </>
   
    )
}

export default Contact




