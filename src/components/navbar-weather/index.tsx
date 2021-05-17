import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { addWeatherFavoriteRequest } from "../../redux/effects/weatherEffects";

import "./navbar.scss";

const NavbarWeather = ({ propsData, city, favorite, userID }: any) => {
  const [click, setClick] = useState(true);
  const [data, setData] = useState(
    {
      userId: "",
      cityId: ""
    }
  )
  const dispatch = useDispatch();

  const setFv = () =>{
    city.listCity.map((list: any) => {
      favorite.map((item: any) => {
        if (list.id == item.cityId) {
          if (propsData.location.name.toUpperCase() == list.lable.toUpperCase()) {
            setClick(false);
          }
          // else{
          //   setClick(true);
          // }
        }
      })
    })
  }

  const setDt = () => {
    city.listCity.map((list: any) => {
      if (propsData.location.name.toUpperCase() === list.lable.toUpperCase()) {
        setData({
      // userId: userID,
          userId: "1403943429941869",
          cityId: list.id
        });
      }
    })
  }
// cái gọi setstate trong useEffect này anh sửa lại đi, nó log lỗi maximum nhiều lắm
  useEffect(() => {
    setFv();
    setDt();
  }, [setFv,setDt])

  const handleClick = async () => {
    // if (true) {
 if(localStorage.getItem("userName")){
      if (click) {
        dispatch(addWeatherFavoriteRequest(data))
        setClick(false)
      } else {
        setClick(true)
      }
    } else {
      alert("Bạn phải login trước !")
    }
  }

  //config city để share email đúng
  let i: number = 0;
  const configCityShare = (name: string) => {
    for (i = 0; i < name.length - 1; i++) {
      name = name.replace(" ", "%20");
    }
    return name;
  }

  return (
    <div className="container navbar-weather-wrap" >
      <div id="btn-wrap">
        <NavLink
          to={`/now/${propsData.location.name}`}
          activeClassName="active"
        >
          <button type="button" id="btn" className="btn-navbar ">
            NOW
          </button>
        </NavLink>
        <NavLink
          to={`/hourly/${propsData.location.name}`}
          activeClassName="active"
        >
          <button type="button" id="btn" className="btn-navbar">
            HOURLY
          </button>
        </NavLink>
        <NavLink
          to={`/daily/${propsData.location.name}`}
          activeClassName="active"
        >
          <button type="button" id="btn" className="btn-navbar">
            DAILY
          </button>
        </NavLink>
        {/* <NavLink to={`/favourites/${propsData.location.name}`} activeClassName="active">
          <button type="button" id="btn" className="btn-navbar">
            <i className="fas fa-heart heart-btn"></i>
            FAVOURITE
          </button>
        </NavLink> */}
      </div>

      <div className="location-wrap d-flex">
        <div className="location-title-wrap">
          <span className="location-title">
            {propsData.location.name}, {propsData.location.country}
          </span>
        </div>
        <div className="favourite-wrap">
          <button onClick={handleClick}>
            <i
              className="fas fa-heart heart"
              style={{ color: click ? "#a4b0be" : "red" }}
              title="Thêm vào yêu thích"
            ></i>
          </button>
          <EmailShareButton
            url={`https://aseanweather.herokuapp.com/now/${configCityShare(propsData.location.name)}`}
            subject="ASEAN WEATHER- Chia sẻ thời tiết, gắn kết yêu thương !"
            body={
              `Xin Chào, Mời bạn xem thời tiết hôm nay của ${propsData.location.name}` + " trong đường link sau: "
            }
            className="shareEmail p-2 "
            title="Chia sẻ qua email"
          >
            <i className="fas fa-envelope gmail"></i>
          </EmailShareButton>
          <FacebookShareButton
            url={`https://aseanweather.herokuapp.com/now/${propsData.location.name}`}
            quote={" AseanWeather"}
            className="share"
            title="Chia sẻ lên Facebook"
          >
            <FacebookIcon size={30} round={true} />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default NavbarWeather;
