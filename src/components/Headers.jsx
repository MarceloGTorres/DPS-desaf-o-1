"use client"
import React, { useState, useEffect } from "react";

export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
}) => {
    const [active, setActive] = useState(false);

    const onDeleteProduct = (productId) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        const updatedProducts = allProducts.filter(product => product.id !== productId);
        setAllProducts(updatedProducts);
    };

    const onUpdateQuantity = (productId, newQuantity) => {
        const updatedProducts = allProducts.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        setAllProducts(updatedProducts);
    };

    useEffect(() => {
        const newTotal = allProducts.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
        setTotal(newTotal);
    }, [allProducts, setTotal]);

    return (
        <header>
            <h1>Empresa Cafe Himalaya</h1>
            <div className='container-icon'>
                <div className='container-cart-icon' onClick={() => setActive(!active)}>
                    <h2>Carrito</h2>
                    <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png" alt="carrito" className="icon-cart" />
                    <div className='count-products'>
                        <span id='contador-productos'>{countProducts}</span>
                    </div>
                </div>
                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    <div className='container-icon'>
                        <div className='container-cart-icon'>

                        </div>
                    </div>
                    <div className={`container-cart-products`}>
                        {allProducts.length ? (
                            <>
                                {allProducts.map(product => (
                                    <div className='cart-product' key={product.id}>
                                        <div className='info-cart-product'>
                                            <span className='cantidad-producto-carrito'>
                                                <p className='titulo-producto-carrito'>
                                                    {product.title}
                                                </p>
                                                <input
                                                    type="number"
                                                    value={product.quantity}
                                                    onChange={(e) => {
                                                        const newQuantity = parseInt(e.target.value);
                                                        onUpdateQuantity(product.id, newQuantity);
                                                    }}
                                                />
                                            </span>
                                            <br></br>
                                            <span className='precio-total-producto-carrito'>
                                                SubTotal: $ {(product.price * product.quantity).toFixed(2)}
                                            </span>
                                            <p>-</p>
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/256/6932/6932392.png"
                                                alt="Eliminar"
                                                className="icon-close"
                                                onClick={() => onDeleteProduct(product.id)}
                                            />
                                             <span className='precio-total-producto-carrito'>
                                                Eliminar
                                            </span>
                                        </div>
                                    </div>

                                ))}  <span className="total-pagar">Total a Pagar: ${total.toFixed(2)}</span>
                            </>
                        ) : (
                            <p className='cart-empty'>El carrito está vacío</p>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
