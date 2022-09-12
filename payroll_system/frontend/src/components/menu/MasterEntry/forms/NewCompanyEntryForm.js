import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

const NewCompanyEntryForm = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: "",
  });
  const [newCompanyAdded, setNewCompanyAdded] = useState({ added: false });
  const [selectedCompany, setSelectedCompany] = useState("");

  const newCompanyChangeHandler = (event) => {
    setNewCompany({
      name: event.target.value,
    });
  };

  const addButtonClicked = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newCompany.name,
      }),
    };
    fetch("/api/company", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNewCompanyAdded(data);
      });
  };

  const deleteButtonClicked = () => {
    console.log(selectedCompany);
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
    fetch("/api/delete-company/" + selectedCompany.id, requestOptions).then(
      (response) => {
        console.log(response.status);
        if (response.status === 204) {
          setNewCompanyAdded({
            deleted: true,
          });
        }
        else if(response.status === 404) {
          Promise.reject("error 404 Company does not exist")
        }
      }
    );
  };
  //     .then((data) => {
  //       setNewCompanyAdded({
  //         deleted: true,
  //       });
  //     });
  // };

  useEffect(() => {
    fetch("/api/company")
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      });
  }, [newCompanyAdded]);

  const renderCompany = (company, index) => {
    // const new_companies = companies.map((company, index) => company['sn'] = index+1)
    // console.log = (new_companies)
  };

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Company",
    },
  ];

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      console.log(row.id);
      setSelectedCompany({
        id: row.id,
        name: row.name,
      });
    },
  };

  return (
    <div>
      <Container>
        <Form>
          <br />
          <Row>
            <Col>
              <BootstrapTable
                keyField="id"
                data={companies}
                columns={columns}
                selectRow={selectRow}
              />
            </Col>

            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="new-company-name"
              >
                <Form.Label>Company Name</Form.Label>
                <Col sm={10}>
                  <Form.Control
                    onChange={newCompanyChangeHandler}
                    type="text"
                  />
                </Col>
              </Form.Group>
              <Button onClick={addButtonClicked} variant="outline-primary">
                Add
              </Button>
              <br />
              <br />
              <Button onClick={deleteButtonClicked} variant="outline-danger">
                Delete
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default NewCompanyEntryForm;
