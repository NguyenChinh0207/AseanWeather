import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CommonModal from "../modal/CommonModal";
import "./daily.scss";
import { getWeatherDailyRequest } from "../../redux/effects/weatherEffects";

const initialDaily = {
  day: {
    condition: {
      icon: "",
      text:""
    },
    avgtemp_c: 0,
    avgtemp_f: 0,
    maxwind_kph: 0,
    avgvis_km: 0,
    avghumidity: 0,
    uv: 0,
  },
  date: "",
  astro: {
    sunrise: "",
    sunset: "",
    moonrise: "",
    moonset: "",
  },
};

interface IDaily {
  match: any;
}

const Daily: React.FC<IDaily> = ({ match }) => {
  const { city } = match.params;

  const [isShow, setIsShow] = useState(false);
  const item = useSelector((state: RootStateOrAny) => state.weatherReducer);
  const [daily, setDaily] = useState(initialDaily);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherDailyRequest(item.weather.location.name));
  }, []);

  const viewDetail = (day: any) => {
    setDaily(day);
    setIsShow(true);
  };

  if (!item.loaded) {
    return <div className="loading">Loading...</div>;
  }
  const dateForrmat = (dateItem: any) => {
    let d = new Date(dateItem);
    return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
  };
  return (
    <>
      <p className="module-title container">
        THỜI TIẾT BA NGÀY: {dateForrmat(item.weatherDaily[0].date)}{" "}
        <span style={{ color: "red" }}>to</span>{" "}
        {dateForrmat(item.weatherDaily[2].date)}
      </p>
      <div className="daily-wrap container">
        {item.weatherDaily.map((item: any) => {
          return (
            <div className="box-daily" key={item.date}>
              <div className="daily-card-nfl-header ">
                <h2 className="date">
                  <span className="sub">{dateForrmat(item.date)}</span>
                </h2>
                <div className="condition-daily-wrap">
                  <img
                    alt=""
                    className="weather-icon icon"
                    data-eager=""
                    src={item.day.condition.icon}
                  />
                  <div className="temp-daily temp">
                    <span className="high">{item.day.mintemp_c}°</span>
                    <span className="high">
                      <i className="fas fa-long-arrow-alt-right"></i>{" "}
                      {item.day.maxtemp_c}°
                    </span>
                  </div>
                </div>

                <div className="precip">
                  <img
                    alt="rain drop"
                    className="precip-icon"
                    src="/assets/icons/rainss.png"
                  />
                  {item.day.daily_chance_of_rain}%
                </div>

                <button
                  className="view-daily-detail-btn"
                  onClick={() => viewDetail(item)}
                >
                  Xem thêm
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <CommonModal
        className="modalDaily"
        title={`Date: ${dateForrmat(daily.date)}`}
        size="lg"
        show={isShow}
        setIsShow={() => setIsShow(false)}
      >
        <div className="Box-cha ">
        <h2 className="cur-con-weather-card__title pt-2">Dự báo</h2>
          <div className="box-con ">
            <div className="forecast-container d-flex align-items-center justify-content-center">
              <img
                className="weather-icon"
                src={daily.day.condition.icon}
                width="110"
                height="80%"
              />
              <div className="temp-container">
                <div className="temp" style={{ fontSize: "40px" }}>
                  <p>{daily.day.avgtemp_c}°C</p>
                </div>
                <span className="condition-text">{daily.day.condition.text}</span>
                <div className="real-feel mt-2">
                  Cảm thấy như {daily.day.avgtemp_f}°F
                </div>
              </div>
            </div>
            <div className="forecast-container ">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <img src="/assets/icons/windgust.png" alt="" />
                      {"  "}
                      Tốc độ gió
                    </th>
                    <td scope="col">{daily.day.maxwind_kph}km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">
                      <img src="/assets/icons/eye.png" alt="" />
                      {"  "}
                      Tầm nhìn xa
                    </th>
                    <td scope="col">{daily.day.avgvis_km}km/h</td>
                  </tr>
                  <tr>
                    <th scope="col">
                      <img src="/assets/icons/doam.png" alt="" />
                      {"  "}
                      Độ ẩm
                    </th>
                    <td scope="col">{daily.day.avghumidity}%</td>
                  </tr>
                  <tr>
                    <th scope="col">
                      <img src="/assets/icons/UV.png" alt="" />
                      {"  "}
                      Chỉ số UV
                    </th>
                    <td scope="col">{daily.day.uv}/10</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        {/* Sunrise / Sun set */}
        <div className="Box-cha">
          <h2 className="cur-con-weather-card__title pt-2">Thời gian mọc / lặn</h2>
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
                    <th scope="row">
                      <img src="/assets/icons/sunrise.png" alt="" />
                      {"  "}
                      Mặt trời mọc
                    </th>
                    <td scope="row">{daily.astro.sunrise}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img src="/assets/icons/sunset.png" alt="" />
                      {"  "}
                      Mặt trời lặn
                    </th>
                    <td scope="row">{daily.astro.sunset}</td>
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
                    <th scope="row">
                      <img src="/assets/icons/moonrise.png" alt="" />
                      {"  "}
                      Mặt trăng lên
                    </th>
                    <td scope="row">{daily.astro.moonrise}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img src="/assets/icons/moonset.png" alt="" />
                      {"  "}
                      Mặt trăng lặn
                    </th>
                    <td scope="row">{daily.astro.moonset}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CommonModal>
    </>
  );
};

export default Daily;
