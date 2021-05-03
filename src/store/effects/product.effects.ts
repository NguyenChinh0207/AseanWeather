import { getRequest } from "../../data/apiGateway"
import { getAll, getOne } from "../actions/product.actions"

export const getAllRequest = () => {
    return  (dispatch: any) => {
        getRequest('products').then((res) => {
            return dispatch(getAll(res.data))
        })
        
    } 
}

export const getOneRequest = (id: string) => {
    return  (dispatch: any) => {
        getRequest(`products/${id}`).then((res) => {
            return dispatch(getOne(res.data.product))
        })
    } 
}
