import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

const ProductoList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('/producto/')
            .then(response => setProductos(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/producto/${id}/`)
            .then(response => {
                setProductos(productos.filter(producto => producto.id !== id));
                console.log('Producto eliminado', response);
            })
            .catch(error => console.error('Error deleting product: ', error));
    };

    return (
        <div className="container">
            <h2>Lista de Productos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.name}</td>
                            <td>{producto.description}</td>
                            <td>${producto.price}</td>
                            <td>{producto.quantity}</td>
                            <td>
                                <Link to={`/edit/${producto.id}`}>
                                    <button className="edit-button">Editar</button>
                                </Link>
                                <button onClick={() => handleDelete(producto.id)} className="delete-button">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add">
                <button className="add-button">Agregar Nuevo Producto</button>
            </Link>
        </div>
    );
}

export default ProductoList;
