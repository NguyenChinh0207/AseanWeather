import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWeatherFavoriteRequest } from "../../redux/effects/weatherEffects";

const Favourite = () => {
    const listFv = useSelector((state: RootStateOrAny) => state.weatherReducer)
    const listCity = useSelector((state: RootStateOrAny) => state.cityReducer)

    const dispatch = useDispatch()
    const remove = (userId: any, cityId: any) => {
        dispatch(removeWeatherFavoriteRequest(userId, cityId))
    }

    if (!listFv.lo || !listCity.success) {
        return <div>Bạn chưa có địa chỉ yêu thích nào</div>
    }

    return (
        <>
            {listCity.listCity.map((listCt: any) => {
                return listFv.favorite.map((listF: any) => {
                    if (listCt.id == listF.cityId) {
                        return (<div key={listCt.id}><Link to={`/now/${listCt.lable}`} className="card-body">
                            <p className="card-title">{listCt.name}</p>
                        </Link>
                            <a href="#" className="btn btn-primary" onClick={() => remove(localStorage.getItem("userID"), listF.cityId)}>Xóa</a>
                        </div>
                        )
                    }
                })
            })}
        </>
    )
}


export default Favourite;