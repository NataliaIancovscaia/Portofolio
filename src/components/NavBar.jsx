import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg'
// import navIcon1 from '../assets/img/nav-icon1.svg'
// import navIcon2 from '../assets/img/nav-icon2.svg'
// import navIcon3 from '../assets/img/nav-icon3.svg'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { useEffect } from 'react';
export const NavBar = () => {
 const [activeLInk,setActiveLink]=useState("home")
 const[scrolled,setScrolled]=useState(false);

 useEffect (()=>{
  const onScroll=()=>{
    if (window.scrollY>50){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }

  window.addEventListener("scroll",onScroll);
  return ()=>window.removeEventListener("scroll",onScroll)
 },[])

 const onUpdateActiveLink=(value)=>{
  setActiveLink(value);
 }

  return (
    <Navbar expand="lg" className={scrolled ? "scroled ":""}>
      <Container>

        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" 
                      className={activeLInk==="home"
                        ?"active-navbar-link"
                        :"navbar-link" }
                        onClick={()=>onUpdateActiveLink("home")}>
                       
                            Home
            </Nav.Link>
            <Nav.Link href="#skills"
                       className={activeLInk==="skills"
                        ?"active-navbar-link"
                        :"navbar-link" } 
                        onClick={()=>onUpdateActiveLink("skills")}>
                           Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={activeLInk==="projects"
                        ?"active-navbar-link"
                        :"navbar-link" } 
                       onClick={()=>onUpdateActiveLink("projects")}>
                             Projects
            </Nav.Link>
            
          </Nav>
          {/* <span className='navbar-text'>
            <div className='social-icons'>
              <a href="#"> <img src={navIcon1} alt="" /></a>          

              <a href="#"> <img src={navIcon2} alt="" /></a>

              <a href="#"> <img src={navIcon3} alt="" /></a>

            </div>
             <button className='vvd' 
                     onClick={()=>console.log("connect")}>
                          <span>Let s connect</span>
              </button>
          </span> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}





