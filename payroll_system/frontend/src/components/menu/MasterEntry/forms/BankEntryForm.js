import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'



const BankEntryForm = () => {
    return (
        <div>
            <Container>

                <Form>
                    <br />
                    <Row>
                        <Col>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Bank Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Bank of Baroda</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="bank-name">
                                <Form.Label >Bank Name</Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="bank-address">
                                <Form.Label >Bank Address</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="ac-number">
                                <Form.Label >A/C Number</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="number" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default BankEntryForm;