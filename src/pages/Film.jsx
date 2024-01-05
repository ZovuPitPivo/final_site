import { Col, Container, Row, Card} from "react-bootstrap";
import barbi from "../assets/movies/sub-buzz-1285-1686676625-1.jpg"
import drive from "../assets/movies/cf2626312ca5ba5399e98e235761f15f.jpg"
import runer from "../assets/movies/BR2_poster_web_RGB_5.jpg"
import laland from "../assets/movies/6309175475.jpg"
import YoutubeEmbed from "../components/YouTVideo";

const Films = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <Card bg='dark' text='light' className="mt-2">
                        <Row>
                           <Col md={4}>
                             <Card.Img src={barbi} />
                           </Col>
                           <Col md={8}>
                             <Card.Body>
                               <h2>Барби</h2>
                               <YoutubeEmbed embedId="w0m2C3lN1h8"/>
                             </Card.Body>
                           </Col>
                        </Row>
                    </Card>
                    <Card bg='dark' text='light'className="mt-2">
                        <Row>
                           <Col md={4}>
                             <Card.Img src={drive} />
                           </Col>
                           <Col md={8}>
                             <Card.Body>
                               <h2>Drive</h2>
                               <YoutubeEmbed embedId="SDhGly0CgvQ"/>
                             </Card.Body>
                           </Col>
                        </Row>
                    </Card>
                    <Card bg='dark' text='light' className="mt-2">
                        <Row>
                           <Col md={4}>
                             <Card.Img src={runer} />
                           </Col>
                           <Col md={8}>
                             <Card.Body>
                               <h2>Бегущие по лезвию 2049</h2>
                               <YoutubeEmbed embedId="3s5zsFm3VgA"/>
                             </Card.Body>
                           </Col>
                        </Row>
                    </Card>
                    <Card bg='dark' text='light' className="mt-2">
                        <Row>
                           <Col md={4}>
                             <Card.Img src={laland} />
                           </Col>
                           <Col md={8}>
                             <Card.Body>
                               <h2>La-La-La Land</h2>
                               <YoutubeEmbed embedId="lneNCBIXD4I"/>
                             </Card.Body>
                           </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {Films};
