import React, { useEffect, useState } from "react";

export default function UserPage() {

    const [ user, setUser ] = useState({});
    useEffect(() => {

        fetch("https://fairfield-programming.herokuapp.com/user/6", { 
            // mode: "no-cors" 
        }).then((response) => {

            if (response.status == 404) { window.location.href = "/"; }

            return response.json();

        }).then((data) => {

            setUser(data);

        })

    }, [])

    return (<h1>Hello There, { user.username }</h1>);

}