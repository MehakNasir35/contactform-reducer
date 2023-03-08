import addImage from "../images/addimage.jpg"
import { useDispatch } from "react-redux";
import pic4 from '../images/pic4.png';
import pic8 from '../images/pic8.png';

import {
    Input, Button, FormGroup, Label
} from 'reactstrap';

export function Section() {
    const dispatch = useDispatch();

    const submitHandler = (e) => {

        e.preventDefault();
        const { name, email, number, gender } = e.target;
        let image = `${pic8}`

        if (gender.value == "Male") {
            image = `${pic4}`
        }

        const payload = {
            username: name.value,
            firstName:"first",
            lastName:"last",
            email: email.value,
            phone: number.value,
            gender: gender.value,
            age:23,
            birthDate:'2000-12-25',
            bloodGroup:'A−',
            weight:'75.4',
            height:'189',
            address:{
                address:'1745 T Street Southeast',
                city:'Washington',
                state:'DC',
                postalCode:'20020',
            },
            image,
            university:'Capitol University',
            company:{
                name:"Blanda-O'Keefe",
                title:'Help Desk Operator',
                department:'Marketing',
            },
            bank:{
                cardNumber:'50380955204220685',
                cardType:'maestro',
                iban:'NO17 0695 2754 967',
            },

        }

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

    };


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
                    placeholder="Name"
                />
                <Input
                    className="mb-1"
                    type='email'
                    name={'email'}
                    id='email'
                    placeholder="Email"
                />
                <Input
                    className="mb-1"
                    type='tel'
                    name={'number'}
                    id='number'
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
                            value="Female"
                            checked={true}
                        /> female
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input
                            type="radio"
                            name="gender"
                            value="Male"
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
                        Add Contact
                    </Button>


                </div>
            </form>



        </section>
    )
}