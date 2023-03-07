import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col
} from 'reactstrap';
import {
    Link,
} from "react-router-dom";

export function CardContact() {

    const users = useSelector((state) =>
        state.cardDetailReducer.user,
    );

    return (
        <>
            {users?.map((item, index) =>
                <Link to={`/user/${item.id}`}>

                    <Card key={index} className="my-2 bg-light">
                        <CardBody>
                            <Row>
                                <Col xs='10'>
                                    <CardTitle tag="h5">
                                        {item.username}
                                    </CardTitle>
                                    <CardText>
                                        <FontAwesomeIcon icon={faEnvelopeOpen} /> {item.email} <br />
                                        <FontAwesomeIcon icon={faPhone} />  {item.phone}
                                    </CardText>
                                    <Button
                                        // onClick={() => item.update(item.index)}
                                        color='secondary'
                                    >Edit
                                    </Button>
                                    <Button
                                        // onClick={() => item.remove(item.index)}
                                        color='danger'>
                                        Delete
                                    </Button>
                                </Col>
                                <Col >
                                    <Button
                                        color={item.btnClass}>
                                        {item.gender}
                                    </Button>
                                    <CardImg
                                        alt="Card image cap"
                                        bottom
                                        src={item.image}
                                        width="100%"
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Link>
            )}
        </>
    )
}