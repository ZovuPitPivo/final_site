import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Contacts = () => {
    return(
        <Container style={{width: '800px'}}>
            <h1 className="text-center">Contact Us</h1>
            <Form >
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Address" />
                            <Form.Text>
                                We'll never share your mail with anyone else
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Name"/>
                        </Form.Group>
                    </Col>
                    </Row>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Write suggestions or errors" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                            
                <Button href="/" variant="primary" >Submit</Button>
            </Form> 
        </Container>
    )
}

 
export {Contacts}; 