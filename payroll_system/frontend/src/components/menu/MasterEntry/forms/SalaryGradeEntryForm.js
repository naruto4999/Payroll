import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'



const SalaryGradeEntryForm = () => {
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
                                        <th>Salary Grade Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Staff</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Worker</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="category-name">
                                <Form.Label >Salary Grade Name</Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default SalaryGradeEntryForm;