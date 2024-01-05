import { Card, Container } from "react-bootstrap";
import CarouselBox1 from "../components/Carusel";
import YoutubeEmbed from "../components/YouTVideo";
import Rayan from "../assets/memeses/Rayan10.jpg";

const Home = () => {
    return(
        <div>
            <CarouselBox1/>
            <Container>
                <h1 className="text-ctnter n-4">Some Funny About Rayan</h1>
                <Card bg='dark' text='light'>
                    <Card.Img
                    variant="top"
                        src={Rayan}
                        style={{height: '50%', width: '50%'}}
                    />
                    <Card.Body>
                        <h2>Funny interview with Rayan</h2>
                        <YoutubeEmbed embedId="1NRqPBdeaOU"/>
                        <h2>History of Rayan</h2>
                        <YoutubeEmbed embedId="_qzTzBzdwFQ"/>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export {Home};