import React from 'react'
import { Component } from "react";
import {Nav, Container, Tab, Row, Col} from 'react-bootstrap'
import Carousel from "react-bootstrap/Carousel";
import Rayan1 from '../assets/movies/movie1.jpg'
import Rayan2 from '../assets/movies/movie2.jpg'
import Rayan3 from '../assets/movies/movie3.jpg'
import Rayan4 from '../assets/movies/movie4.jpg'
import Rayan5 from '../assets/movies/movie41.jpg'


export default class CarouselBox1 extends Component{
    render(){
        return(
        <Carousel className=' w-75 m-auto'>
            <Carousel.Item>
                <img
                    className="d-blok w-100"
                    src={ Rayan1 }
                    alt="Rayan1"
                />
                <Carousel.Caption>
                    <h1>Что</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-blok w-100"
                    src={ Rayan2 }
                    alt="Rayan2"
                />
                    <Carousel.Caption>
                        <h1>Вы</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100"
                        src={ Rayan3 }
                        alt="Rayan3"
                    />
                    <Carousel.Caption>
                        <h1>Знаете</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100"
                        src={ Rayan4 }
                        alt="Rayan4"
                    />
                    <Carousel.Caption>
                        <h1>О</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-95"
                        src={ Rayan5 }
                        alt="Rayan5"
                    />
                    <Carousel.Caption>
                        <h1>Райане?</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
