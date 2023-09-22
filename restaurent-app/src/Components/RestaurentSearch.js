import React, { Component } from "react";
import { Table, Container,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import './Components.css'
// import Navbarmenu from './Navbarmenu';

class RestaurentSearch extends Component {

    constructor() {
        super()
        this.state = {
            searchdata: null,
            nodata: false,
            lastsearch :""
        }
    }
    search(key) {
        console.log(key);
        this.setState({lastsearch:key})
        fetch('http://localhost:3000/restaurents?q=' + key).then((data) => {
            data.json().then((resp) => {
                console.log("resp", resp);
                if (resp.length > 0) {
                    this.setState({ searchdata: resp, nodata: false })
                }
                else {
                    this.setState({ nodata: true, searchdata: null })
                }
            })
        })
    }
    render() {
        return (
            <div>
                {/* <Navbarmenu /> */}
                <h1 className="text-center mt-5 mb-5">Restaurent's Search</h1>
                <div className="text-center style-s">
                    <input type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search Here" />
                </div>
                <div>

                    {
                        this.state.searchdata ?
                            <div>
                                <Container className='table-responsive'>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Restaurents Name</th>
                                                <th>Location</th>
                                                <th>Email</th>
                                                <th>Operations</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.searchdata.map((item,id) =>
                                                <tr>
                                                    <td>{id+1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.email}</td>
                                                    <td className="edi-t styl-ing"><AiFillDelete className="edit-i"/> <FaRegEdit className="edit-ii"/> </td>
                                                    {/* <td> <Link to={'/RestaurentUpdate/' + item.id}>< FaRegEdit title='Edit Content' color='Yellow' /></Link>
                                        <span onClick={() => deleteicons(item.id)} >< AiFillDelete title='Delete Content' color='red' /></span > </td> */}
                                                </tr>
                                                )
                                            }

                                        </tbody>
                                    </Table>
                                </Container >

                            </div>
                            : ""
                    }
                    {
                        this.state.nodata ? <h4 className="text-center">No data</h4> : null
                    }
                </div>
            </div>

        )
    }
}
export default RestaurentSearch;

