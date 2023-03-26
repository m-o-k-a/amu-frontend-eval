import React from "react";

import { Link } from "react-router-dom";
import { Folder } from 'react-bootstrap-icons';
import { Button, Breadcrumb, Spinner, Alert, Table } from 'react-bootstrap';

const ClientInvoicesList = (props) => {
    
    return <>
        <Breadcrumb className="mt-4">
            <Breadcrumb.Item active><Folder /></Breadcrumb.Item>
            <Breadcrumb.Item active>Liste des factures</Breadcrumb.Item>
        </Breadcrumb>
        { props.invoices === undefined ?
            <div  className="mt-0 m-4 w-100 my-auto">
                <Spinner animation="grow" variant="primary" />
            </div>
            :
            props.invoices.length === 0 ?
            <Alert variant="info">
                Aucune factures au nom de ce client.
            </Alert>
            :
            <Table striped hover className="mr-4">
                <thead>
                    <tr>
                    <th>Tarif</th>
                    <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {props.invoices.map(item => <tr key={item.id}>
                            <td>{item.value}</td>
                            <td>{item.status === "SENT" ? "Envoyée" : "Payée"}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        }
        <Link to={"/"+props.clientId+"/invoices/add"}>
            <Button variant="outline-primary">Créer une facture</Button>
        </Link>
    </>
}

export default ClientInvoicesList;