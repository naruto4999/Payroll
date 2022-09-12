import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

const CompanyEntryForm = () => {
  const defaultNewCompanyDetails = {
    id: "",
    add: "",
    keyPerson: "",
    involvingIndustry: "",
    phoneNo: "",
    email: "",
    pfNo: "",
    esiNo: "",
    headOffice: "",
    pan: "",
    tin: "",
    regNo: "",
    regDate: "",
  };
  const [companies, setCompanies] = useState([]);
  const [newCompanyDetails, setNewCompanyDetails] = useState(
    defaultNewCompanyDetails
  );
  const [disableEdit, setDisableEdit] = useState(true);
  const [detailsExist, setDetailsExist] = useState(false);

  useEffect(() => {
    fetch("/api/company")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCompanies(data);
        console.log(newCompanyDetails);
      });
  }, []);

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   fetch("/api/company-details", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  const changeHandler = (event) => {
    setNewCompanyDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
    // console.log(newCompanyDetails)
    // console.log(event.target.value)
    // console.log(event.target.name)

    if (event.target.name == "id") {
      setDisableEdit(true);
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch("/api/company-details/" + event.target.value, requestOptions)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 404) {
            return Promise.reject("error 404");
          } else {
            return Promise.reject("some other error :" + response.status);
          }
        })
        .then((data) => {
          console.log(data);
          setNewCompanyDetails({
            id: data.company,
            add: data.address,
            keyPerson: data.key_person,
            involvingIndustry: data.involving_industry,
            phoneNo: data.phone_no,
            email: data.email,
            pfNo: data.pf_no,
            esiNo: data.esi_no,
            headOffice: data.head_office_address,
            pan: data.pan_no,
            tin: data.tin_no,
            regNo: data.registration_no,
            regDate: data.registration_date,
          });
          setDetailsExist(true);
        })
        .catch((error) => {
          console.log("error is", error);
          setNewCompanyDetails({
            ...defaultNewCompanyDetails,
            [event.target.name]: event.target.value,
          });
          setDetailsExist(false);
        });
    }
  };

  const editButtonClicked = () => {
    setDisableEdit(false);
  };

  const addButtonClicked = () => {
    if (detailsExist == true) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // company: newCompanyDetails.id, (not necessary but won't throw an error with PUT)
          address: newCompanyDetails.add,
          key_person: newCompanyDetails.keyPerson,
          involving_industry: newCompanyDetails.involvingIndustry,
          phone_no: newCompanyDetails.phoneNo,
          email: newCompanyDetails.email,
          pf_no: newCompanyDetails.pfNo,
          esi_no: newCompanyDetails.esiNo,
          head_office_address: newCompanyDetails.headOffice,
          pan_no: newCompanyDetails.pan,
          tin_no: newCompanyDetails.tin,
          registration_no: newCompanyDetails.regNo,
          registration_date: newCompanyDetails.regDate,
        }),
      };
      console.log(requestOptions.body);
      fetch("/api/company-details/" + newCompanyDetails.id, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(newCompanyDetails);
        });
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: newCompanyDetails.id,
          address: newCompanyDetails.add,
          key_person: newCompanyDetails.keyPerson,
          involving_industry: newCompanyDetails.involvingIndustry,
          phone_no: newCompanyDetails.phoneNo,
          email: newCompanyDetails.email,
          pf_no: newCompanyDetails.pfNo,
          esi_no: newCompanyDetails.esiNo,
          head_office_address: newCompanyDetails.headOffice,
          pan_no: newCompanyDetails.pan,
          tin_no: newCompanyDetails.tin,
          registration_no: newCompanyDetails.regNo,
          registration_date: newCompanyDetails.regDate,
        }),
      };
      console.log(requestOptions.body);
      fetch("/api/company-details", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(newCompanyDetails);
        });
    }
    setNewCompanyDetails(defaultNewCompanyDetails);
  };

  const selectMenuRender = (company, index) => {
    return <option value={company.id}>{company.name}</option>;
  };
  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "sub_company_name",
      text: "Sub-Company",
    },
    {
      dataField: "name",
      text: "Parent-Company",
    },
  ];

  return (
    <div>
      <Container>
        <br />
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="comapny">
            <Form.Select
              onChange={changeHandler}
              name="id"
              aria-label="Default select example"
            >
              <option>Select Parent Company</option>
              {companies.map(selectMenuRender)}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="address-1">
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={changeHandler}
                type="text"
                name="add"
                value={newCompanyDetails.add}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="key-person">
            <Form.Label column sm={2}>
              Key Person
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                onChange={changeHandler}
                type="text"
                name="keyPerson"
                value={newCompanyDetails.keyPerson}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="involving-industry">
            <Form.Label column sm={2}>
              Involving Industry
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                onChange={changeHandler}
                type="text"
                name="involvingIndustry"
                value={newCompanyDetails.involvingIndustry}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="phone">
            <Form.Label column sm={2}>
              Phone Number
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                onChange={changeHandler}
                type="tel"
                pattern="[0-9]{10}"
                maxLength="10"
                name="phoneNo"
                value={newCompanyDetails.phoneNo}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                onChange={changeHandler}
                type="email"
                name="email"
                value={newCompanyDetails.email}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="pf-number">
            <Form.Label column sm={2}>
              P.F Number
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                onChange={changeHandler}
                type="text"
                name="pfNo"
                value={newCompanyDetails.pfNo}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="esi-number">
            <Form.Label column sm={2}>
              E.S.I Number
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                onChange={changeHandler}
                type="number"
                name="esiNo"
                value={newCompanyDetails.esiNo}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="head-office">
            <Form.Label column sm={2}>
              Head Office
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={changeHandler}
                type="text"
                name="headOffice"
                value={newCompanyDetails.headOffice}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="pan-number">
            <Form.Label column sm={2}>
              Pan Number
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                onChange={changeHandler}
                type="text"
                name="pan"
                value={newCompanyDetails.pan}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="tin-number">
            <Form.Label column sm={2}>
              Tin Number
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                onChange={changeHandler}
                type="text"
                name="tin"
                value={newCompanyDetails.tin}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="reg-number">
            <Form.Label column sm={2}>
              Registration Number
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                onChange={changeHandler}
                type="text"
                name="regNo"
                value={newCompanyDetails.regNo}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="registration-date">
            <Form.Label column sm={2}>
              Registration Date
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                onChange={changeHandler}
                type="date"
                name="regDate"
                value={newCompanyDetails.regDate}
                disabled={disableEdit}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="add-button">
            <Button onClick={addButtonClicked} variant="outline-primary">
              Add
            </Button>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="edit-button">
            <Button onClick={editButtonClicked} variant="outline-secondary">
              Edit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default CompanyEntryForm;
