import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, Modal, ModalBody, Input, ModalFooter, ModalHeader, Alert
} from 'reactstrap';

import Spinner from 'react-bootstrap/Spinner';

import { useUsers, useEditUser, useSelectUser } from "../users"

export function CardContact() {

    //use state for input fields
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [id, setId] = useState('')

    // Modal open state
    const [modal, setModal] = useState(false);

    // Toggle for Modal
    const toggle = () =>
        setModal(!modal);

    //open edit modal and set values
    const edit = (id) => {
        selectUser.mutate({ id })
        toggle()
    }

    //mutaion on edit user
    const editUser = () => {
        toggle()
    }

    //custom hook for editting contact
    const selectUser = useSelectUser()
    console.count("username",selectUser.data?.username)
    console.count("email",selectUser.data?.email)
    console.count("phone",selectUser.data?.phone)
   

    // setUsername(selectUser.data?.username)
    // setEmail(selectUser.data?.email)
    // setPhone(selectUser.data?.phone)

    //fetch users react query hook
    const { isLoading, isError, data, error } = useUsers()

    //fetch users API in progress
    if (isLoading) {
        return <Spinner animation="grow" />;
    }

    //if error occurs in fetching 
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    //if success, assign data to users
    let users = data

    return (
        <>
            {/* if adding contact is in process, show loader else show success/error message */}
            {/* {selectUser.isLoading ?
                (<Spinner className="mt-1" animation="grow" />) :
                (
                    <>
                        {selectUser.isError ? (
                            <div>An error occurred: {selectUser.error.message}</div>
                        ) : null}

                        {selectUser.isSuccess ? <Alert className="mt-1" color="primary">
                            User Updated
                        </Alert> : null}

                    </>
                )} */}
            {
                /* cards array map */
                users.map((item, index) =>
                    //user card
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
                                        color="secondary"
                                        onClick={() => { edit(item.id) }}>
                                        Edit
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

            {/* edit modal */}
            <Modal isOpen={modal}
                toggle={toggle}>
                <ModalHeader>
                    Edit
                </ModalHeader>
                <ModalBody>
                    <Input
                        className="mb-1"
                        type='text'
                        name={'username'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Name"
                    />
                    <Input
                        className="mb-1"
                        type='email'
                        name={'email'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <Input
                        className="mb-1"
                        type='tel'
                        name={'phone'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Number"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={toggle}>
                        Close
                    </Button>
                    <Button
                        onClick={() => { editUser() }}
                        color="primary">
                        Edit
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}