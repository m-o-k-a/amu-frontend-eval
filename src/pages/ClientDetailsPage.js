import React, { useEffect, useState } from "react";
import { loadClientFromApi, loadInvoicesFromApi } from "../api/http";
import ClientDetails from "../components/ClientDetails";
import { useParams } from "react-router-dom";

const ClientsListPage = () => {
    const [client, setClient] = useState(undefined);
    const [invoices, setInvoices] = useState(undefined);

    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        loadInvoicesFromApi(id)
            .then((items) => {
                setInvoices(items);
            });
    }, [invoices]);

    useEffect(() => {
        loadClientFromApi(id)
            .then(response => setClient(response));
    }, [id])

    return <>
        <ClientDetails client={client} invoices={invoices} />
    </>
}

export default ClientsListPage;