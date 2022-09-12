import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-submenu/dist/index.css"
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { NavLink } from "react-router-dom";


const MasterEntry = (props) => {


    return (
        <NavDropdownMenu title="Master Entry" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to='menu/new-company-entry'>Add New Company</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/menu/company-entry'>Company Entry</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Divider />
            <NavDropdown.Item >Department Head Entry</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/menu/department-entry'>Department Entry</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/menu/designation-entry'>Designation Entry</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/menu/category-entry'>Category Entry</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/menu/salary-grade-entry'>Salary Grade Entry</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/menu/bank-entry'>Bank Entry</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.8">Leave Grade Entry</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/menu/shift-entry'>Shift Entry</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/menu/holiday-entry'>Holiday Entry</NavDropdown.Item>
            <DropdownSubmenu href="#action/1.11" title="Heads Entry">
                <NavDropdown.Item href="action/1.11.1">Earnings</NavDropdown.Item>
                <NavDropdown.Item href="action/1.11.2">Deductions</NavDropdown.Item>
                <NavDropdown.Item href="action/1.11.3">Reimbursement</NavDropdown.Item>
            </DropdownSubmenu>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/menu/employee-entry'>Employee Entry</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.13">Leave Opening Entry</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.14">Miscellaneous Entry</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.15">WF HD ENTRY</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.16">Shift Ot Setup</NavDropdown.Item>
            <DropdownSubmenu href="#action/1.17" title="Setup Entry">
                <NavDropdown.Item href="#action/1.17.1">ESI/PF</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.17.2">Date Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.17.3">PF Master</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.17.4">ESI Master</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.17.5">Attendance Definition Entry</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.17.6">Days Settings</NavDropdown.Item>
            </DropdownSubmenu>
            <NavDropdown.Item href="#action/1.18">Import Master</NavDropdown.Item>
        </NavDropdownMenu>
    );
}

export default MasterEntry;