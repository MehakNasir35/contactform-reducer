import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useState } from 'react';

export function CardContact() {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [id, setId] = useState('')
    const [gender, setGender] = useState('')
    const [btnClass, setButton] = useState('')
    const [image, setImage] = useState('')

    const [modalShow, setModalShow] = useState(false)

    const users = useSelector((state) =>
        state.cardDetailReducer.user,
    );

    const toggle = () => {
        setModalShow(!modalShow)
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/user/${id}`)
            .then(res => dispatch({ type: "FETCH", payload: res.data }));
    }

    const updateUser = (id) => {
        axios.get(`http://localhost:5000/user/${id}`)
            .then(res => dispatch({ type: "SET-USER", payload: res.data }))
            .then((res) => {
                setUsername(res.payload.username)
                setEmail(res.payload.email)
                setPhone(res.payload.phone)
                setId(res.payload.id)
                setGender(res.payload.gender)
                setButton(res.payload.btnClass)
                setImage(res.payload.imageSource)
            })
            .then(toggle);
    }

    const editUser = () => {
        const body = {
            id,
            username,
            email,
            phone,
            btnClass ,
            gender,
            image
        }
        axios.put(`http://localhost:5000/user`,body)
        .then(res => dispatch({ type: "FETCH", payload: res.data }))
        .then(toggle)
    }

    return (
        <>
            {/* cards array map */}
            {users.map((item, index) =>
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
                                    onClick={() => updateUser(item.id)}
                                    color='secondary'
                                >Edit
                                </Button>
                                <Button
                                    onClick={() => deleteUser(item.id)}
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
            )}

            <Modal isOpen={modalShow} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input
                        className="mb-1"
                        type='text'
                        name={'name'}
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
                        placeholder="phone"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={editUser}>Edit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </>

    )
}