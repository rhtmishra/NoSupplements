import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import { HeartTwoTone, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import * as ReactBootstrap from "react-bootstrap";

const Person = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name, email, contact, website } = props;

  return (
    <div className="person">
      <div className="img">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
          alt=""
        />
      </div>
      <div className="details">
        <h1>{name}</h1>
        <div className="abc">
          <MailOutlineIcon />
          <p>{email}</p>
        </div>
        <div className="abc">
          <PhoneIcon />
          <p>{contact}</p>
        </div>
        <div className="abc">
          <LanguageIcon />
          <p>{website}</p>
        </div>
      </div>
      <div className="edit">
        <ul>
          <li>
            <ReactBootstrap.Button
              size="lg"
              variant="outline-primary"
              className="btn"
            >
              <HeartTwoTone twoToneColor="#eb2f96" />
            </ReactBootstrap.Button>
          </li>
          <li>
            <ReactBootstrap.Button
              size="lg"
              variant="outline-info"
              onClick={handleShow}
            >
              <EditOutlined />
            </ReactBootstrap.Button>

            <ReactBootstrap.Modal show={show} onHide={handleClose}>
              <ReactBootstrap.Modal.Header closeButton>
                <ReactBootstrap.Modal.Title>
                  Edit Details
                </ReactBootstrap.Modal.Title>
              </ReactBootstrap.Modal.Header>
              <ReactBootstrap.Modal.Body>
                <ReactBootstrap.Form>
                  <ReactBootstrap.Form.Group
                    as={ReactBootstrap.Row}
                    className="mb-3"
                    controlId="formPlaintext"
                  >
                    <ReactBootstrap.Form.Label column sm="2">
                      Name
                    </ReactBootstrap.Form.Label>
                    <ReactBootstrap.Col sm="10">
                      <ReactBootstrap.Form.Control
                        plaintext
                        placeholder="Rohit"
                      />
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Form.Group>
                  <ReactBootstrap.Form.Group
                    as={ReactBootstrap.Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <ReactBootstrap.Form.Label column sm="2">
                      Email
                    </ReactBootstrap.Form.Label>
                    <ReactBootstrap.Col sm="10">
                      <ReactBootstrap.Form.Control
                        plaintext
                        placeholder="email@example.com"
                      />
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Form.Group>

                  <ReactBootstrap.Form.Group
                    as={ReactBootstrap.Row}
                    className="mb-3"
                    controlId="formPlaintextPhone"
                  >
                    <ReactBootstrap.Form.Label column sm="2">
                      Phone
                    </ReactBootstrap.Form.Label>
                    <ReactBootstrap.Col sm="10">
                      <ReactBootstrap.Form.Control
                        type="Phone"
                        placeholder="010-692-6593 x09125"
                      />
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Form.Group>
                  <ReactBootstrap.Form.Group
                    as={ReactBootstrap.Row}
                    className="mb-3"
                    controlId="formPlaintext"
                  >
                    <ReactBootstrap.Form.Label column sm="2">
                      Website
                    </ReactBootstrap.Form.Label>
                    <ReactBootstrap.Col sm="10">
                      <ReactBootstrap.Form.Control
                        plaintext
                        placeholder="india.net"
                      />
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Form.Group>
                </ReactBootstrap.Form>
              </ReactBootstrap.Modal.Body>
              <ReactBootstrap.Modal.Footer>
                <ReactBootstrap.Button
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </ReactBootstrap.Button>
                <ReactBootstrap.Button variant="light" onClick={handleClose}>
                  Save Changes
                </ReactBootstrap.Button>
              </ReactBootstrap.Modal.Footer>
            </ReactBootstrap.Modal>
          </li>
          <li>
            <ReactBootstrap.Button
              size="lg"
              variant="outline-danger"
              className="btn"
              onClick={() => {
                props.onSelect(props.id);
              }}
            >
              <DeleteOutlined />
            </ReactBootstrap.Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Person;
