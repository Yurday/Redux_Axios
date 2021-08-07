import React, {Fragment,useEffect} from 'react';
//Redux
import {useSelector,useDispatch} from "react-redux"

//Accion
import {
    listarProductosAction
} from "../actions/productoActions";

const Productos = () => {
    //Despachador de acciones
    const dispatch = useDispatch();

    useEffect(() => {
       const listProductos = () => dispatch(listarProductosAction());
       listProductos();      
    },[]);

    //Traemos los datos
    const productos = useSelector((state) =>state.productos.productos);


    return (
        <Fragment>
            <h2 className="text-center my-5"> Listado de Productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto,index)=>(
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>Borrar | Editar</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Productos;