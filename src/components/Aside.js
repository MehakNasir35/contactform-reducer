import React, { useEffect } from "react";
import { CardContact } from "./CardContact"
import { useDispatch, useSelector } from "react-redux";

import {
    Input
} from 'reactstrap';

export function Aside() {

    let users = useSelector((state) =>
    ({
        users: state.cardDetailReducer.user,
    })
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH" })
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

            {/* cards array map */}
            {users.map((item, index) =>
                <CardContact
                    key={index}
                    name={item.username}
                    email={item.email}
                    number={item.phone}
                    type={item.gender}
                    imageSource={item.image}
                    btnClass={item.btnClass}
                />)}

        </aside>
        // {/* <!-- second section end  --> */}
    )
}