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
        let btnClass = "warning"
        let imageSource = `${pic8}`

        if (gender.value == "Male") {
            btnClass = "danger"
            imageSource = `${pic4}`
        }

        const payload = {
            name: name.value,
            email: email.value,
            number: number.value,
            gender: gender.value,
            btnClass,
            imageSource,
        }

        dispatch({
            type: "ADD-USER",
            payload
        });

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