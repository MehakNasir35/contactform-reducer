import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col
} from 'reactstrap';
import {  useSelector } from "react-redux";

export function CardContact() {

    const users = useSelector((state) =>
        state.cardDetailReducer.user,
    );

    return (
        <>
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
            )}

        </>

    )
}