import { useState } from "react";
//import ReCAPTCHA from "react-google-recaptcha";
import Header from '../Header';
import Footer from '../Footer'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./index.css";

//const googleCaptcha = process.env.REACT_APP_CAPTCHA;

function AddEmployeeForm() {
  const [validated, setValidated] = useState(false);
  const [data, updatedData] = useState({
    name: "",
    phone: "",
    totalExp: "",
    careerGap: "",
    currentLocation: "",
    preferredLocation: "",
    reasonForJobChange: "",
    positionApplying: "",
    email: "",
    relevantExp: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    resume: null,
  });

  const change = (event) => {
    updatedData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    console.log("submitted Data");
    console.log(data);

    //API CALL SHOULD BE MADE

    const apiurl = "http://localhost:3009/addemployee";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(apiurl, options);
      console.log(response);
      if (response.ok === true) {
        const responseData = await response.json();
        console.log("api worked", responseData);
      }
    } catch (error) {
      console.error(error);
    }

    setValidated(true);
  };

  return (
    <>
    <Header/>
    <div className="totalContainer">
      <div className="formContainer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="heading">Join our Talented Team </h2>
            </div>
          </div>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <label htmlFor="validationCustom01" className="bootstraplabel">
                Name
              </label>
              <Form.Control
                required
                onChange={change}
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <label htmlFor="validationCustom02" className="bootstraplabel">
                Phone
              </label>
              <Form.Control
                required
                type="number"
                name="number"
                onChange={change}
                placeholder="Enter Your contact number"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <label htmlFor="validationCustom01" className="bootstraplabel">
                totalExp
              </label>
              <Form.Control
                required
                onChange={change}
                type="text"
                name="totalExp"
                placeholder="Total experiance"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <label htmlFor="validationCustom01" className="bootstraplabel">
                relevantExp
              </label>
              <Form.Control
                required
                onChange={change}
                type="text"
                name="relevantExp"
                placeholder="Relevant experiance"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <label htmlFor="validationCustom03" className="bootstraplabel">
                email
              </label>
              <Form.Control
                required
                type="text"
                name="clientname"
                onChange={change}
                placeholder="Enter Your E-Mail"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <label htmlFor="validationCustom03" className="bootstraplabel">
                carrerGap
              </label>
              <Form.Control
                required
                type="text"
                name="carrergap"
                onChange={change}
                placeholder="Enter Your carrer gap "
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="validationCustom09">
              <label className="bootstraplabel" htmlFor="validationCustom09">
                currentCTC
              </label>
              <Form.Control
                type="text"
                name="currentCtc"
                onChange={change}
                placeholder="Enter Your CurrentCtc"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom09">
              <label className="bootstraplabel" htmlFor="validationCustom09">
                expectedCTC
              </label>
              <Form.Control
                type="text"
                name="Expectedstatus"
                onChange={change}
                placeholder="Enter Your Expected status"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <label htmlFor="validationCustom05" className="bootstraplabel">
                currentLocation
              </label>
              <Form.Control
                type="text"
                name="currentLocation"
                onChange={change}
                placeholder="Enter Your Current Location"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Start Date.
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <label htmlFor="validationCustom05" className="bootstraplabel">
                  preferredLocation
                </label>
                <Form.Control
                  type="text"
                  name="preferredLocation"
                  onChange={change}
                  placeholder="Enter Your Preferd Location"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Start Date.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group as={Col} md="3" controlId="validationCustom08">
              <label htmlFor="validationCustom08" className="bootstraplabel">
                reasonForJobChange
              </label>
              <Form.Control
                type="text"
                name="reasonForJobChange"
                onChange={change}
                placeholder="Reason For Job Change"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your Id.
              </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="3" controlId="validationCustom06">
              <label className="bootstraplabel" htmlFor="validationCustom06">
                Status
              </label>
              <Form.Select
                name="status"
                onChange={change}
                aria-label="Default select example"
              >
                <option>Project Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid status.
              </Form.Control.Feedback>
            </Form.Group> */}

            <Form.Group as={Col} md="3" controlId="validationCustom07">
              <label className="bootstraplabel" htmlFor="validationCustom07">
                positionApplying
              </label>
              <Form.Control
                name="positionApplying"
                onChange={change}
                type="text"
                placeholder="positionApplying"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide type.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom08">
              <label htmlFor="validationCustom08" className="bootstraplabel">
                noticePeriod
              </label>
              <Form.Control
                type="text"
                name="noticePeriod"
                onChange={change}
                placeholder="How soon you can join our team"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Link.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom08">
              <label htmlFor="validationCustom08" className="bootstraplabel">
                phoneNumber
              </label>
              <Form.Control
                type="number"
                name="phoneNumber"
                onChange={change}
                placeholder="Enter your contact number"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom08">
              <label htmlFor="validationCustom08" className="bootstraplabel">
                Resume
              </label>
              <Form.Control
                type="file"
                name="resume"
                onChange={change}
                placeholder="Upload your resume"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide Your Resume.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit" className="mt-2 form-button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AddEmployeeForm;
