import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { Col, Row, Form } from "react-bootstrap";



const DesignationEntryForm = () => {

    const columns = [{
        dataField: 'id',
        text: 'Code',
        headerStyle: { width: '80px' }
    }, {
        dataField: 'designation-name',
        text: 'Designation Name',
        headerStyle: { width: '200px' },
    }];

    const data = [
        { id: 1, 'designation-name': 'Tailor' },
    ]

    return (
        <Container>
            <br />
            <Form>
                <Row>
                    <Col>
                        <BootstrapTable
                            keyField='paycode'
                            data={data}
                            columns={columns}
                            headerClasses='header-class'
                            classes='column-class'
                            bootstrap4 />
                    </Col>
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="dept-name">
                            <Form.Label >Designation Name</Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );



}

export default DesignationEntryForm;