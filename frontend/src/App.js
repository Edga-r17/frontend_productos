import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoList from './components/ProductoList';
import AddProducto from './components/AddProducto';
import EditProducto from './components/EditProducto';
import DeleteProducto from './components/DeleteProducto';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductoList />} />
                <Route path="/add" element={<AddProducto />} />
                <Route path="/edit/:id" element={<EditProducto />} />
                <Route path="/delete/:id" element={<DeleteProducto />} />
            </Routes>
        </Router>
    );
}

export default App;