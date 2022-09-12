import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './EmployeeEntryForm.css'
import BootstrapTable from 'react-bootstrap-table-next';




const EmployeeEntryForm = () => {

    


    const columns = [{
        dataField: 'id',
        text: 'S.No',
        headerStyle: { width: '45px' },
        style: {fontSize: '12px'}
    }, {
        dataField: 'paycode',
        text: 'Paycode',
        headerStyle: { width: '80px' },
    }, {
        dataField: 'card-no',
        text: 'Card No.',
        headerStyle: { width: '80px' },
    }, {
        dataField: 'name',
        text: 'Employee Name',
        headerStyle: { width: '200px'}
    }, {
        dataField: 'fname-hname',
        text: 'Father/Husband Name',
        headerStyle: { width: '200px'}
    }, {
        dataField: 'doj',
        text: 'D.O.J',
        headerStyle: { width: '100px'}
    }, {
        dataField: 'resign-date',
        text: 'Resign Date',
        headerStyle: { width: '100px'}
    }, {
        dataField: 'designation',
        text: 'Designation',
        headerStyle: { width: '100px'}
    }, {
        dataField: 'dept',
        text: 'Department',
        headerStyle: { width: '100px'}
    }, {
        dataField: 'location',
        text: 'Location',
        headerStyle: { width: '120px'}
    }, {
        dataField: 'sub-company',
        text: 'Sub Company'

    }];

    let cur_date = new Date(2018, 11, 24);

    const data = [
        { id: 1, paycode: 13, 'card-no': 13, name: 'Naruto Uzumaki', 'fname-hname': 'Kaushal Kumar Singh', doj: cur_date.toISOString().split('T')[0], 'resign-date': '', 'designation': 'Manager', 'dept': 'Production', 'location': '', 'sub-company': '' },
        { id: 2, paycode: 123, 'card-no': 123, name: 'Ichigo Kurosaki', 'fname-hname': 'Sasuke Uchiha', doj: cur_date.toISOString().split('T')[0], 'resign-date': '', 'designation': 'Technician', 'dept': 'Production', 'location': '', 'sub-company': '' }
    ]
    return (
        <Container>
            <br />
            <BootstrapTable
                keyField='paycode'
                data={data}
                columns={columns}
                headerClasses='header-class'
                classes='column-class'
                bootstrap4
                hover />
        </Container>
    )
}

export default EmployeeEntryForm;

