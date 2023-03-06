import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col
} from 'reactstrap';


export function CardContact() {

    return (
        <Card className="my-2 bg-light">
            <CardBody>
                <Row>
                    <Col xs='10'>
                        <CardTitle tag="h5">
                            MHK
                        </CardTitle>
                        <CardText>
                            <FontAwesomeIcon icon={faEnvelopeOpen} /> mhk@gmailcom <br />
                            <FontAwesomeIcon icon={faPhone} /> 090078601
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