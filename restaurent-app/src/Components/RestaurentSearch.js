import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import './Components.css';

const RestaurentSearch = () => {
    const [searchdata, setSearchData] = useState(null);
    const [nodata, setNoData] = useState(false);

    const search = (key) => {
        fetch('http://localhost:3000/restaurents?q=' + key)
            .then((data) => data.json())
            .then((resp) => {
                if (resp.length > 0) {
                    setSearchData(resp);
                    setNoData(false);
                } else {
                    setSearchData(null);
                    setNoData(true);
                }
            });
    };

    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Restaurant's Search</h1>
            <div className="text-center style-s">
                <input
                    type="text"
                    onChange={(event) => search(event.target.value)}
                    placeholder="Search Here"
                />
            </div>
            <div>
                {searchdata ? (
                    <div>
                        <Container className='table-responsive'>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Restaurants Name</th>
                                        <th>Location</th>
                                        <th>Email</th>
                                        <th>Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchdata.map((item, id) => (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.email}</td>
                                            <td className="edi-t styl-ing">
                                                <AiFillDelete className="edit-i" />{' '}
                                                <FaRegEdit className="edit-ii" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Container>
                    </div>
                ) : (
                    ''
                )}
                {nodata ? <h4 className="text-center">No data</h4> : null}
            </div>
        </div>
    );
};

export default RestaurentSearch;
