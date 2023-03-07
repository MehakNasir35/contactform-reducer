import { Aside } from "./Aside"
import { Section } from "./Section"
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

export function Main() {
    
    const dispatch = useDispatch();

    const fetchUser = () => {
        fetch('https://dummyjson.com/users?limit=3')
            .then(res => res.json())
            .then(data => data.users)
            .then(users =>  dispatch({ type: "SET_USERS",payload:users }))
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (

        <div className="container-fluid row m-0">
            <Section />
            <Aside />
        </div>

    )
}