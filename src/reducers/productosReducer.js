//import { productConstants } from "../types/constants"
import {productConstants} from "../types/constants";
//Cada reducer tiene su propio state
const initialState = {
    productos: [],
    producto:null,
    error:null,
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
        case productConstants.ADD_PRODUCT:
            return {
                ...state,
                loading:action.payload
            }
        case productConstants.ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                producto : action.producto
            }
        case productConstants.ADD_PRODUCT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case productConstants.LIST_PRODUCTS:
            return{
               ...state,
               loading: action.payload,
            }
        case productConstants.LIST_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                productos: action.payload
            }
        case productConstants.LIST_PRODUCTS_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}