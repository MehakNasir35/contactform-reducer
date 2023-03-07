
import {
    useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from '../layouts/NavBar';
import {
    Container, Row, Col, Card, CardTitle, CardText, Button, CardBody, Table
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
        searchUser()
    }, [id])

    return (
        <>
            <NavBar color='primary' dark={true} expand={true} />
            <Container
                className="bg-light border py-2"
                fluid >
                <Row>
                    <Col>
                        <CardTitle tag="h5">
                            {user.username}
                        </CardTitle>
                    </Col>
                    <Col>
                        <img className='float-end' src={user.image} alt="React Image" width="100px" height="100px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card body>

                            <CardText>
                                {user.email}
                            </CardText>
                            <CardText>
                                {user.phone}
                            </CardText>
                            <CardBody>
                                <Button className="m-1" color='secondary'>
                                    {user.gender}
                                </Button>
                                <Button className="m-1" color='warning' >
                                    {user.age}
                                </Button>

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
                                        <tr>
                                            <th scope="row">
                                                University
                                            </th>
                                            <td>
                                                {user.university}
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
                                        <tr>
                                            <th scope="row">
                                                Weight
                                            </th>
                                            <td>
                                                {user.weight}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>


                            </CardBody>
                        </Card>


                    </Col>
                </Row>
            </Container>
        </>
    )
}