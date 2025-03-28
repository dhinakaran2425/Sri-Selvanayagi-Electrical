import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Image, Navbar, Nav, Container } from 'react-bootstrap';
import { logout } from '../../actions/userActions';

export default function Header() {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items: cartItems } = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <>
            {/* Laptop View */}
            <Navbar bg="light" expand="lg" className="navbar row shadow-sm py-2 d-none d-lg-flex">
                <Container>
                    <Navbar.Brand className="col-12 col-md-3">
                        <div className="navbar-brand">
                            <Link to="/">
                                <img src="./images/logo.png" alt="SSE Logo" width="120" />
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <Nav className="ms-auto d-flex align-items-center">
                        <Link to="/" className="button nav-link" id="_btn">Home</Link>
                        <Link to="/allproducts" className="button nav-link" id="_btn">Products</Link>
                        <Link to="/about" className="button nav-link" id="_btn">About Us</Link>
                        <Link to="/contact" className="button nav-link" id="_btn">Contact Us</Link>
                        {!isAuthenticated && (
                            <Link to="/register" className="button nav-link" id="_btn">Register</Link>
                        )}
                        {isAuthenticated ? (
                            <Dropdown align="end" className="d-inline">
                                <Dropdown.Toggle variant="default text-white pr-5" id="dropdown-basic" className="d-flex align-items-center">
                                    <figure className="avatar avatar-nav">
                                        <Image 
                                            src={user.avatar ?? './images/default_avatar.png'}
                                            width="50px" 
                                            className="rounded-circle me-2"
                                        />
                                    </figure>
                                    <span className="black">{user.name}</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {user.role === 'admin' && (
                                        <Dropdown.Item onClick={() => navigate('/admin/dashboard')} className="text-dark">
                                            Dashboard
                                        </Dropdown.Item>
                                    )}
                                    <Dropdown.Item onClick={() => navigate('/myprofile')} className="text-dark">
                                        Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => navigate('/orders')} className="text-dark">
                                        Orders
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={logoutHandler} className="text-danger">
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Link to="/login" className="button nav-link" id="_btn">Login</Link>
                        )}
                        <Link to="/cart" className="button nav-link d-flex align-items-center">
                            <span id="cart" className="ml-3">Cart</span>
                            <span className="ml-1 badge bg-danger" id="cart_count">{cartItems.length}</span>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            
            {/* Mobile View */}
            <Navbar bg="light" expand="lg" className="navbar row shadow-sm py-2 d-lg-none">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src="./images/logo.png" alt="SSE Logo" width="100" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex flex-column text-center">
                            <Link to="/" className="button nav-link" id="_btn">Home</Link>
                            <Link to="/allproducts" className="button nav-link" id="_btn">Products</Link>
                            <Link to="/about" className="button nav-link" id="_btn">About Us</Link>
                            <Link to="/contact" className="button nav-link" id="_btn">Contact Us</Link>
                            {!isAuthenticated && (
                                <Link to="/register" className="button nav-link" id="_btn">Register</Link>
                            )}
                            {isAuthenticated ? (
                                <Dropdown align="center">
                                    <Dropdown.Toggle variant="default text-white" id="dropdown-basic" className="d-flex align-items-center justify-content-center">
                                        <Image 
                                            src={user.avatar ?? './images/default_avatar.png'}
                                            width="40px" 
                                            className="rounded-circle me-2"
                                        />
                                        <span className="black">{user.name}</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="text-center">
                                        {user.role === 'admin' && (
                                            <Dropdown.Item onClick={() => navigate('/admin/dashboard')} className="text-dark">
                                                Dashboard
                                            </Dropdown.Item>
                                        )}
                                        <Dropdown.Item onClick={() => navigate('/myprofile')} className="text-dark">
                                            Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => navigate('/orders')} className="text-dark">
                                            Orders
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={logoutHandler} className="text-danger">
                                            Logout
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <Link to="/login" className="button nav-link" id="_btn">Login</Link>
                            )}
                            <Link to="/cart" className="button nav-link d-flex align-items-center justify-content-center">
                                <span id="cart">Cart</span>
                                <span className="ml-1 badge bg-danger" id="cart_count">{cartItems.length}</span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
