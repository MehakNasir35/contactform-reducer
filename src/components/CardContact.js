import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'


import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col
} from 'reactstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useUsers } from "../users"

export function CardContact() {

    const editUser = (id) => {

    }

    const { isLoading, isError, data, error } = useUsers()

    if (isLoading) {
        return <Spinner cen animation="grow" />;
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    //if success
    let users = data

    return (
        <>
            {
                /* cards array map */
                users.map((item, index) =>

                    <Card key={index} className="my-2 bg-light">
                        <CardBody>
                            <Row>
                                <Col xs='10'>
                                    <CardTitle tag="h5">
                                        {item.username}
                                    </CardTitle>
                                    <CardText>
                                        <FontAwesomeIcon icon={faEnvelopeOpen} /> {item.email} <br />
                                        <FontAwesomeIcon icon={faPhone} /> {item.phone}
                                    </CardText>
                                    <Button
                                        onClick={() => editUser(item.id)}
                                        color='secondary'
                                    >Edit
                                    </Button>
                                    <Button
                                        color='danger'>
                                        Delete
                                    </Button>
                                </Col>
                                <Col >
                                    <Button
                                        color={'success'}>
                                        {item.gender}
                                    </Button>
                                    <CardImg
                                        alt="Card image cap"
                                        bottom
                                        width="100%"
                                        src={item.image}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                )
            }
        </>
    )
}