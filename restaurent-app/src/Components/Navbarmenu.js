import React from 'react';
import { AiFillHome, AiOutlineMenu, AiOutlinePlusCircle, AiOutlineFileSearch } from "react-icons/ai";
import { FiEdit, FiLogIn } from "react-icons/fi";
import { Container, Navbar, Nav,  } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Logout from './Logout';
import { useNavigate } from 'react-router-dom';

const Navbarmenu = () => {
    const navigate = useNavigate();
    function change(){

    }
    return (
        <div>
            <Navbar expand="lg" className="back-ground ">
                <Container >
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '300px' }}
                        // navbarScroll
                        >
                            <Nav.Link><Link className='pe-4 anc-hor' to='/ '>Home < AiFillHome className='editt-ing' /> </Link></Nav.Link>
                            <Nav.Link><Link className='pe-4 anc-hor' to='./RestaurentList'>List <AiOutlineMenu className='editt-ing' /></Link></Nav.Link>
                            <Nav.Link><Link className='pe-4 anc-hor' to='./RestaurentCreate'>Create < AiOutlinePlusCircle className='editt-ing' /></Link> </Nav.Link>
                            <Nav.Link><Link className='pe-4 anc-hor' to='./RestaurentSearch'>Search <AiOutlineFileSearch className='editt-ing' /></Link> </Nav.Link>
                            <Nav.Link><Link className='pe-4 anc-hor' to='./RestaurentUpdate'>Update <FiEdit className='editt-ing' /></Link> </Nav.Link>
                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link><Link className='pe-4 anc-hor' to='./Logout' onClick={()=>navigate('/login')}>Logout <FiLogIn /> </Link> </Nav.Link>
                                    // <Logout />
                        
                                    :
                                    <Nav.Link><Link className='pe-4 anc-hor' to='./Login'>Login <FiLogIn /> </Link> </Nav.Link>
                            }


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarmenu;
