import React, { useContext, useEffect, useState } from "react";
import "./hourly.scss";
import {
  Accordion,
  Card,
  ButtonGroup,
  Button,
  useAccordionToggle,
  AccordionContext,
} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getWeatherHourlyRequest } from "../../redux/effects/weatherEffects";

interface IContextAwareToggle {
  children?: any;
  eventKey: any;
  callback?: any;
}

const ContextAwareToggle: React.FC<IContextAwareToggle> = ({
  children,
  eventKey,
  callback,
}) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  console.log("++++", isCurrentEventKey);

  return (
    <span onClick={decoratedOnClick}>
      {isCurrentEventKey ? (
        <i className="fas fa-chevron-up"></i>
      ) : (
        <i className="fas fa-chevron-down"></i>
      )}
    </span>
  );
};

const Hourly = () => {
  const propsData = useSelector(
    (state: RootStateOrAny) => state.weatherReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherHourlyRequest(propsData.weather.location.name));
  }, []);
  console.log("getWeatherHourlyRequest", propsData);
  if (!propsData.loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <Accordion defaultActiveKey="0">
      {propsData.weatherHourly.map((item: any) => {
        return (
          <div className="container Box-cha" key={item.time_epoch}>
            <div className="hourly-card-nfl-header ">
              <h2 className="date">
                <span>{item.time.substring(0, 10)}</span>
                <span className="sub">{item.time.substring(11, 16)}</span>
              </h2>
              <div className="d-flex align-items-center">
                <img
                  alt=""
                  className="weather-icon icon-two"
                  width="128px"
                  height="128px"
                  data-eager=""
                  src={item.condition.icon}
                />
                <div className="temp metric">{item.temp_c}°</div>
              </div>
              <span className="real-feel">
                Cảm thấy như{" "}
                {item.feelslike_c}°C
              </span>
              <div className="precip">
                <img
                  alt="rain drop"
                  className="precip-icon"
                  src="/assets/icons/water.png"
                />
                {item.precip_mm}mm
              </div>
              <ContextAwareToggle
                eventKey={item.time_epoch}
              ></ContextAwareToggle>
            </div>
            <Accordion.Collapse eventKey={item.time_epoch}>
              <Card.Body>
                <div className="box-con">
                  <div className="forecast-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Tốc độ gió</th>
                          <td scope="col">{item.wind_kph} km/h</td>
                        </tr>
                        <tr>
                          <th scope="col">Gió mạnh</th>
                          <td scope="col">{item.gust_kph} km/h</td>
                        </tr>
                        <tr>
                          <th scope="col">Hướng gió</th>
                          <td scope="col">{item.wind_degree} °</td>
                        </tr>
                        <tr>
                          <th scope="col">Chỉ số UV</th>
                          <td scope="col">{item.uv}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="forecast-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Độ che phủ mây</th>
                          <td scope="col">{item.cloud} %</td>
                        </tr>
                        <tr>
                          <th scope="col">Tầm nhìn xa</th>
                          <td scope="col">{item.vis_km} km/h</td>
                        </tr>
                        <tr>
                          <th scope="col">Độ ẩm</th>
                          <td scope="col">{item.humidity} %</td>
                        </tr>
                        <tr>
                          <th scope="col">Lượng mưa</th>
                          <td scope="col">{item.precip_mm} mm</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        );
      })}
    </Accordion>
  );
};

export default Hourly;
