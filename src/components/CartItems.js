import React from 'react';
import storeItems from "../data/items.json";
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../currency/formatCurrency";

const CartItems = ({id, quantity, cartItems, setCartItems}) => {

    const item = storeItems.find(item => item.id === id)
    if (item == null) return null

    const removeFromCart = (id) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (

        <Stack direction="horizontal" className='d-flex align-items-center'>
            <img
                src={item.imgUrl}
                style={{width: '90px', height: '80px', objectFit: 'cover'}}
            />



            <div className='me-auto'>
                <div>{item.name}{' '}
                    {quantity > 1 && (
                        <span className='text-muted' style={{fontSize: '.7rem'}}>
                        x{quantity}
                    </span>
                    )}
                </div>

                <div className='text-muted' style={{fontSize: '.7rem'}}>
                    {formatCurrency(item.price)}
                </div>


            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>

            <Button
                variant='outline-danger'
                size='sm'
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    );
};

export default CartItems;
