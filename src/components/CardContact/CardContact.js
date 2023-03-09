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

    const dispatch = useDispatch();

    const users = useSelector((state) =>
        state.cardDetailReducer.user,
    );

    const selectUser = (id) => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => dispatch({ type: "SELECT_USER", payload: data }));
    }

    const remove = (id) => {
        fetch(`https://dummyjson.com/users/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(payload => dispatch({
            type: "DELETE_USER",
            payload:{
                id,
                payload
            }
        }));
                      
    }

    return (
        <>
            {users?.map((item, index) =>
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
                                    className='m-1'
                                    onClick={() => selectUser(item.id)}
                                    color='secondary'
                                >Edit
                                </Button>
                                <Button
                                    className='m-1'
                                    onClick={() => remove(item.id)}
                                    color='danger'>
                                    Delete
                                </Button>
                                <Link to={`/user/${item.id}`} style={{ textDecoration: 'none', color: 'black' }} key={index}>
                                    <Button
                                        className='m-1'
                                        color='warning'>
                                        View
                                    </Button></Link>
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
            )}
        </>
    )
}