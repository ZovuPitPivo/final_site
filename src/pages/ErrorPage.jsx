import { Button, Col, Row } from "react-bootstrap";

const Error = () => {
    return(
        <>
        <h1 className="text-center">Oops, something went wrong.</h1>
        <Row>
            <Button href='/' className="mt-4">Go Home</Button>
            <Button href='/contact' className="mt-4">Report</Button>
        </Row>
        </>
    )
}

export {Error};