import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDriverBio } from "../redux/userSlice";
import axios from "axios";

const DriverBio = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch()
  const userEmail = useSelector((store) => store.user.carValue);

  const [insurerDetails, setInsurerDetails] = useState({
    fname: "",
    lname: "",
    insurerEmail: "",
    homeAddress: "",
    contact: "",
    email: userEmail[0].email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsurerDetails((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));
  };

  const handleclick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/car/driverBio",insurerDetails);
      const data = response.data;
      console.log(data.data)

      if (data.success) {
        dispatch(getDriverBio(data.data));
        navigate("/insurancetypes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="w-50 m-auto">
        <Container>
          <div
            className="btn-group w-100"
            role="group"
            aria-label="Button group with 4 buttons"
          >
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#007bff", padding: "1.5rem" }}
            >
              Vehicle
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}
            >
              Insurer
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}
            >
              Cover
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}
            >
              Payment
            </button>
          </div>
          <Row className="row1">
            <h3
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              Bio Data
            </h3>
          </Row>
          <Row className="row5 ms-1" style={{ width: "99%" }}>
            <h2 className="text-white">Insurer Details</h2>
          </Row>
          <Form className="ps-3" style={{ width: "98%" }}>
            <Form.Group
              as={Row}
              controlId="formFirstName"
              style={{ backgroundColor: "#C2D2D8" }}
            >
              <Form.Label column sm={3} className="mt-2">
                First Name:
              </Form.Label>
              <Col sm={9} className="d-flex justify-content-end">
                <Form.Control
                  name="fname"
                  value={insurerDetails.fname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter first name"
                  style={{
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    marginTop: "1rem",
                  }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="formLastName"
              style={{ backgroundColor: "#C2D2D8" }}
            >
              <Form.Label column sm={3}>
                Last Name:
              </Form.Label>
              <Col sm={9} className="d-flex justify-content-end">
                <Form.Control
                  name="lname"
                  value={insurerDetails.lname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter last name"
                  style={{ marginBottom: "1rem", marginLeft: "1rem" }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="formEmail"
              style={{ backgroundColor: "#C2D2D8" }}
            >
              <Form.Label column sm={3}>
                Email Address:
              </Form.Label>
              <Col sm={9} className="d-flex justify-content-end">
                <Form.Control
                  name="insurerEmail"
                  value={insurerDetails.insurerEmail}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email"
                  style={{ marginBottom: "1rem", marginLeft: "1rem" }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="formHomeAddress"
              style={{ backgroundColor: "#C2D2D8" }}
            >
              <Form.Label column sm={3}>
                Home Address:
              </Form.Label>
              <Col sm={9} className="d-flex justify-content-end">
                <Form.Control
                  name="homeAddress"
                  value={insurerDetails.homeAddress}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter home address"
                  style={{ marginBottom: "1rem", marginLeft: "1rem" }}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="formContact"
              style={{ backgroundColor: "#C2D2D8" }}
            >
              <Form.Label column sm={3}>
                Contact:
              </Form.Label>
              <Col sm={9} className="d-flex justify-content-end">
                <Form.Control
                  name="contact"
                  value={insurerDetails.contact}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter contact number"
                  style={{ marginBottom: "1rem", marginLeft: "1rem" }}
                />
              </Col>
            </Form.Group>
          </Form>
        </Container>
        <div className="d-flex justify-content-end mt-4">
          <Button
            onClick={handleclick}
            className="py-3 px-4 me-3"
            variant="primary"
            type="submit"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DriverBio;
