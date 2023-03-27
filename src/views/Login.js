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

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useLogin } from "../hooks/authentication"


export function Login() {

    const navigate = useNavigate()

    const signIn = useLogin()

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)


    const handleUserEmail = (email) => {
        let isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        setEmailError(isEmailValid ? true : false)
        setEmail(email)
    }

    const handleUserPassword = (password) => {
        let isPasswordValid = password.length >= 6
        setPasswordError(isPasswordValid ? true : false)
        setPassword(password)
    }

    const login = () => {
        signIn.mutate({email,password})
        navigate('/home');
    }

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
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name={email}
                                value={email}
                                valid={emailError}
                                invalid={!emailError}
                                onChange={(e) => handleUserEmail(e.target.value)}
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
                                name={password}
                                value={password}
                                valid={passwordError}
                                invalid={!passwordError}
                                onChange={(e) => handleUserPassword(e.target.value)}
                                placeholder="Enter Password"
                                type="password"
                            />
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter>
                    <Button
                        className='float-end'
                        color='primary'
                        disabled={(emailError && passwordError) ? false : true}
                        onClick={() => login()}>
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </Container>
    )
}