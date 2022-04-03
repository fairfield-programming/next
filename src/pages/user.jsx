import React, { useEffect, useState } from "react";

export async function getServerData() {

    try {
        const res = await fetch(`https://fairfield-programming.herokuapp.com/user/6`)
        
        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        return {
          props: await res.json(),
        }

      } catch (error) {

        return {
          status: 500,
          headers: {},
          props: {}
        }

      }

}

export default function UserPage({ serverData }) {

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

    return (<h1>Hello There, { serverData.username }</h1>);

}