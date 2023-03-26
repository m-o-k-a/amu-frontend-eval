import React, { useEffect, useState } from "react";
import { loadClientsFromApi } from "../api/http";
import ClientsList from "../components/ClientsList";

const ClientsListPage = () => {
    const [clients, setClients] = useState(undefined);

    useEffect(() => {
        loadClientsFromApi()
            .then((items) => {
                setClients(items);
            });
    }, [clients]);

    return <>
        <ClientsList clients={clients} />
    </>
}

export default ClientsListPage;