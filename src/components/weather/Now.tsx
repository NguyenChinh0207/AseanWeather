import React from "react";

import "./Now.scss";

const Now = ({ propsData }: any) => {
  return (
    <div className="container">
      <div className="weather-container">
        <div className="cur-con-weather-card">
          <div className="d-flex main-now-wrap">
            <div className="forecast-container ">
              <div className="date-title-wrap">
                <h2 className="cur-con-weather-card__title">Current weather</h2>
                <p className="cur-con-weather-card__subtitle">
                  {propsData.location.localtime}
                </p>
              </div>
              <div className="d-flex">
                <img
                  className="weather-icon"
                  src={propsData.current.condition.icon}
                />
                <div className="temp-container">
                  <div className="temp">{propsData.current.temp_c}°</div>
                  <div className="real-feel">
                    <span>RealFeel® </span>
                    {propsData.current.temp_c}°
                  </div>
                </div>
              </div>
              <div>
              <span>{propsData.current.condition.text}</span>
              </div>
            </div>
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Wind</th>
                    <td scope="col">{propsData.current.wind_kph} km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">Wind gust</th>
                    <td scope="col">{propsData.current.gust_kph} km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">Wind degree</th>
                    <td scope="col">{propsData.current.wind_dir} km/h</td>
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
                    <td scope="col">{propsData.current.cloud} %</td>
                  </tr>
                  <tr>
                    <th scope="col">Visibility</th>
                    <td scope="col">{propsData.current.vis_km} km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">Humidity</th>
                    <td scope="col">{propsData.current.humidity} %</td>
                  </tr>
                  <tr>
                    <th scope="col">Precipitation</th>
                    <td scope="col">{propsData.current.precip_mm} mm</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Sunrise / Sun set */}
      <div className="weather-container">
        <div className="cur-con-weather-card">
          <h2 className="cur-con-weather-card__title">Sunrise / Sun set</h2>
          <div className="d-flex astro-wrap">
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} colSpan={2} scope="col">
                      <img
                        className="weather-icon"
                        src="/assets/icons/sunrise.png"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Rise</th>
                    <td scope="row">{propsData.current.gust_kph}km/h</td>
                  </tr>
                  <tr>
                    <th scope="row">Set</th>
                    <td scope="row">{propsData.current.humidity}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} colSpan={2}>
                      <img
                        className="weather-icon"
                        src="/assets/icons/sunset.png"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Rise</th>
                    <td scope="row">{propsData.current.gust_kph}km/h</td>
                  </tr>
                  <tr>
                    <th scope="row">Set</th>
                    <td scope="row">{propsData.current.humidity}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Air Quality */}
      <div className="weather-container">
        <div className="cur-con-weather-card">
          <h2 className="cur-con-weather-card__title">Air Quality</h2>
          <h5 className="air-quality-title">
            Air Quality: <span style={{ color: "#1616ff" }}>Moderate</span>
          </h5>

          <div className="d-flex air-quality">
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">CO</th>
                    <td scope="col">{propsData.current.gust_kph}km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">O3</th>
                    <td scope="col">{propsData.current.humidity}%</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">SO2</th>
                    <td scope="col">{propsData.current.vis_km}km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">NO3</th>
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
