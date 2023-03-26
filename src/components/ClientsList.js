import React from "react";

import { Link } from "react-router-dom";
import { Folder } from 'react-bootstrap-icons';
import { Button, Container, Breadcrumb, Table, Spinner, Alert } from 'react-bootstrap';

const ClientsList = (props) => {
    return <>
        <Container className="mt-2 m-4 w-100">
        <Breadcrumb>
            <Breadcrumb.Item active><Folder /></Breadcrumb.Item>
            <Breadcrumb.Item active>Liste des clients</Breadcrumb.Item>
        </Breadcrumb>
            {props.clients === undefined ?
                <div  className="m-4 w-100 my-auto">
                    <Spinner animation="grow" variant="primary" />
                </div>
                :
                props.clients.length === 0 ?
                <Alert variant="info">
                    Aucun client enregistré à ce jour.
                </Alert>
                :
                <Table striped hover className="mr-4">
                    <thead>
                        <tr>
                        <th>Nom complet</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.clients.map(item => <tr key={item.id}>
                                <td>
                                    <Link to={"/"+item.id} className="text-decoration-none">{item.fullName}</Link>
                                </td>
                                <td>{item.email}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            }
            <Link to="/create">
                <Button variant="outline-primary">Créer un client</Button>
            </Link>
        </Container>
    </>
}

export default ClientsList;