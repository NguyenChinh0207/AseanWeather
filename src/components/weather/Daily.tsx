// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CommonModal from "../modal/CommonModal";
// import "./daily.scss";
// import { getWeatherDailyRequest } from "../../redux/effects/weatherEffects";

// function Daily() {
//   const [isShow, setIsShow] = useState(false);
//   const propsData = useSelector((state:any) => state.weatherReducer);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getWeatherDailyRequest());
//   }, []);
//   const viewDetail = () => {
//     // console.log(item)
//     setIsShow(true);
//     // setProduct(item)
//   };

//   console.log("getWeatherDailyRequest", propsData);
//   if (!propsData.loaded) {
//     return <h3>Loading...</h3>;
//   }
//   return (
//     <>
//       <p className="module-title">
//         {propsData.weatherDaily[0].date}{" "}
//         <span style={{ color: "red" }}>to</span>{" "}
//         {propsData.weatherDaily[2].date}
//       </p>
//       {propsData.weatherDaily.map((item:any) => {
//         return (
//           <div className="Box-cha">
//             <div className="hourly-card-nfl-header ">
//               <h2 className="date">
//                 {/* <span>thứ 2 đến CN </span> */}
//                 <span className="sub">{item.date}</span>
//               </h2>
//               <img
//                 alt=""
//                 className="weather-icon icon"
//                 width="128px"
//                 height="128px"
//                 data-eager=""
//                 src={item.day.condition.icon}
//               />
//               <div className="temp">
//                 <span className="high">{item.day.maxtemp_c}°</span>
//                 <span className="low">/{item.day.maxtemp_f}°</span>
//               </div>
//               <span className="real-feel">{item.day.condition.text}</span>
//               <div className="precip">
//                 <img
//                   alt="rain drop"
//                   className="precip-icon"
//                   src="https://banner2.cleanpng.com/20180327/uze/kisspng-drop-computer-icons-water-clip-art-water-drop-5aba3136cedcf6.6157995315221517348473.jpg"
//                 />
//                 {item.day.daily_chance_of_rain}%
//               </div>
//               <i className="fas fa-arrow-right" onClick={viewDetail}></i>
//             </div>
//             <CommonModal
//               title="Ngày tháng"
//               show={isShow}
//               setIsShow={() => setIsShow(false)}
//             >
//               ádjsadjai
//             </CommonModal>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default Daily;
import React from 'react';


const Daily = () => {
  return (
    <div className='footer-container'>
      
    </div>
  );
}

export default Daily;

