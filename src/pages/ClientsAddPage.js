import React, { useState } from "react";
import { addClientToApi } from "../api/http";
import ClientsAdd from "../components/ClientsAdd";

const ClientsAddPage = () => {
    const [client, setClient] = useState(
        {
            "fullName": "",
            "email": ""
        }
    );

    const addNewClient = () => {
        addClientToApi(client).then((savedClient) => {
            setClient(savedClient);
        })
    }

    return <>
        <ClientsAdd 
            client = {client} 
            setClient = {setClient} 
            addNewClient = {addNewClient} 
        />
    </>
}

export default ClientsAddPage;