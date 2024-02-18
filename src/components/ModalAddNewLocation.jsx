import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

function ModalAddNewLocation({ show, handleClose, handleAdd }) {
  const [locationName, setLocationName] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [countryName, setCountryName] = useState(""); // For search purposes

  const [searchResults, setSearchResults] = useState();
  const [selectedLocationId, setSelectedLocationId] = useState();

  function handleSubmitByCoordinates(event) {
    event.preventDefault();
    if (locationName == "" || longitude == "" || latitude == "") {
      return;
    }

    handleAdd(locationName, latitude, longitude);
    postSubmitEffects();
  }

  function handleSearch(event) {
    event.preventDefault();

    if (locationName == "") return;

    const apiUrlToSearchLocation = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=20&language=en&format=json`;

    axios
      .get(apiUrlToSearchLocation)
      .then((res) => {
        if (countryName != "")
          setSearchResults(
            res.data.results.filter(
              (result) =>
                result.country.toUpperCase() == countryName.toUpperCase()
            )
          );
        else setSearchResults(res.data.results);
      })
      .catch((err) => {
        console.log("ERROR: " + err);
      });
  }

  function handleAddBySearchOption() {
    if (selectedLocationId == null) return;

    searchResults.forEach((result) => {
      if (result.id == selectedLocationId) {
        handleAdd(result.name, result.latitude, result.longitude);
        postSubmitEffects();
        return;
      }
    });
  }

  function resetModal() {
    setLocationName("");
    setSearchResults();
    setSelectedLocationId();
    setCountryName("");
    setLongitude();
    setLatitude();
  }

  // Executes after adding new location
  function postSubmitEffects() {
    handleClose();
    resetModal();
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add new location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs>
          <Tab eventKey="By location Name" title="By location name">
            <Form className="mt-3" onSubmit={handleSearch}>
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
            {searchResults != undefined && (
              <>
                <p className="mt-3">Search for your location below</p>
                <Table
                  striped
                  bordered
                  hover
                  className="search_table"
                  responsive
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Admin 1</th>
                      <th>Admin 2</th>
                      <th>Admin 3</th>
                      <th>Population</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((result) => {
                      return (
                        <tr
                          className={
                            result.id == selectedLocationId ? "selected" : ""
                          }
                          key={result.id}
                          onClick={() => {
                            setSelectedLocationId(result.id);
                          }}
                        >
                          <td>
                            <img
                              src={`https://flagsapi.com/${result.country_code}/flat/32.png`}
                            />
                            <abbr
                              title={`Latitude: ${result.latitude} Longitude: ${result.longitude}`}
                            >
                              {result.name}
                            </abbr>
                          </td>
                          <td>
                            {result.admin1 == undefined ? (
                              <span className="text-muted">No data</span>
                            ) : (
                              result.admin1
                            )}
                          </td>
                          <td>
                            {result.admin2 == undefined ? (
                              <span className="text-muted">No data</span>
                            ) : (
                              result.admin2
                            )}
                          </td>
                          <td>
                            {result.admin3 == undefined ? (
                              <span className="text-muted">No data</span>
                            ) : (
                              result.admin3
                            )}
                          </td>
                          <td>
                            {result.population == undefined ? (
                              <span className="text-muted">No data</span>
                            ) : (
                              result.population
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <Button
                  disabled={selectedLocationId == null ? true : false}
                  className="w-100 mt-3"
                  onClick={handleAddBySearchOption}
                >
                  Add
                </Button>
              </>
            )}
          </Tab>
          <Tab eventKey="By Coordinates" title="By coordinates">
            <Form className="mt-3" onSubmit={handleSubmitByCoordinates}>
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
