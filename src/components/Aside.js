import React, { useEffect } from "react";
import { CardContact } from "./CardContact"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {
    Input
} from 'reactstrap';

export function Aside() {

    const dispatch = useDispatch();

    const fetchUsers = () => {
        axios.get(`http://localhost:5000/users`)
            .then(res => dispatch({ type: "FETCH", payload: res.data }));
    }


    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        // <!-- second section start  -->
        // <!-- naming second column as aside --> */}
        <aside className="col-12 col-md-6 col-lg-6">

            <Input
                className="mb-1 mt-2"
                type='text'
                placeholder="Filter Contacts..."
            />

            <CardContact />

        </aside>
        // {/* <!-- second section end  --> */}
    )
}