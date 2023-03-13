import React, { useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col
} from 'reactstrap';


export function CardContact() {

    var users = [{
        "name": "Erafi Ahonaf",
        "email": "erafi@gmail.com",
        "phone": "01875510966",
        "btnClass": "btn-success",
        "gender": "Professional",
        "imageSource": "pic2.png",
    }, {
        "name": "Ishan Sarkar",
        "email": "ishan@gmail.com",
        "phone": "01719058105",
        "btnClass": "btn-primary",
        "gender": "Personal",
        "imageSource": "pic1.png",
    }, {
        "name": "John Doe",
        "email": "jdoe@gmail.com",
        "phone": "01875510966",
        "btnClass": "btn-success",
        "gender": "Professional",
        "imageSource": "pic3.png",
    }]

    return (
        <>
            {
                /* cards array map */
                users.map((item, index) =>

                    <Card className="my-2 bg-light">
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