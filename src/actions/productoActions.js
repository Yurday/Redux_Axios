//import { productConstants } from '../types/constants';
import {productConstants} from '../types/constants';
//Traemos el Axios para hacer las peticiones HTTP
import clienteAxios from '../config/axios';

//Crear nuevos productos
//Esta es la que se utilizara en la vista
export function crearNuevoProductoAction(producto){
    return async (dispatch) =>{
        dispatch(agregarProducto());
        try {
            await clienteAxios.post('productos',producto);
            dispatch(agregarProductoExito(producto))
            dispatch(listarProductosAction());
        } catch (error) {
            dispatch(agregarProductoError(true));
        }
    }
}

const agregarProducto = () =>({
    type: productConstants.ADD_PRODUCT,
    payload:true
})

//Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) =>({
    type:productConstants.ADD_PRODUCT_SUCCESS,
    payload:producto
})

//Si hubo un error
const agregarProductoError = ()=>({
    type:productConstants.ADD_PRODUCT_ERROR,
    payload:"Error"
})

export function listarProductosAction(){
    return async (dispatch) => {
        dispatch(listarProductos());
        try {
            const response = await clienteAxios.get('productos');
            console.log("DATA DE LA API",response);
            dispatch(listarProductosExito(response.data))
        } catch (error) {
            dispatch (listarProductosError(error));
        }
    }
}

const listarProductos = () =>({
    type:productConstants.LIST_PRODUCTS,
    payload:true
})

const listarProductosExito = (productos) => ({
    type:productConstants.LIST_PRODUCTS_SUCCESS,
    payload:productos
})

const listarProductosError = (error) => ({
    type:productConstants.LIST_PRODUCTS_ERROR,
    payload:error
})