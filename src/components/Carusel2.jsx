import React from 'react'
import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import meme1 from "../assets/memeses/Rayan1.jpg"
import meme2 from "../assets/memeses/Rayan2.jpg"
import meme3 from "../assets/memeses/Rayan3.jpg"
import meme4 from "../assets/memeses/Rayan4.jpg"
import meme5 from "../assets/memeses/Rayan5.jpg"
import meme6 from "../assets/memeses/Rayan6.jpg"
import meme7 from "../assets/memeses/Rayan7.jpg"
import meme8 from "../assets/memeses/Rayan8.jpg"
import meme9 from "../assets/memeses/Rayan9.jpg"
import meme10 from "../assets/memeses/Rayan10.jpg"


export default class CarouselMemeBox1 extends Component{
    render(){
        return(
            <Carousel touch={true} className='m-auto'>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-10 ms-10"
                        src={ meme1 }
                        alt="meme1"
                    />
                    <Carousel.Caption>
                        <h1>хихи</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme2 }
                        alt="Rayan2"
                    />
                    <Carousel.Caption>
                        <h1>хаха</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme3 }
                        alt="Rayan3"
                    />
                    <Carousel.Caption>
                        <h1>хихи</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme4 }
                        alt="Rayan4"
                    />
                    <Carousel.Caption>
                        <h1>хаха</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme5 }
                        alt="Rayan5"
                    />
                    <Carousel.Caption>
                        <h1>хихи</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme6 }
                        alt="Rayan6"
                    />
                    <Carousel.Caption>
                        <h1>хаха</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme7 }
                        alt="Rayan7"
                    />
                    <Carousel.Caption>
                        <h1>хихи</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme8 }
                        alt="Rayan8"
                    />
                    <Carousel.Caption>
                        <h1>хаха</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme9 }
                        alt="Rayan9"
                    />
                    <Carousel.Caption>
                        <h1>хаха</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-blok w-100 h-75 m-auto"
                        src={ meme10 }
                        alt="Rayan10"
                    />
                    <Carousel.Caption>
                        <h1>хихи</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
