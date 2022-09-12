//import './MenuItem.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-submenu/dist/index.css"

import MasterEntry from './MasterEntry/MasterEntry';
import { Outlet } from 'react-router-dom';



const MenuItem = () => {
//     const FormHandlerObj = {
//         isEditingCompanyEntry:false,
//         isEditingDepartmentEntry: false
//     }

//     const [isEditing, setIsEditing] = useState(FormHandlerObj);

//     const startEditingHandler = (event, menu_item) => {
//         //console.log(menu_item)
//         let FormHandlerObjCopy = {
//             ...FormHandlerObj
//         }
//         FormHandlerObjCopy[menu_item] = true
//         setIsEditing(FormHandlerObjCopy);
//     };

//     const stopEditingHandler = () => {
//         setIsEditing({
//             isEditingCompanyEntry: false
//         });
//     };

    return (
        <div className="">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Payroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <MasterEntry
                                // onCompanyEntryClick={startEditingHandler}
                                // onDepartmentEntryClick={startEditingHandler}
                            />

                            <NavDropdownMenu title="Transaction" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/2.1">Monthly Shift Change</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2.2">Time Updation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.3">Manual Attendance Updation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.4">Leave Updation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.5">Loan Updation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.6">Deduction Updation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.7">Salary Preparation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.8">Bonus Preparation</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2.9">Salary Deletion</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2.10">Resignation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.11">Increment Processing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.12">Arear Auto Processing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.13">Arear Updation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.14">Employee Item Allow Entry</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.15">Manpower Entry</NavDropdown.Item>
                            </NavDropdownMenu>

                            <NavDropdownMenu title="Reports" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Personnel File Forms</NavDropdown.Item>
                                <DropdownSubmenu href="#action/3.2" title="Time Attendance">
                                    <NavDropdown.Item href="#action/3.2.1">Monthly/Periodically</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2.2">Daily Reports</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2.3">Combined Reports</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2.4">Periodically Reports</NavDropdown.Item>
                                </DropdownSubmenu>
                                <NavDropdown.Item href="#action/3.3">Salary Sheet/Overtime</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Payslip</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Arear</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Bank/Cheque/Cash/PF EST EXMP</NavDropdown.Item>
                                <DropdownSubmenu href="#action/3.7" title="Bonus">
                                    <NavDropdown.Item href="#action/3.7.1">Bonus New</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.7.2">Bonus Old</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.8" title="P.F Detail">
                                    <NavDropdown.Item href="#action/3.8.1">Month Reports</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.8.2">Yearly Reports</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.8.3">Eligibility Register</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.8.4">PF 19 10 Reports</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.8.5">PF KYC Upload</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.9" title="E.S.I Detail">
                                    <NavDropdown.Item href="#action/3.9.1">Monthly</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.9.2">Half Yearly</NavDropdown.Item>
                                </DropdownSubmenu>
                                <NavDropdown.Item href="#action/3.10">Master Roll/Leave Detail</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.11">Adult Sheet</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.12">Loan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.13">Full and Final</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.14">Join and Resign</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.15">Other Letter(Exp.)</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.16">Factory Data</NavDropdown.Item>
                            </NavDropdownMenu>

                            <NavDropdownMenu title="Specific Report" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/4.1">Employee Details Export</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.2">Month to Month Reports</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.3">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.4">Comparison Reports</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.5">Increment Chart</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.6">GRATUITY</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.7">Factory Act</NavDropdown.Item>
                            </NavDropdownMenu>

                            <NavDropdownMenu title="Utilities" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/5.1">New User Entry</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.2">Power of Users</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.3">Leave Year Closings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.4">Currency Period Closing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.5">Reminders</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.6">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.7">Notepad</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.8">Calculator</NavDropdown.Item>
                                <DropdownSubmenu href="#action/5.9" title="Database Maintenance">
                                    <NavDropdown.Item href="#action/5.9.1">Bacup</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/5.9.2">Restore</NavDropdown.Item>
                                </DropdownSubmenu>
                                <NavDropdown.Item href="#action/5.10">Help</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.11">Change Company [Year]</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.12">Systems</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5.13">Freeze Monthly Data</NavDropdown.Item>
                            </NavDropdownMenu>

                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        

            {/* {!isEditing.isEditingCompanyEntry && <div/>}
            {isEditing.isEditingCompanyEntry && <CompanyEntryForm/>}

            {!isEditing.isEditingDesignationEntry && <div/>}
            {isEditing.isEditingDesignationEntry && <DesignationEntryForm/>} */}


        </div>
    );
}

export default MenuItem;