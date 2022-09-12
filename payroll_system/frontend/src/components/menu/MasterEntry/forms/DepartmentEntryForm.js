import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'



const DepartmentEntryForm = () => {
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
                                        <th>Department Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Account</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Admin</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Cutting</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="dept-name">
                                <Form.Label >Department Name</Form.Label>
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

export default DepartmentEntryForm;