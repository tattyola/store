import React, {useContext, useState} from 'react';
import logo from './red-logo.svg'
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle
} from "react-bootstrap";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Photos from "../pages/Photos";
import Games from "../pages/Games";
import Blog from "../pages/Blog";
import {FaCartShopping} from "react-icons/fa6";
import Cart from "./Cart";
import {CartContext} from "../context/CartContext";

const Header = () => {
    const [searchText, setSearchText] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false)
    const {cartItems} = useContext(CartContext)

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }
    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }
    return (
        <>
            <Navbar expand='md' collapseOnSelect bg='light'>
                <Container>
                    <NavbarBrand href="/">
                        <img
                            src={logo}
                            height='50'
                            width='50'
                            alt="Logo"
                        />
                        {/*todo logo*/}

                    </NavbarBrand>
                    <NavbarToggle area-control='responsive-navbar-nav'/>
                    {/*todo toggle*/}

                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/photos" as={NavLink}>Photos</Nav.Link>
                            <Nav.Link to="/games" as={NavLink}>Games</Nav.Link>
                            <Nav.Link to="/blog" as={NavLink}>Blog</Nav.Link>
                        </Nav>
                        <Form>
                            <div>
                                <FormControl
                                    inline='true'
                                    placeholder='Search...'
                                    type='text'
                                    className='me-sm-2'
                                    onChange={handleSearch}
                                />
                            </div>

                            <Button
                                style={{width: '3rem', height: '3rem', position: 'relative'}}
                                className='rounded-circle'
                                variant='outline-secondary'
                                // onClick toggle to open/close
                                onClick={handleCartToggle}
                            >
                                <FaCartShopping/>
                                <div
                                    className='rounded-circle bg-danger'
                                    style={{
                                        color: 'black',
                                        width: '1.2rem',
                                        height: '1.2rem',
                                        position: 'absolute',
                                        transform: 'translate(20%, 20%)',
                                        bottom: 0,
                                        right: 0
                                    }}
                                >
                                    {/*cart quantity*/}
                                </div>

                            </Button>

                        </Form>
                    </NavbarCollapse>

                    <Cart
                        closeCart={closeCart}
                        isCartOpen={isCartOpen}
                        // cartItems={cartItems}
                    />


                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/photos' element={<Photos searchText={searchText}/>}/>
                <Route path='/games' element={<Games/>}/>
                <Route path='/blog' element={<Blog/>}/>
            </Routes>
        </>
    );
};

export default Header;
