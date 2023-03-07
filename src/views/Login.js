
import {
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';


export function Login() {
    return (
        <Container
            className="bg-light border center"
            fluid
        >
            <Card
                className="my-2"
                style={{
                    width: '40rem'
                }}>
                <CardHeader
                    className="text-center">
                    Login
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Enter Email"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                                Password
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Enter Password"
                                type="password"
                            />
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter>
                    <Button className='float-end' color='primary'>
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </Container>
    )
}