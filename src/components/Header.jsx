import  React, { Component } from 'react'
import { Container, FormControl, Navbar, Nav, Form, Button } from 'react-bootstrap'
import logo from "../assets/memeses/Rayan10.jpg"

export default class Header extends Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand='md' bg = 'dark' variant = 'dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                            src={logo}
                            height='30'
                            width='30' 
                            className='d-inline-block aling-top'
                            alt='Logo'
                            />Rayn's site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='ms-auto'>
                                <Nav.Link href = "/"> Home </Nav.Link>
                                <Nav.Link href = "/about"> About us </Nav.Link>
                                <Nav.Link href = "/films"> Films </Nav.Link>
                                <Nav.Link href = "/contact"> Contact Us </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                
            </div>
        )
    }
}
