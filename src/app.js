// src/app.js

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShieldLock } from 'react-bootstrap-icons';

import ClientsListPage from "./pages/ClientsListPage";
import ClientsAddPage from "./pages/ClientsAddPage";
import ClientDetailsPage from "./pages/ClientDetailsPage";
import ClientInvoiceAddPage from "./pages/ClientInvoiceAddPage";

const App = () => {

    const VERSION = "1.0.0";

    return <>
        <div className=" mt-2 m-4">
            <h1 className="text-primary">
                <ShieldLock /> InvoiceVault V{VERSION}
            </h1>
            <p className="text-muted mt-1 mb-0 m-2">Gestionnaire de Factures Clients</p>
        </div>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<ClientsListPage />}
                />
                <Route
                    path="/create"
                    element={<ClientsAddPage />}
                />
                <Route
                    path="/:id"
                    element={<ClientDetailsPage />}
                />
                <Route
                    path="/:id/invoices/add"
                    element={<ClientInvoiceAddPage />}
                />
            </Routes>
        </BrowserRouter>
    </>
}

ReactDOM.render(<App />, document.querySelector('main'));