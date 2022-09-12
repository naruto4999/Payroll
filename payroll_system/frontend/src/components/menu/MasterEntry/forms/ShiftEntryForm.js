import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'



const ShiftEntryForm = () => {
    return (
        <div>
            <Container>
                <br />
                <Form>
                    <br />
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Shift Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>GN</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>GN2</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Form.Group as={Row} className="mb-3" controlId="shift-name">
                        <Form.Label column sm={2} >Shift Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="shift-beginning-time">
                        <Form.Label column sm={2} >Shift Beginning Time</Form.Label>
                        <Col sm={2}>
                            <Form.Control type="time" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="shift-end-time">
                        <Form.Label column sm={2} >Shift End Time</Form.Label>
                        <Col sm={2}>
                            <Form.Control type="time" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="lunch-time">
                        <Form.Label column sm={2} >Lunch Time (in minutes)</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="tea-time">
                        <Form.Label column sm={2} >Tea Time (in minutes)</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="late-grace">
                        <Form.Label column sm={2} >Late Grace (in minutes)</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="ot-time">
                        <Form.Label column sm={2} >O.T May Begin After (in minutes)</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="shift-before-pickup">
                        <Form.Label column sm={2} >Shift Before Pickup Time (in minutes)</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="next-punch-not-pickup">
                        <Form.Label column sm={2} >Next Puch Not Pickup (in minutes)</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="half-day">
                        <Form.Label column sm={2} >For Half Day Minimum WorKing Time (in minutes)</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="full-day">
                        <Form.Label column sm={2}>For Full Day Minimum Working Time (in minutes)</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="short-leave-allowed">
                        <Form.Label column sm={2} >Number of Short Leave Allowed in a Month</Form.Label>
                        <Col sm={1}>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                </Form>
            </Container>
        </div>
    );
}

export default ShiftEntryForm;