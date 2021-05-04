import React from "react";

import "./Now.scss";

const Now = ({propsData}:any) => {
  return (
    <div>
      <span>
        <br />
        <p className="txtretroshadow">
          {propsData.location.name}, {propsData.location.country}
        </p>
      </span>
      <div className="Box-cha">
        <div className="cur-con-weather-card">
          <h2 className="cur-con-weather-card__title">Current weather</h2>
          <p className="cur-con-weather-card__subtitle">
            {propsData.location.localtime}
          </p>
          <div className="box-con">
            <div className="forecast-container">
              <img
                className="weather-icon"
                src={propsData.current.condition.icon}
                width="88"
                height="88"
              />
              <div className="temp-container">
                <div className="temp">
                  {propsData.current.temp_c}°
                  <span className="after-temp">C</span>
                </div>
                <div className="real-feel">
                  RealFeel®
                  {propsData.current.temp_f}°
                </div>
              </div>
            </div>
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Wind</th>
                    <th scope="col">{propsData.current.wind_kph}km/h</th>
                  </tr>
                  <tr>
                    <th scope="col">Wind gust</th>
                    <td scope="col">{propsData.current.gust_kph}km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">Humidity</th>
                    <td scope="col">{propsData.current.humidity}%</td>
                  </tr>
                  <tr>
                    <th scope="col">UV</th>
                    <td scope="col">{propsData.current.uv}</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Cloud Cover</th>
                    <th scope="col">{propsData.current.cloud}%</th>
                  </tr>
                  <tr>
                    <th scope="col">Visibility</th>
                    <td scope="col">{propsData.current.vis_km}km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">Precipitation</th>
                    <td scope="col">{propsData.current.precip_mm}mm</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
