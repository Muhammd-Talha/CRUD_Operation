import React from 'react';
import './Components.css'
import { Container } from 'react-bootstrap';
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (
        <div>
            <footer>
                <Container>

                    <div className='row row-cols-1 row-cols-md-4 g-4'>
                        <div>
                            <h5>ABOUT US</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?
                            </p>
                        </div>
                        <div>
                            <h5>THE RESTAURANT</h5>
                            <li>About Us</li>
                            <li>Chefs</li>
                            <li>Events</li>
                            <li>Contacts</li>
                        </div>
                        <div>
                            <h5>USEFUL LINKS</h5>
                            <li>Foods</li>
                            <li>Drinks</li>
                            <li>Breakfast</li>
                            <li>Brunch</li>
                            <li>Dinner</li>
                        </div>
                        <div>
                            <h5>USEFUL LINKS</h5>
                            <li>Foods</li>
                            <li>Drinks</li>
                            <li>Breakfast</li>
                            <li>Brunch</li>
                            <li>Dinner</li>
                        </div>
                    </div>
                    <div className='btm-icons'>
                        < BsFacebook className='icon' title='facebook.com'/>
                        < BsTwitter className='icon' title='Twitter.com'/>
                        < BsInstagram className='icon' title='Instagram.com'/>
                    </div>
                    <p>© Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;
