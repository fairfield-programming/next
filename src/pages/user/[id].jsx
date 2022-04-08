import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import GenerateUser from "../../generators/User";

export function onRequestGet({ env, request }) {
    return env.ASSETS.fetch(
      new Request(
        new URL("/user/:id/", request.url).toString(),
        request
      )
    );
}
  
export async function getServerData(context) {

    let urlParts = context.url.split("/");
    let userId = -1;

    if (urlParts.length === 5) userId = urlParts[3];

    try {
        const res = await fetch(`https://fairfield-programming.herokuapp.com/user/${userId}`)

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

export default function UserPage({ id, serverData }) {

    const [ user, setUser ] = useState({});
    useEffect(() => {

        fetch("https://fairfield-programming.herokuapp.com/user/6", { 
            // mode: "no-cors" 
        }).then((response) => {

            if (response.status === 404) { window.location.href = "/"; }

            return response.json();

        }).then((data) => {

            setUser(data);

        })

    }, [])

    let userData = GenerateUser(serverData);

    return (<>
      <Header />
      <h1>Hello There, { `${userData.firstname} ${userData.lastname}` }</h1>
      <Footer />
    </>);

}