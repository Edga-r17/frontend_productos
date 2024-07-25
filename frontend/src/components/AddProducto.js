import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

const AddProducto = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/producto/', {
            name,
            description,
            price,
            quantity
        })
        .then(response => {
            console.log('Producto añadido', response);
            navigate('/');
        })
        .catch(error => console.error('Error adding product: ', error));
    };

    return (
        <div className="container">
            <h2>Añadir Producto</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <label>Descripción:</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <label>Precio:</label>
                <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} />
                <label>Cantidad:</label>
                <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
                <button type="submit" className="add-button">Añadir Producto</button>
            </form>
        </div>
    );
}

export default AddProducto;
