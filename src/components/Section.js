import addImage from "../images/addimage.jpg"

import React, { useState } from "react";
import {
    Input, Button, FormGroup, Label, Alert
} from 'reactstrap';
import { useAddUsers } from "../users"
import Spinner from 'react-bootstrap/Spinner';
export function Section() {

    //use states for input fields
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('female')
    const [phone, setPhone] = useState('')

    //on form submit, call mutation
    const submit = () => {
        mutation.mutate({ username, email, gender, phone })
    }

    //custom hook for adding contact
    const mutation = useAddUsers()

    return (

        /* <!-- first section start -->
       <!-- naming first column as section --> */
        <section className="col-12 col-md-6 col-lg-6">

            {/* if adding contact is in process, show loader else show success/error message */}
            {mutation.isLoading ?
                (<Spinner className="mt-1" animation="grow" />) :
                (
                    <>
                        {mutation.isError ? (
                            <div>An error occurred: {mutation.error.message}</div>
                        ) : null}

                        {mutation.isSuccess ? <Alert className="mt-1" color="primary">
                            User Added
                        </Alert> : null}

                    </>
                )}

            {/* <!-- mid heading --> */}
            <h3 className="text-center mt-3 text-primary">Add Contact</h3>

            <form>
                {/* <!-- input fields start --> */}

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
                {/* <!-- input fields end --> */}

                {/* <!-- heading --> */}
                <h5 className="font-weight-bold mt-3">Contact Type</h5>
                {/* <!-- radio button 1 div start --> */}
                <FormGroup check inline>
                    <Label check>
                        <Input
                            type="radio"
                            name="radio1"
                            value="female"
                        /> female
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input
                            type="radio"
                            name="radio1"
                            value="male"
                        /> male
                    </Label>
                </FormGroup>
                {/* <!-- radio button 2 div end --> */}
                {/* <!-- css display flex with content in center --> */}
                <div className="d-flex justify-content-center">
                    <img src={addImage} width="100px" height="100px" className="img-thumbnail" alt="Responsive image" />
                </div>
                <input type="file" className="mb-1" />
                <div>
                    <Button
                        onClick={() => { submit() }}
                        block
                        color={'primary'}
                    >
                        Add Contact
                    </Button>
                </div>
            </form>
        </section>
    )
}