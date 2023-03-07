import React, { useEffect } from "react";
import { CardContact } from "./CardContact/CardContact"
import { useDispatch } from "react-redux";

import {
    Input
} from 'reactstrap';

export function Aside() {

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
            <CardContact />

        </aside>
        // {/* <!-- second section end  --> */}
    )
}