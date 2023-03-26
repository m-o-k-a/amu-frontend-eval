import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Breadcrumb, Form } from 'react-bootstrap';
import { Folder } from 'react-bootstrap-icons';

const ClientInvoiceAdd = (props) => {

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const updateInvoiceValue = (event) => {
        props.setInvoice({ ...props.invoice, "value" : event.target.value });
    }

    const updateInvoicestatus = (event) => {
        props.setInvoice({ ...props.invoice, "status" : event.target.value });
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            props.addNewInvoice();
            navigate('/'+props.clientId)
        }
        setValidated(true);
    }

    return <>
        <Container className="mt-2 m-4 w-100">
            <Breadcrumb >
                <Breadcrumb.Item active><Folder /></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/">Retour aux clients</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to={"/"+props.clientId}>Retour au Détails d'un client</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Ajouter une facture</Breadcrumb.Item>
            </Breadcrumb>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Tarif</Form.Label>
                    <Form.Control 
                        required
                        name="amount"
                        type="number" 
                        min="0"
                        placeholder="100" 
                        onChange={updateInvoiceValue}
                        value={props.invoice.value}
                    />
                    <Form.Control.Feedback type="invalid">
                        Le champ tarif est mal formaté ou manquant
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="status">
                    <Form.Label>Statut</Form.Label>
                    <Form.Select required name="status" onChange={updateInvoicestatus} value={props.invoice.status} >
                        <option value="PAID">Payée</option>
                        <option value="SENT">Envoyée</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Le champ Statut est mal formaté ou manquant
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="outline-primary" type="submit">Enregistrer la facture</Button>
            </Form>
        </Container>
    </>
}

export default ClientInvoiceAdd;