import React from 'react';
import axios from '../axios';
import { useParams } from 'react-router-dom';
 
const DeleteProducto = () => {
    const { id } = useParams();

    const handleDelete = () => {
        axios.delete(`/producto/${id}/`)
            .then(response => console.log('Producto eliminado', response))
            .catch(error => console.error('Error deleting product: ', error));
    };

    return (
        <div className="container">
            <h2>Eliminar Producto</h2>
            <button onClick={handleDelete} className="delete-button">Eliminar Producto</button>
        </div>
    );
}

export default DeleteProducto;



    