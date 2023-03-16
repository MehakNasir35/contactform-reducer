import addImage from "../images/addimage.jpg"

import {
    Input, Button, FormGroup, Label
} from 'reactstrap';
import axios from 'axios';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export function Section() {

    const dispatch = useDispatch();

    let usersCount = useSelector((state) =>
        state.cardDetailReducer.count,
    );

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("female")

    const addContact = () => {
        const body = {
            "id": ++usersCount,
            username,
            email,
            phone,
            "btnClass": "btn-success",
            gender,
            "imageSource": "pic3.png"
        }
        axios.post(`http://localhost:5000/user`, body).then(res => dispatch({ type: "FETCH", payload: res.data }))
    }

    return (
        /* <!-- first section start -->
        <!-- naming first column as section --> */
        <section className="col-12 col-md-6 col-lg-6">

            {/* <!-- mid heading --> */}
            <h3 className="text-center mt-3 text-primary">Add Contact</h3>

            <form>
                {/* <!-- input fields start --> */}

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
                            checked={gender == 'female'}
                            onChange={(e) => setGender(e.target.value)}
                        /> female
                    </Label>
                </FormGroup>

                <FormGroup check inline>
                    <Label check>
                        <Input
                            type="radio"
                            name="radio1"
                            value="male"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender == 'male'}
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
                        onClick={() => addContact()}
                        block
                        color={'primary'}>
                        Add Contact
                    </Button>
                </div>

            </form>

        </section>
    )
}