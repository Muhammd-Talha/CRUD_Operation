import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { GrRestaurant } from "react-icons/gr";
import { IoIosPhotos, IoMdPaperPlane } from "react-icons/io";
import Footer from './Footer';
// import Navbarmenu from './Navbarmenu';

const RestaurentUpdate = () => {
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/restaurents/${params.id}`).then((response) => {
            response.json().then((result) => {
                setname(result.name);
                setaddress(result.address);
                setemail(result.email)
            })
        })
    }, [])


    const updateproduct = () => {
        console.log({ name, address, email });
        // let data = {name, address, email};

        fetch(`http://localhost:3000/restaurents/${params.id}`, {
            method: 'PUT',
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json'
            },
            body: JSON.stringify({ name, address, email })
        }).then((result) => {
            result.json().then((resp) => {
                console.log("response", resp);
                navigate('/RestaurentList')
            })
        })
    }


    return (

        <div>
            {/* <Navbarmenu /> */}
            <h1 className='text-center mt-5 mb-5'>Restaurent Update </h1>
            <div className='edit m-auto'>
            <InputGroup className="mb-3  ">
                <InputGroup.Text id="basic-addon1"><GrRestaurant /></InputGroup.Text>

                <Form.Control className='edit'
                    value={name}
                    onChange={(e) => { setname(e.target.value) }}
                    // placeholder="Restaurent Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            </div>
            <div className='edit m-auto'>
            <InputGroup className="mb-3  ">
                <InputGroup.Text id="basic-addon1">< IoMdPaperPlane /></InputGroup.Text>

                <Form.Control className='edit'
                    value={address}
                    onChange={(e) => { setaddress(e.target.value) }}
                    // placeholder="Restaurent Address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            </div>
            <div className='edit m-auto'>
            <InputGroup className="mb-3  ">
                <InputGroup.Text id="basic-addon1">< IoIosPhotos /></InputGroup.Text>

                <Form.Control className='edit'
                    value={email}
                    onChange={(e) => { setemail(e.target.value) }}
                    // placeholder="Restaurent Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            </div>
            <div className='wid-th text-center'>
                <button onClick={updateproduct} variant="outline-secondary" id="button-addon1" >Update Product</button>
            </div>
            < Footer />
        </div>
    );
}

export default RestaurentUpdate;
