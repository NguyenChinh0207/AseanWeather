import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { getWeatherNow } from '../../redux/actions/weatherActions';
import { addWeatherFavoriteRequest, removeWeatherFavoriteRequest } from "../../redux/effects/weatherEffects";
import "./navbar.scss";

const NavbarWeather = ({ propsData, city, favorite, userID }: any) => {
 
  let history=useHistory();
  const [click, setClick] = useState(true);
  const [test, setTest]=useState(false);
  const [data, setData] = useState(
    {
      userId: "",
      cityId: ""
    }
  )

  const dispatch = useDispatch();

  // Hàm kiểm tra xem địa phương này có nằm trong phần yêu thích hay k 
  const setFv = () => {
    city.listCity.map((list: any) => {
      favorite.map((item: any) => {
        if (list.lable === item.cityLable) {
          if (propsData.location.name.toUpperCase() === list.lable.toUpperCase()) {
            setClick(false);
          }
        }
      })
    })
  }

  // Lấy dữ liệu của địa phương như Id người dùng và id city
  const setDt = () => {
 
    city.listCity.map((list: any) => {
      if (propsData.location.name.toUpperCase() === list.lable.toUpperCase()) {
        console.log("propsData.location.name",propsData.location.name);
        console.log("city label",list.lable); 
        setData({
          // userId:'1403943429941869',
          userId: userID,
          cityId: list.id,
        });
         setTest(true);
        console.log("test succ",test);
      }
      
    })
  }

  const setDefault = () =>{
    dispatch(getWeatherNow());
  } 

  useEffect(() => { 
      setFv();
      setDt();
      setClick(true);   
      console.log("test useeff",test);
      return () => {
        setDefault();
      }
      
  }, [propsData.location.name])
  console.log("test outside",test);
  // Người dùng phải đăng nhập mới được dùng chức năng này, nếu đăng nhập rồi thì có thể thêm hoặc xóa địa phương yêu thích
  const handleClick =  () => {
    if (localStorage.getItem("userName")) {  
      if (click) {
        console.log("test click",test);
        if(test==false){
          const cf = window.confirm('Địa phương này không nằm trong danh sách quản lý\n Vui lòng chọn địa phương trong khung tìm kiếm!');
          if(cf){
            history.push("/");
          }
            }
        
        else if(test==true){
          const confim = window.confirm('Bạn có muốn thêm vào yêu thích không ?');
          if(confim){
            dispatch(addWeatherFavoriteRequest(data))
            setClick(false);
          }
        }
        
      } else {
        const cf = window.confirm('Bạn muốn xóa yêu thích địa phương này?');
        if(cf){
          dispatch(removeWeatherFavoriteRequest(localStorage.getItem("userID"), data.cityId))
          setClick(true)
        }
      }
    } else {
      const cf = window.confirm('Bạn muốn thêm địa phương này vào danh sách yêu thích? \nBạn phải login trước !');
        if(cf){
           history.push("/");
        }
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

      {/* thanh navbar weather */}
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
      </div>

      <div className="location-wrap d-flex">

        {/* tên địa phương với quốc gia của địa phương đấy */}
        <div className="location-title-wrap">
          <span className="location-title">
            {propsData.location.name}, {propsData.location.country}
          </span>
        </div>

        <div className="favourite-wrap">

          {/* Hiển thị xem đó có phải là địa phương yêu thích k */}
          <button onClick={handleClick}>
            <i
              className="fas fa-heart heart"
              style={{ color: click ? "#a4b0be" : "red" }}
              title="Thêm vào yêu thích"
            ></i>
          </button>

          {/* Nút share cho Email */}
          <EmailShareButton
            url={`https://aseanweather.herokuapp.com/now/${configCityShare(propsData.location.name)}`}
            subject="ASEAN WEATHER- Chia sẻ thời tiết, gắn kết yêu thương !"
            body={
              `Xin Chào, Hãy cùng xem thời tiết hôm nay tại ${propsData.location.name}` + " cùng AseanWeather: "
            }
            className="shareEmail p-2 "
            title="Chia sẻ qua email"
          >
            <i className="fas fa-envelope gmail"></i>
          </EmailShareButton>

          {/* Nút share cho facebook */}
          <FacebookShareButton
            url={`https://aseanweather.herokuapp.com/now/${propsData.location.name}`}
            quote={`Xem thời tiết tại ${propsData.location.name} cùng AseanWeather `}
            className="share"
            title="Chia sẻ lên Facebook"
          >
            <FacebookIcon className="facebook" size={30} round={true} />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default NavbarWeather;
