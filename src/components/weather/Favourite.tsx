import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWeatherFavoriteRequest } from "../../redux/effects/weatherEffects";

const Favourite = () => {
    const listFv = useSelector((state: RootStateOrAny) => state.weatherReducer)
    const listCity = useSelector((state: RootStateOrAny) => state.cityReducer)
    const [time, setTime] = useState(1)

    const dispatch = useDispatch()
    const remove = (userId: any, cityId: any) => {
        dispatch(removeWeatherFavoriteRequest(userId, cityId))
        setTime(+1)
    }

    useEffect(() => {
        console.log("remove success",time);       
    }, [time])

    if (!listFv.lo || !listCity.success) {
        return <div>....</div>
    }
    
    return (
        <>
            {listCity.listCity.map((listCt: any) => {
                return listFv.favorite.map((listF: any) => {
                    if (listCt.id == listF.cityId) {
                        console.log("listF.name", listCt.lable);
                        return (<div key={listCt.id}><Link to={`/now/${listCt.lable}`}  className="card-body">
                            <p className="card-title">{listCt.name}</p>
                        </Link>
                            {/* <a href="#" className="btn btn-primary" onClick={() => remove(localStorage.getItem("userID"), listF.cityId)}>Xóa</a> */}
                            <a href="#" className="btn btn-primary" onClick={() => remove(1403943429941869, listF.cityId)}>Xóa</a></div>
                        )
                    }
                })
            })}
        </>
    )
}


export default Favourite;