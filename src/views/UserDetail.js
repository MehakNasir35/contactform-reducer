import {
    useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from '../layouts/NavBar';
import {
    Container, Row, Col, Badge, Table
} from 'reactstrap';
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function UserDetail() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const user = useSelector((state) =>
        state.cardDetailReducer.searchUser,
    );

    const searchUser = () => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => dispatch({ type: "SEARCH_USER", payload: data }));
    }

    useEffect(() => {
        dispatch({ type: "CLEAR_USER" })
        searchUser()
        let count = 0;
        console.log('run', count++)
    }, [id])

    return (
        <>
            <NavBar color='primary' dark={true} expand={true} />
            <Container
                className=" py-2"
                fluid >
                <Row >
                    <Col sm="2" className="m-4 py-4 border">
                        <img src={user.image} alt="React Image" className="rounded-4 shadow-4  m-4" width="100px" height="100px" />
                        <h2>{user.username}</h2>
                        <h4>{user.firstName} {user.lastName}</h4>
                        <small>{user.email}</small>
                        <hr />
                        <h4>Interests</h4>
                        <Badge className="m-1"
                            color="warning">
                            Baking
                        </Badge>
                        <Badge className="m-1"
                            color="danger">
                            Cooking
                        </Badge>
                        <Badge className="m-1"
                            color="info">
                            Gaming
                        </Badge>
                    </Col>
                    <Col className="m-4 py-4 border">
                        <h4>Personal Details</h4>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Phone
                                    </th>
                                    <td>
                                        {user.phone}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Gender
                                    </th>
                                    <td>
                                        {user.gender}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Age
                                    </th>
                                    <td>
                                        {user.age}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Birth Date
                                    </th>
                                    <td>
                                        {user.birthDate}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Blood Group
                                    </th>
                                    <td>
                                        {user.bloodGroup}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Weight
                                    </th>
                                    <td>
                                        {user.weight}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Height
                                    </th>
                                    <td>
                                        {user.height}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <hr />
                        <h4>Address</h4>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Address
                                    </th>
                                    <td>
                                        {user.address?.address}, {user.address?.city}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        State
                                    </th>
                                    <td>
                                        {user.address?.state}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Postal Code
                                    </th>
                                    <td>
                                        {user.address?.postalCode}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                    </Col>
                    <Col className="m-4 py-4 border">

                        <h4>Education</h4>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        University
                                    </th>
                                    <td>
                                        {user.university}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />
                        <h4>Company</h4>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Company
                                    </th>
                                    <td>
                                        {user.company?.name}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Job Title
                                    </th>
                                    <td>
                                        {user.company?.title}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Department
                                    </th>
                                    <td>
                                        {user.company?.department}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />
                        <h4>Account Details</h4>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Card Number
                                    </th>
                                    <td>
                                        {user.bank?.cardNumber}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Card Type
                                    </th>
                                    <td>
                                        {user.bank?.cardType}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        IBAN
                                    </th>
                                    <td>
                                        {user.bank?.iban}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}