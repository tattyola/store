import React from 'react';
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../currency/formatCurrency";

const StoreItem = ({item, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, cartItems, setCartItems}) => {
    const {id, name, price, imgUrl} = item;
    // const quantity = 0;
    const cartItem = cartItems.find((cartItem) => cartItem.id === id)
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <Card>
            <Card.Img
                variant="top"
                src={item.imgUrl}
                style={{objectFit: 'contain'}}
                // height='400px'
                // width='400px'
            />


            <Card.Body className='d-flex-column'>
                <Card.Title
                    className='d-flex justify-content-space-between align-items-baseline mb-4'
                >
                    <span className='fs-3'>{name}</span>
                    <span className='ms-auto text-muted ms-4'>{formatCurrency(price)}</span>
                </Card.Title>
                <div>
                    {quantity === 0 ? (
                        <Button className='w-100' variant="light" onClick={() => addToCart(item)}>Add to Cart</Button>
                    ) : (
                        <div className='d-flex align-items-center flex-column' style={{gap: ".5rem"}}>
                            <div className='d-flex align-items-center justify-content-center' style={{gap: ".5rem"}}>
                                <Button variant="light" onClick={() => {decreaseQuantity(item)}}>-</Button>
                            <div>
                                <span className='fs-3'>{quantity}</span>
                            </div>
                                <Button variant="light" onClick={() => {increaseQuantity(item)}}>+</Button>
                            </div>
                            <Button variant="secondary" onClick={() => {removeFromCart(item)}}>Remove</Button>

                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default StoreItem;
