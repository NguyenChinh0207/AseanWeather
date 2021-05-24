import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWeatherFavoriteRequest } from "../../redux/effects/weatherEffects";

const Favourite = () => {
  const listFv = useSelector((state: RootStateOrAny) => state.weatherReducer);
  const listCity = useSelector((state: RootStateOrAny) => state.cityReducer);

  const dispatch = useDispatch();
  const remove = (userId: any, cityId: any) => {
    dispatch(removeWeatherFavoriteRequest(userId, cityId));
  };

  if (!listFv.lo || !listCity.success) {
    return <div>Bạn chưa có địa chỉ yêu thích nào</div>;
  }

  return (
    <>
      {listCity.listCity.map((listCt: any) => {
        return listFv.favorite.map((listF: any) => {
          if (listCt.lable == listF.cityLable) {
            return (
              <div key={listCt.id} className="d-flex justify-content-md-around" style={{marginBottom:"10px"}}>
                <Link to={`/now/${listCt.lable}`} className="card-body" style={{padding:0}}>
                  <p className="card-title">{listCt.name}</p>
                </Link>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={() =>{
                      const cf = window.confirm('Bạn muốn xóa yêu thích địa phương này?');
                      if(cf){
                        remove(localStorage.getItem("userID"), listCt.id)
                    }
                  }
                }
                >
                  Xóa
                </a>
              </div>
            );
          }
        });
      })}
    </>
  );
};

export default Favourite;
