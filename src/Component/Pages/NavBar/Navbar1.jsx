import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText
} from 'reactstrap';
import './style.css'

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (

      <Navbar  expand="md " className="Navcolor">
        
        <NavbarBrand style={{ width: `70%`, maxWidth: `500px` }} className="mr-auto">
            <img src="images/Navbar/logo.png" alt="" width="100%"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem >
              <NavLink >{<Link to="/" class="linkcolor" >HOME</Link>}</NavLink>
            </NavItem>
            <NavItem >
              <Link to="/about" class="linkcolor" ><NavLink >ABOUT</NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink >{<Link to="ourlawyers" class="linkcolor" >OURLAWYERS</Link>}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >{<Link to="/news" class="linkcolor" >NEWS</Link>}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >{<Link to="/contact" class="linkcolor" >CONTACT</Link>}</NavLink>
            </NavItem>

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          
        </Collapse>
      </Navbar>
  )
}

export default Navbar1
