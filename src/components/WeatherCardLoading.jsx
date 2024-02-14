import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import ListGroup from "react-bootstrap/ListGroup";

function WeatherCardLoading() {
  const ANIMATION_TYPE = "wave";

  return (
    <Card className="weather_card weather_card_loading">
      <Card.Body>
        <div>
          <Placeholder as="h5" animation={ANIMATION_TYPE}>
            <Placeholder style={{ width: "200px" }} />
          </Placeholder>
          <Placeholder as="h2" animation={ANIMATION_TYPE}>
            <Placeholder style={{ width: "60px" }} />
          </Placeholder>
          <Placeholder as="h4" animation={ANIMATION_TYPE}>
            <Placeholder style={{ width: "180px" }} />
          </Placeholder>
        </div>
        <div>
          <div>
            <Placeholder animation={ANIMATION_TYPE}>
              <Placeholder style={{ width: "240px" }} />
            </Placeholder>
          </div>
          <Placeholder
            as={Card}
            style={{ marginTop: "10px", width: "100%" }}
            animation={ANIMATION_TYPE}
          >
            <Placeholder
              as="div"
              style={{
                width: "100%",
                height: "102px",
                borderRadius: "inherit",
              }}
            />
          </Placeholder>
        </div>
        <ListGroup className="forecast_multiple_days">
          <ListGroup.Item variant="light">
            <Placeholder animation={ANIMATION_TYPE}>
              <Placeholder style={{ width: "100px" }} />
            </Placeholder>
          </ListGroup.Item>
          {[1, 2, 3, 4, 5, 6].map((element) => {
            return (
              <ListGroup.Item key={element} className="forecast_single_day">
                <Placeholder
                  as="div"
                  animation={ANIMATION_TYPE}
                  className="text-start"
                >
                  <Placeholder style={{ width: "100px" }} />
                </Placeholder>
                <Placeholder as="div" animation={ANIMATION_TYPE}>
                  <Placeholder style={{ width: "20px" }} />
                </Placeholder>
                <Placeholder
                  as="div"
                  animation={ANIMATION_TYPE}
                  className="text-end"
                >
                  <Placeholder style={{ width: "120px" }} />
                </Placeholder>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default WeatherCardLoading;
