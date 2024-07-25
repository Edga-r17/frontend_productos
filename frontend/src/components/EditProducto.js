import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        axios.get(`/producto/${id}/`)
            .then(response => {
                setName(response.data.name);
                setDescription(response.data.description);
                setPrice(response.data.price);
                setQuantity(response.data.quantity);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/producto/${id}/`, {
            name,
            description,
            price,
            quantity
        })
        .then(response => {
            console.log('Producto actualizado', response);
            navigate('/');
        })
        .catch(error => console.error('Error updating product: ', error));
    };

    return (
        <div className="container">
            <h2>Editar Producto</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Precio:</label>
                    <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Cantidad:</label>
                    <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
                </div>
                <button type="submit" className="edit-button">Editar Producto</button>
            </form>
        </div>
    );
}

export default EditProducto;
