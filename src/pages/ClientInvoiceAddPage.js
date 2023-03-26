import React, { useState } from "react";
import { addInvoiceToApi } from "../api/http";
import { useParams } from "react-router-dom";

import ClientInvoiceAdd from "../components/ClientInvoiceAdd"

const ClientInvoiceAddPage = () => {

    const params = useParams();
    const clientId = +params.id;

    const [invoice, setInvoice] = useState(
        {
            "value": "",
            "status": "",
            "clientId": clientId
        }
    );

    const addNewInvoice = () => {
        addInvoiceToApi(invoice).then((savedInvoice) => {
            setInvoice(savedInvoice);
        })
    }

    return <>
        <ClientInvoiceAdd 
            clientId = {clientId}
            invoice = {invoice} 
            setInvoice = {setInvoice} 
            addNewInvoice = {addNewInvoice}
        />
    </>
}

export default ClientInvoiceAddPage;