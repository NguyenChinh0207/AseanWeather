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
  const [labelFavorite, setLabelFavorite] = useState(null);
  const [test, setTest]=useState(true);
  const [data, setData] = useState(
    {
      userId: "",
      cityId: ""
    }
  )
  const list:any[]=[
    {
        "id": 1,
        "name": "Hà Nội",
        "description": null,
        "lable": "Ha Noi",
        "countryId": 4
    },
    {
        "id": 2,
        "name": "Hải Phòng",
        "description": null,
        "lable": "Hai Phong",
        "countryId": 4
    },
    {
        "id": 3,
        "name": "Hồ Chí Minh",
        "description": null,
        "lable": "Ho Chi Minh City",
        "countryId": 4
    },
    {
        "id": 4,
        "name": "Hội An",
        "description": null,
        "lable": "Hoi An",
        "countryId": 4
    },
    {
        "id": 5,
        "name": "Đà Nẵng",
        "description": null,
        "lable": "Da Nang",
        "countryId": 4
    },
    {
        "id": 6,
        "name": "Bắc Giang",
        "description": null,
        "lable": "Bac Giang",
        "countryId": 4
    },
    {
        "id": 7,
        "name": "Hòa Bình",
        "description": null,
        "lable": "Hoa Binh",
        "countryId": 4
    },
    {
        "id": 8,
        "name": "Sơn La",
        "description": null,
        "lable": "Son La",
        "countryId": 4
    },
    {
        "id": 9,
        "name": "Điện Biên",
        "description": null,
        "lable": "Dien Bien",
        "countryId": 4
    },
    {
        "id": 10,
        "name": "Lai Châu",
        "description": null,
        "lable": "Lai Chau",
        "countryId": 4
    },
    {
        "id": 11,
        "name": "Lào Cai",
        "description": null,
        "lable": "Lao Cai",
        "countryId": 4
    },
    {
        "id": 12,
        "name": "Yên Bái",
        "description": null,
        "lable": "Yen Bai",
        "countryId": 4
    },
    {
        "id": 13,
        "name": "Phú Thọ",
        "description": null,
        "lable": "Phu Tho",
        "countryId": 4
    },
    {
        "id": 14,
        "name": "Hà Giang",
        "description": null,
        "lable": "Ha Giang",
        "countryId": 4
    },
    {
        "id": 15,
        "name": "Tuyên Quang",
        "description": null,
        "lable": "Tuyen Quang",
        "countryId": 4
    },
    {
        "id": 16,
        "name": "Cao Bằng",
        "description": null,
        "lable": "Cao Bang",
        "countryId": 4
    },
    {
        "id": 17,
        "name": "Bắc Kạn",
        "description": null,
        "lable": "Bac Kan",
        "countryId": 4
    },
    {
        "id": 18,
        "name": "Thái Nguyên",
        "description": null,
        "lable": "Thai Nguyen",
        "countryId": 4
    },
    {
        "id": 19,
        "name": "Lạng Sơn",
        "description": null,
        "lable": "Lang Son",
        "countryId": 4
    },
    {
        "id": 20,
        "name": "Quảng Ninh",
        "description": null,
        "lable": "Quang Ninh",
        "countryId": 4
    },
    {
        "id": 21,
        "name": "Bắc Ninh",
        "description": null,
        "lable": "Bac Ninh",
        "countryId": 4
    },
    {
        "id": 22,
        "name": "Hà Nam",
        "description": null,
        "lable": "Ha Nam",
        "countryId": 4
    },
    {
        "id": 23,
        "name": "Hải Dương",
        "description": null,
        "lable": "Hai Duong",
        "countryId": 4
    },
    {
        "id": 24,
        "name": "Hưng Yên",
        "description": null,
        "lable": "Hung Yen",
        "countryId": 4
    },
    {
        "id": 25,
        "name": "Nam Định",
        "description": null,
        "lable": "Nam Dinh",
        "countryId": 4
    },
    {
        "id": 26,
        "name": "Thái Bình",
        "description": null,
        "lable": "Thai Binh",
        "countryId": 4
    },
    {
        "id": 27,
        "name": "Vĩnh Phúc",
        "description": null,
        "lable": "Vinh Phuc",
        "countryId": 4
    },
    {
        "id": 28,
        "name": "Ninh Bình",
        "description": null,
        "lable": "Ninh Binh",
        "countryId": 4
    },
    {
        "id": 29,
        "name": "Thanh Hóa",
        "description": null,
        "lable": "Thanh Hoa",
        "countryId": 4
    },
    {
        "id": 30,
        "name": "Nghệ An",
        "description": null,
        "lable": "Nghe An",
        "countryId": 4
    },
    {
        "id": 31,
        "name": "Hà Tĩnh",
        "description": null,
        "lable": "Ha Tinh",
        "countryId": 4
    },
    {
        "id": 32,
        "name": "Quảng Bình",
        "description": null,
        "lable": "Ap Binh Quang",
        "countryId": 4
    },
    {
        "id": 33,
        "name": "Quảng Trị",
        "description": null,
        "lable": "Quang Tri",
        "countryId": 4
    },
    {
        "id": 34,
        "name": "Quảng Nam",
        "description": null,
        "lable": "Quang Nam",
        "countryId": 4
    },
    {
        "id": 35,
        "name": "Quảng Ngãi",
        "description": null,
        "lable": "Quang Ngai",
        "countryId": 4
    },
    {
        "id": 36,
        "name": "Bình Định",
        "description": null,
        "lable": "Binh Dinh",
        "countryId": 4
    },
    {
        "id": 37,
        "name": "Phú Yên",
        "description": null,
        "lable": "Phu Yen",
        "countryId": 4
    },
    {
        "id": 38,
        "name": "Khánh Hòa",
        "description": null,
        "lable": "Khanh Hoa",
        "countryId": 4
    },
    {
        "id": 39,
        "name": "Ninh Thuận",
        "description": null,
        "lable": "Ninh Thuan",
        "countryId": 4
    },
    {
        "id": 40,
        "name": "Bình Thuận",
        "description": null,
        "lable": "Ap Binh Thuan",
        "countryId": 4
    },
    {
        "id": 41,
        "name": "Kon Tum",
        "description": null,
        "lable": "Kon Tum",
        "countryId": 4
    },
    {
        "id": 42,
        "name": "Gia Lai",
        "description": null,
        "lable": "Gia Lai",
        "countryId": 4
    },
    {
        "id": 44,
        "name": "Đắk Nông",
        "description": null,
        "lable": "Buon Bubo Dak Nong",
        "countryId": 4
    },
    {
        "id": 45,
        "name": "Lâm Đồng",
        "description": null,
        "lable": "Dong Lam",
        "countryId": 4
    },
    {
        "id": 46,
        "name": "Bà Rịa Vũng Tàu",
        "description": null,
        "lable": "Ba Ria",
        "countryId": 4
    },
    {
        "id": 47,
        "name": "Bình Dương",
        "description": null,
        "lable": "Binh Duong",
        "countryId": 4
    },
    {
        "id": 48,
        "name": "Bình Phước",
        "description": null,
        "lable": "Binh Phuoc",
        "countryId": 4
    },
    {
        "id": 49,
        "name": "Đồng Nai",
        "description": null,
        "lable": "Dong Nai",
        "countryId": 4
    },
    {
        "id": 50,
        "name": "Tây Ninh",
        "description": null,
        "lable": "Tay Ninh",
        "countryId": 4
    },
    {
        "id": 51,
        "name": "An Giang",
        "description": null,
        "lable": "An Giang",
        "countryId": 4
    },
    {
        "id": 52,
        "name": "Bạc Liêu",
        "description": null,
        "lable": "Bac Lieu",
        "countryId": 4
    },
    {
        "id": 53,
        "name": "Bến Tre",
        "description": null,
        "lable": "Ben Tre",
        "countryId": 4
    },
    {
        "id": 54,
        "name": "Cà Mau",
        "description": null,
        "lable": "Ca Mau",
        "countryId": 4
    },
    {
        "id": 55,
        "name": "Cần Thơ",
        "description": null,
        "lable": "Can Tho",
        "countryId": 4
    },
    {
        "id": 56,
        "name": "Đồng Tháp",
        "description": null,
        "lable": "Dong Thap",
        "countryId": 4
    },
    {
        "id": 58,
        "name": "Nam Giang",
        "description": null,
        "lable": "Nam Giang",
        "countryId": 4
    },
    {
        "id": 59,
        "name": "Long An",
        "description": null,
        "lable": "Long An",
        "countryId": 4
    },
    {
        "id": 60,
        "name": "Sóc Trăng",
        "description": null,
        "lable": "Soc Trang",
        "countryId": 4
    },
    {
        "id": 62,
        "name": "Trà Vinh",
        "description": null,
        "lable": "Tra Vinh",
        "countryId": 4
    },
    {
        "id": 63,
        "name": "Vĩnh Long",
        "description": null,
        "lable": "Vinh Long",
        "countryId": 4
    },
    {
        "id": 64,
        "name": "Bandar Seri Begawan",
        "description": null,
        "lable": "Bandar Seri Begawan",
        "countryId": 14
    },
    {
        "id": 66,
        "name": "Temburong",
        "description": null,
        "lable": "Temburong",
        "countryId": 14
    },
    {
        "id": 68,
        "name": "Tutong",
        "description": null,
        "lable": "Tutong",
        "countryId": 14
    },
    {
        "id": 69,
        "name": "Kuala Belait",
        "description": null,
        "lable": "Kuala Belait",
        "countryId": 14
    },
    {
        "id": 70,
        "name": "Phnum Penh",
        "description": null,
        "lable": "Phnom Penh",
        "countryId": 24
    },
    {
        "id": 71,
        "name": "Siem Reap",
        "description": null,
        "lable": "Siem Reap",
        "countryId": 24
    },
    {
        "id": 72,
        "name": "Battambang",
        "description": null,
        "lable": "Battambang",
        "countryId": 24
    },
    {
        "id": 73,
        "name": "Sihanoukville",
        "description": null,
        "lable": "Sihanoukville",
        "countryId": 24
    },
    {
        "id": 74,
        "name": "Kampot",
        "description": null,
        "lable": "Kampot",
        "countryId": 24
    },
    {
        "id": 75,
        "name": "Vientiane",
        "description": null,
        "lable": "Vientiane",
        "countryId": 34
    },
    {
        "id": 76,
        "name": "Pakxe",
        "description": null,
        "lable": "Pakxe",
        "countryId": 34
    },
    {
        "id": 77,
        "name": "Xam Nua",
        "description": null,
        "lable": "Xam Nua",
        "countryId": 34
    },
    {
        "id": 78,
        "name": "Phonsavan",
        "description": null,
        "lable": "Ban Phonsavan",
        "countryId": 34
    },
    {
        "id": 79,
        "name": "Thakhek",
        "description": null,
        "lable": "Thakhek",
        "countryId": 34
    },
    {
        "id": 80,
        "name": "Jakarta",
        "description": null,
        "lable": "Jakarta",
        "countryId": 44
    },
    {
        "id": 81,
        "name": "Surabaya",
        "description": null,
        "lable": "Surabaya",
        "countryId": 44
    },
    {
        "id": 82,
        "name": "Bandung",
        "description": null,
        "lable": "Bandung",
        "countryId": 44
    },
    {
        "id": 83,
        "name": "Manado",
        "description": null,
        "lable": "Manado",
        "countryId": 44
    },
    {
        "id": 84,
        "name": "Padang",
        "description": null,
        "lable": "Padang",
        "countryId": 44
    },
    {
        "id": 85,
        "name": "Medan",
        "description": null,
        "lable": "Medan",
        "countryId": 44
    },
    {
        "id": 86,
        "name": "Kuala Lumpur",
        "description": null,
        "lable": "Kuala Lumpur",
        "countryId": 54
    },
    {
        "id": 87,
        "name": "Kajang",
        "description": null,
        "lable": "Kajang",
        "countryId": 54
    },
    {
        "id": 88,
        "name": "Klang",
        "description": null,
        "lable": "Klang",
        "countryId": 54
    },
    {
        "id": 89,
        "name": "Kampung Subang",
        "description": null,
        "lable": "Kampung Subang",
        "countryId": 54
    },
    {
        "id": 90,
        "name": "Petaling Jaya",
        "description": null,
        "lable": "Petaling Jaya",
        "countryId": 54
    },
    {
        "id": 91,
        "name": "Kuantan",
        "description": null,
        "lable": "Kuantan",
        "countryId": 54
    },
    {
        "id": 93,
        "name": "Yangon",
        "description": null,
        "lable": "Yangon",
        "countryId": 64
    },
    {
        "id": 94,
        "name": "Mandalay",
        "description": null,
        "lable": "Mandalay",
        "countryId": 64
    },
    {
        "id": 96,
        "name": "Mrauk-Oo",
        "description": null,
        "lable": "Mrauk-Oo",
        "countryId": 64
    },
    {
        "id": 97,
        "name": "Pathein",
        "description": null,
        "lable": "Pathein",
        "countryId": 64
    },
    {
        "id": 98,
        "name": "Manila",
        "description": null,
        "lable": "Manila",
        "countryId": 74
    },
    {
        "id": 99,
        "name": "Quezon",
        "description": null,
        "lable": "Quezon",
        "countryId": 74
    },
    {
        "id": 100,
        "name": "Caloocan",
        "description": null,
        "lable": "Caloocan",
        "countryId": 74
    },
    {
        "id": 101,
        "name": "Davao",
        "description": null,
        "lable": "Davao",
        "countryId": 74
    },
    {
        "id": 102,
        "name": "Cebu",
        "description": null,
        "lable": "Cebu",
        "countryId": 74
    },
    {
        "id": 103,
        "name": "Zamboanga",
        "description": null,
        "lable": "Zamboanga",
        "countryId": 74
    },
    {
        "id": 104,
        "name": "BangKok",
        "description": null,
        "lable": "Bangkok",
        "countryId": 84
    },
    {
        "id": 105,
        "name": "Nonthaburi",
        "description": null,
        "lable": "Nonthaburi",
        "countryId": 84
    },
    {
        "id": 106,
        "name": "Chiang Mai",
        "description": null,
        "lable": "Chiang Mai",
        "countryId": 84
    },
    {
        "id": 107,
        "name": "Udon Thani",
        "description": null,
        "lable": "Udon Thani",
        "countryId": 84
    },
    {
        "id": 108,
        "name": "Khon Kaen",
        "description": null,
        "lable": "Khon Kaen",
        "countryId": 84
    },
    {
        "id": 109,
        "name": "Phitsanulok",
        "description": null,
        "lable": "Phitsanulok",
        "countryId": 84
    },
    {
        "id": 110,
        "name": "Singapore",
        "description": null,
        "lable": "Singapore",
        "countryId": 94
    },
    {
        "id": 111,
        "name": "Jurong Town",
        "description": null,
        "lable": "Jurong Town",
        "countryId": 94
    },
    {
        "id": 112,
        "name": "Choa Chu Kang",
        "description": null,
        "lable": "Choa Chu Kang",
        "countryId": 94
    },
    {
        "id": 113,
        "name": "Yishun",
        "description": null,
        "lable": "Yishun",
        "countryId": 94
    },
    {
        "id": 115,
        "name": "Tampines",
        "description": null,
        "lable": "Tampines",
        "countryId": 94
    }
]
  
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

  // const setDt = (citySearch:string) => {
  //   setTest(true);
  //   city.listCity.map((list: any) => {
  //     if (citySearch.toUpperCase() === list.lable.toUpperCase()) {
  //       console.log("citysearch",citySearch.toUpperCase());
  //       console.log("list label",list.lable.toUpperCase());  
  //       debugger
  //       setTest(false);    
  //       setData({
  //         userId: userID,
  //         cityId: list.id,
  //       });
  //      setLabelFavorite(list.lable);
  //     }
  //   })
  //   console.log("test out",test);
    
  // }

  const setDt = (citySearch:string) => {
      setTest(true);
      let i:number;
      for( i=0;i<list.length;i++){
        if (citySearch.toUpperCase() === list[i].lable.toUpperCase()) {
          setTest(false);    
          console.log("test -----",test);          
          setData({
            userId: userID,
            cityId: list[i].id,
          });
         setLabelFavorite(list[i].lable);
         break;
        }
      } 
      console.log("test out",test);  
    }

  const setDefault = () =>{
    dispatch(getWeatherNow());
  } 

  useEffect(() => { 
      setFv();
      setDt(propsData.location.name);
      setClick(true);  
      setLabelFavorite(propsData.location.name);
      return () => {
        setDefault();
      }
      
  }, [propsData.location.name,test,labelFavorite])

  useEffect(()=>{   
    setLabelFavorite(propsData.location.name);
  },[labelFavorite]);
  
  // Ngườưi dùng phải đăng nhập mới được dùng chức năng này, nếu đăng nhập rồi thì có thể thêm hoặc xóa địa phương yêu thích
  const handleClick = () => {
    if (localStorage.getItem("userName")) {  
      if (click) {
        if(test===false){
          const confim = window.confirm(`Bạn có muốn thêm ${labelFavorite} vào yêu thích không ?`);
          setTest(true);
          setLabelFavorite(null);
          if(confim){
            dispatch(addWeatherFavoriteRequest(data))
            setClick(false);
            setTest(true);
            setLabelFavorite(null);
          }
          
        }
        //Truong hop user search 1 city khong nằm trong list database
        else {
          const cf = window.confirm('Địa phương này không nằm trong danh sách quản lý\n Vui lòng chọn địa phương trong khung tìm kiếm!');
          if(cf){
            history.push("/");
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
