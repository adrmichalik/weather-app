import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ModalAddNewLocation({ show, handleClose, handleAdd }) {
  const [locationName, setLocationName] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [countryName, setCountryName] = useState(""); // For search purposes

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add new location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs>
          <Tab eventKey="By location Name" title="By location name">
            <Form className="mt-3">
              <FloatingLabel
                controlId="locationName"
                label="Location name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Location name"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="country"
                label="Country (optional)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Country (optional)"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                />
              </FloatingLabel>
              <Form.Control
                type="submit"
                value="Search"
                className="btn btn-primary"
              />
            </Form>
          </Tab>
          <Tab eventKey="By Coordinates" title="By coordinates">
            <Form className="mt-3">
              <FloatingLabel
                controlId="locationName"
                label="Location name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Location name"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="latitude"
                label="Latitude"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="longitude"
                label="Longitude"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  required
                />
              </FloatingLabel>
              <Form.Control
                type="submit"
                value="Add"
                className="btn btn-primary"
              />
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddNewLocation;
