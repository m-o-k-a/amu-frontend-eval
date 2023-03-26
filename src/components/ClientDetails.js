import React from "react";
import { Link } from "react-router-dom";

import { Container, Breadcrumb, Spinner, Alert, Table } from 'react-bootstrap';
import { Folder } from 'react-bootstrap-icons';

import ClientInvoicesList from "./ClientInvoicesList";

const ClientsDetails = (props) => {
    
    return <>
        <Container className="mt-2 m-4 w-100">
            <Breadcrumb >
                <Breadcrumb.Item active><Folder /></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/">Retour aux clients</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Détails d'un client</Breadcrumb.Item>
            </Breadcrumb>
            {props.client === undefined ?
                <div  className="m-4 w-100 my-auto">
                    <Spinner animation="grow" variant="primary" />
                </div>
                :
                props.client.length === 0 ?
                <Alert variant="info">
                    Aucun client ne correspond à l'id fournise.
                </Alert>
                :
                <>
                <Table striped hover className="mr-4">
                    <thead>
                        <tr>
                        <th>Nom complet</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.client[0].fullName}</td>
                            <td>{props.client[0].email}</td>
                        </tr>
                    </tbody>
                </Table>
                <ClientInvoicesList clientId={props.client[0].id} invoices={props.invoices}/>
                </>
            }
        </Container>
    </>
}

export default ClientsDetails;