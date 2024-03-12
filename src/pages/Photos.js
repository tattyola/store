import React, {useState} from 'react';
import storeItems from "../data/items.json";
import {Col, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import {useCart} from "../context/CartContext";

const Photos = ({searchText}) => {

    // todo items in cart
    // const [cartItems, setCartItems] = useState([])
    const {cartItems, setCartItems} = useCart();


    // add to cart
    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => item.id === cartItem.id)
        if (existingItem) {
            const updatedCartItems = cartItems.map(cartItem =>
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            )
            setCartItems(updatedCartItems)
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }

    }
    // remove item from cart
    const removeFromCart = (item) => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCartItems)
    }
    // minus
    const decreaseQuantity = (item) => {
        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
        setCartItems(updatedCartItems)
    }
    // plus
    const increaseQuantity = (item) => {
        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
        setCartItems(updatedCartItems)
    }
    // filter
    const filteredItems = storeItems.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
        <>
            <h1>Photos Page</h1>
            <Row>
                {filteredItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem
                            item={item}
                            // todo передать всю логику
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Photos;
