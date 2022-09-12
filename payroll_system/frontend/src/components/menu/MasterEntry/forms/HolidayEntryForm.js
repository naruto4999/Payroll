import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'



const HolidayEntryForm = () => {
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
                                <th>Date</th>
                                <th>Holiday Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>01/Jan/2022</td>
                                <td>New Year</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>26/Jan/2022</td>
                                <td>Republic Day</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Form.Group as={Row} className="mb-3" controlId="holiday-name">
                        <Form.Label column sm={2} >Holiday Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="holiday-date">
                        <Form.Label column sm={2} >Date</Form.Label>
                        <Col sm={2}>
                            <Form.Control type="date" />
                        </Col>
                    </Form.Group>

                </Form>
            </Container>
        </div>
    );
}

export default HolidayEntryForm;