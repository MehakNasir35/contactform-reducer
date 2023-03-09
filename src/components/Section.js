import addImage from "../images/addimage.jpg"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import pic4 from '../images/pic4.png';
import pic8 from '../images/pic8.png';

import {
    Input, Button, FormGroup, Label
} from 'reactstrap';

export function Section() {

    const dispatch = useDispatch();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('female');

    const submitHandler = (e) => {

        e.preventDefault();

        let image = `${pic8}`

        if (gender == "Male") {
            image = `${pic4}`
        }

        const payload = {
            username: username,
            firstName: "first",
            lastName: "last",
            email: email,
            phone: phone,
            gender: gender,
            age: 23,
            birthDate: '2000-12-25',
            bloodGroup: 'A−',
            weight: '75.4',
            height: '189',
            address: {
                address: '1745 T Street Southeast',
                city: 'Washington',
                state: 'DC',
                postalCode: '20020',
            },
            image,
            university: 'Capitol University',
            company: {
                name: "Blanda-O'Keefe",
                title: 'Help Desk Operator',
                department: 'Marketing',
            },
            bank: {
                cardNumber: '50380955204220685',
                cardType: 'maestro',
                iban: 'NO17 0695 2754 967',
            },

        }

        if (Object.keys(user).length === 0) {
            fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then(payload => dispatch({
                    type: "ADD_USER",
                    payload
                }));
        }
        else {
            fetch(`https://dummyjson.com/users/${user.id}`, {
                method: 'PUT', /* or PATCH */
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then(payload => dispatch({
                    type: "EDIT_USER",
                    payload
                }))
                .then(() => {

                    user = {}

                    dispatch({
                        type: "SELECT_USER",
                        payload: {}
                    })
                });
        }
    };

    const typeChange = (e) => {
        setGender(e.currentTarget.value);
    }

    let user = useSelector((state) =>
        state.cardDetailReducer.selectUser
    );

    useEffect(() => {
        if (Object.keys(user).length != 0) {
            setUserName(user.username)
            setEmail(user.email)
            setPhone(user.phone)
            setGender(user.gender)
        }else{
            setUserName('')
            setEmail('')
            setPhone('')
            setGender('female')
        }
    }, [user])

    return (
        /* <!-- first section start -->
         <!-- naming first column as section --> */
        <section className="col-12 col-md-6 col-lg-6">
            {/* <!-- mid heading --> */}
            <h3 className="text-center mt-3 text-primary">Add Contact</h3>
            <form onSubmit={e => submitHandler(e)}>
                {/* <!-- input fields start --> */}

                <Input
                    className="mb-1"
                    type='text'
                    name={'name'}
                    id="name"
                    // onChange={e => setUserName(e.target.value)}
                    value={username}
                    placeholder="Name"
                />
                <Input
                    className="mb-1"
                    type='email'
                    name={'email'}
                    id='email'
                    // onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                />
                <Input
                    className="mb-1"
                    type='tel'
                    name={'number'}
                    id='number'
                    // onChange={e => setPhone(e.target.value)}
                    value={phone}
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
                            name="gender"
                            value="female"
                            onChange={typeChange}
                        /> female
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={typeChange}
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

                        block
                        color={'primary'}
                    >
                        {Object.keys(user).length === 0 ? 'Add Contact' : 'Edit Contact'}

                    </Button>


                </div>
            </form>



        </section>
    )
}