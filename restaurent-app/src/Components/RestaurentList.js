import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import './Components.css'
import Footer from './Footer';


const RestaurentList = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        getdata();
    }, [])
    function getdata() {
        fetch('http://localhost:3000/restaurents').then((result) => {
            result.json().then((resp) => {
                setdata(resp)

            })
        })
    }
    function deleteicons(id) {
        fetch('http://localhost:3000/restaurents/' + id, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((response) => {
                getdata();

            })
        })
    }
    return (
        <div>
            <h1 className='text-center mt-3 mb-3'>Restaurent's List</h1>
            <Container className='table-responsive'>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr style={{ height: "50px " }}>
                            <th>#</th>
                            <th>Restaurents Name</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Operations</th>
                            {/* <th>< AiFillDelete /> </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) =>
                                <tr key={i} style={{ height: "50px" }}>
                                    <td>{i} </td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.email}</td>

                                    {/* <td> <Link to={'/RestaurentUpdate/' + item.id }>Edit</Link> </td> */}
                                    <td className='styl-ing'> <Link to={'/RestaurentUpdate/' + item.id}>< FaRegEdit className='icons-s' title='Edit Content' color='Yellow' /></Link>
                                        <span onClick={() => deleteicons(item.id)} >< AiFillDelete className='icons-s' title='Delete Content' color='red' /></span > </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
            < Footer />
        </div>
    );
}

export default RestaurentList;
