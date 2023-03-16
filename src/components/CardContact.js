import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col
} from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';


export function CardContact() {

    const dispatch = useDispatch();

    const users = useSelector((state) =>
        state.cardDetailReducer.user,
    );

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/user/${id}`)
            .then(res => dispatch({ type: "FETCH", payload: res.data }));
    }

    const updateUser = (id) => {
        axios.get(`http://localhost:5000/user/${id}`)
            .then(res => dispatch({ type: "SET-USER", payload: res.data }));
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

        </>

    )
}