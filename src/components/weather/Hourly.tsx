import React, { useContext, useEffect, useState } from "react";
import "./hourly.scss";
import {
  Accordion,
  Card,
  useAccordionToggle,
  AccordionContext,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getWeatherHourlyRequest } from "../../redux/effects/weatherEffects";
const ContextAwareToggle = ({ children, eventKey, callback }: any) => {
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
  const propsData = useSelector((state: any) => state.weatherReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherHourlyRequest());
  }, []);
  console.log("getWeatherHourlyRequest", propsData);
  if (!propsData.loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <Accordion defaultActiveKey="0">
      {propsData.weatherHourly.map((item: any) => {
        return (
          <div className="Box-cha" key={item.time_epoch}>
            <div className="hourly-card-nfl-header ">
              <h2 className="date">
                <span>{item.time.substring(0, 10)}</span>
                <span className="sub">{item.time.substring(11, 16)}</span>
              </h2>
              <img
                alt=""
                className="weather-icon icon-two"
                width="128px"
                height="128px"
                data-eager=""
                src={item.condition.icon}
              />
              <div className="temp metric">{item.temp_c}°</div>
              <span className="real-feel">
                RealFeel®
                {item.temp_f}°
              </span>
              <div className="precip">
                <img
                  alt="rain drop"
                  className="precip-icon"
                  src="https://banner2.cleanpng.com/20180327/uze/kisspng-drop-computer-icons-water-clip-art-water-drop-5aba3136cedcf6.6157995315221517348473.jpg"
                />
                {item.pressure_in}%
              </div>
              <ContextAwareToggle eventKey={item.time_epoch} />
            </div>
            <Accordion.Collapse eventKey={item.time_epoch}>
              <Card.Body>
                <div className="box-con">
                  <div className="forecast-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Wind</th>
                          <th scope="col">{item.wind_kph}km/h</th>
                        </tr>
                        <tr>
                          <th scope="col">Wind gust</th>
                          <td scope="col">{item.gust_kph}km/h</td>
                        </tr>
                        <tr>
                          <th scope="col">Humidity</th>
                          <td scope="col">{item.humidity}%</td>
                        </tr>
                        <tr>
                          <th scope="col">UV</th>
                          <td scope="col">{item.uv}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="forecast-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Cloud Cover</th>
                          <th scope="col">{item.cloud}%</th>
                        </tr>
                        <tr>
                          <th scope="col">Visibility</th>
                          <td scope="col">{item.vis_km}km/h</td>
                        </tr>
                        <tr>
                          <th scope="col">Precipitation</th>
                          <td scope="col">{item.precip_mm}mm</td>
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
