
import "./Now.scss";

const Now = ({propsData}: any) => {
  console.log("a",propsData)

  return (
    <div className="container">
       {console.log("location now:",propsData)}
      <div className="weather-container">
        <div className="cur-con-weather-card">
          <div className="d-flex main-now-wrap">
            <div className="forecast-container ">
              <div className="date-title-wrap">
                <h2 className="cur-con-weather-card__title">Thời tiết hiện tại</h2>
                <p className="cur-con-weather-card__subtitle">
                  {propsData.location.localtime}
                </p>
              </div>
              <div className="d-flex">
                <img
                  className="weather-icon-main"
                  src={propsData.current.condition.icon}
                />
                <div className="temp-container">
                  <div className="temp">{propsData.current.temp_c}°</div>
                  <div className="real-feel">
                    <span>Cảm thấy như  </span>
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
                    <th scope="col">Tốc độ gió</th>
                    <td scope="col">{propsData.current.wind_kph} km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">Gió mạnh</th>
                    <td scope="col">{propsData.current.gust_kph} km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">Hướng gió</th>
                    <td scope="col">{propsData.current.wind_degree} °</td>
                  </tr>
                  <tr>
                    <th scope="col">Chỉ số UV</th>
                    <td scope="col">{propsData.current.uv}</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Độ che phủ mây</th>
                    <td scope="col">{propsData.current.cloud} %</td>
                  </tr>
                  <tr>
                    <th scope="col">Tầm nhìn xa</th>
                    <td scope="col">{propsData.current.vis_km} km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">Độ ẩm</th>
                    <td scope="col">{propsData.current.humidity} %</td>
                  </tr>
                  <tr>
                    <th scope="col">Lượng mưa</th>
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
          <h2 className="cur-con-weather-card__title">Thời gian mọc / lặn</h2>
          <div className="d-flex astro-wrap">
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} colSpan={2} scope="col">
                      <img
                        className="weather-icon"
                        src="/assets/icons/sun.png"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Mặt trời mọc</th>
                    <td scope="row">{propsData.forecast.forecastday[0].astro.sunrise}</td>
                  </tr>
                  <tr>
                    <th scope="row">Mặt trời lặn</th>
                    <td scope="row">{propsData.forecast.forecastday[0].astro.sunset}</td>
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
                        src="/assets/icons/moon.png"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Mặt trăng lên</th>
                    <td scope="row">{propsData.forecast.forecastday[0].astro.moonrise}</td>
                  </tr>
                  <tr>
                    <th scope="row">Mặt trăng lặn</th>
                    <td scope="row">{propsData.forecast.forecastday[0].astro.moonset}</td>
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
          <h2 className="cur-con-weather-card__title">CHẤT LƯỢNG KHÔNG KHÍ</h2>
          <h5 className="air-quality-title">
            Air Quality: <span style={{ color: "#1616ff" }}>Moderate</span>
          </h5>

          <div className="d-flex air-quality">
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">khí CO</th>
                    <td scope="col">{propsData.current.air_quality.co} μg/m3</td>
                  </tr>
                  <tr>
                    <th scope="col">Ozon</th>
                    <td scope="col">{propsData.current.air_quality.o3} μg/m3</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="forecast-container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Khí SO2</th>
                    <td scope="col">{propsData.current.air_quality.so2} μg/m3</td>
                  </tr>
                  <tr>
                    <th scope="col">Khí NO2</th>
                    <td scope="col">{propsData.current.air_quality.no2} μg/m3</td>
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
