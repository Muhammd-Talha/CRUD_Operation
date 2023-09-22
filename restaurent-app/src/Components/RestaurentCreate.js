import React, { useState } from 'react';
import { Form, InputGroup, Button, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Components.css'
import { GrRestaurant } from "react-icons/gr";
import { IoIosPhotos, IoMdPaperPlane } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Footer from './Footer';
// import Navbarmenu from './Navbarmenu';




const RestaurentCreate = () => {
    function create() {
        console.log({ name, address, email });
        let data = { name, address, email }
        fetch('http://localhost:3000/restaurents', {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                navigate('/RestaurentList');
            })
        })
    }
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const navigate = useNavigate();
    console.log(name, address, email);
    return (
        <div>
            {/* <Navbarmenu /> */}
            <h1 className='text-center mt-5 mb-5'>Create Restaurent's</h1>
            <div className='edit m-auto'>
                <InputGroup className="mb-3  ">
                    <InputGroup.Text id="basic-addon1"><GrRestaurant /> </InputGroup.Text>

                    <Form.Control className='edit'
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Restaurent Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div className='edit m-auto'>
                <InputGroup className="mb-3  ">
                    <InputGroup.Text id="basic-addon1">< IoMdPaperPlane /> </InputGroup.Text>

                    <Form.Control className='edit'
                        onChange={(e) => setaddress(e.target.value)}
                        placeholder="Restaurent Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div className='edit m-auto '>
                <InputGroup className="mb-3  ">
                    <InputGroup.Text id="basic-addon1">< IoIosPhotos /> </InputGroup.Text>

                    <Form.Control className='edit'
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Restaurent Email"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div className='text-center wid-th'>
                <button onClick={create} variant="outline-secondary" id="button-addon1">Button</button>
            </div>
            < Footer />

        </div>
    );
}

export default RestaurentCreate;
