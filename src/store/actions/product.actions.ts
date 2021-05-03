import { IProduct } from "../../models/Product";
import { ProductActionTypes } from '../actionTypes/productTypes'

export const getAll = (payload: any) => {
    return {
        type: ProductActionTypes.GET_ALL,
        payload
    }
}

export const getOne = (payload: IProduct) => {
    return {
        type: ProductActionTypes.GET_ONE,
        payload
    }
}
