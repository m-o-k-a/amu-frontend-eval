import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Breadcrumb, Form } from 'react-bootstrap';
import { Folder } from 'react-bootstrap-icons';

const ClientsAdd = (props) => {

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const updateClientFullName = (event) => {
        props.setClient({ ...props.client, "fullName" : event.target.value });
    }

    const updateClientEmail = (event) => {
        props.setClient({ ...props.client, "email" : event.target.value });
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            props.addNewClient();
            navigate(`/`)
        }
        setValidated(true);
    }

    return <>
        <Container className="mt-2 m-4 w-100">
            <Breadcrumb >
                <Breadcrumb.Item active><Folder /></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/">Retour aux clients</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Ajouter un client</Breadcrumb.Item>
            </Breadcrumb>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Nom complet</Form.Label>
                    <Form.Control 
                        required
                        name="fullName"
                        type="text" 
                        placeholder="John Doe" 
                        onChange={updateClientFullName}
                        value={props.client.fullName}
                    />
                    <Form.Control.Feedback type="invalid">
                        Le champ nom complet est mal formaté ou manquant
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        required
                        name="email"
                        type="email" 
                        placeholder="John@Doe.com"
                        onChange={updateClientEmail}
                        value={props.client.email} 
                    />
                    <Form.Control.Feedback type="invalid">
                        Le champ email est mal formaté ou manquant
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                    Nous partagerons jamais les emails de vos clients
                    </Form.Text>
                </Form.Group>
                <Button variant="outline-primary" type="submit">Enregistrer</Button>
            </Form>
        </Container>
    </>
}

export default ClientsAdd;