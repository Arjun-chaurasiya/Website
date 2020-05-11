import React from 'react'
import Navbar1 from '../NavBar/Navbar1'
import Footer from '../../Footer/Footer'
import './style.css'
import Container from "reactstrap/es/Container";

function About() {
    return (
        <>
        <Navbar1/>
        <Container className="border-left border-right border-bottom border-top">
           <div class="cant">
               <div class="aboutustext p-2">
                   <h2 >
                       About us
                   </h2>
               </div>
               <div className="img-fluid">
               <img src="images\aboutus\thumb-up.jpg" alt="this is sample tempalate for website design" style={{ width: `100%`, maxWidth: `1000px`  }}/>
               </div>
           </div>
          		 <div className="d-flex justify-content-center ml-3">
           <div >
			<h3>We Have Free Templates for Everyone</h3>
            <p className="">
				Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="http://www.freewebsitetemplates.com/about/terms/"> <u>Terms of Use</u></a>. You can even remove all our links if you want to.
			</p>
			<h3>We Have More Templates for You</h3>
			<p>
				Looking for more templates? Just browse through all our <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> and find what you're looking for. But if you don't find any website template you can use, you can try our <a href="http://www.freewebsitetemplates.com/freewebdesign/"> <u>Free Web Design</u></a> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
			</p>
			<h3>Be Part of Our Community</h3>
			<p>
				If you're experiencing issues and concerns about this website template, join the discussion <a href="http://www.freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
			</p>
			<h3>Template details</h3>
			<p>
				Design version 11. Code version 6.
			</p>
			<p>
				Website Template details, discussion and updates for this <a href="http://www.freewebsitetemplates.com/discuss/lawfirm/"> <u>Law Firm Web Template</u></a>.
			</p>
			<p>
				Website Template design by <a href="http://www.freewebsitetemplates.com/"><u>Free Website Templates</u></a>.
			</p>
			<p>
				Please feel free to remove some or all the text and links of this page and replace it with your own About content.
			</p>
            </div>
            </div>

		</Container>
			<Footer/>

        </>
    )
}


export default About



