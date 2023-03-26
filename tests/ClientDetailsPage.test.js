// tests/ClientListPage.test.js

import { render, screen } from "@testing-library/react";
import React from "react"
import { act } from "@testing-library/react";
import { addClientToApi, loadClientFromApi, addInvoiceToApi, loadInvoicesFromApi } from "../src/api/http";
import ClientDetailsPage from "../src/pages/ClientDetailsPage";
import { BrowserRouter } from "react-router-dom";

jest.mock("../src/api/http");

it("should get no client", async () => {

    loadClientFromApi.mockResolvedValue(undefined);

    loadInvoicesFromApi.mockResolvedValue(undefined);

    addClientToApi.mockImplementation((client) => Promise.resolve([{ ...client}]))

    addInvoiceToApi.mockImplementation((invoice) => Promise.resolve([{ ...invoice}]))

    await act(async () => {
        await render(
            <BrowserRouter>
                <ClientDetailsPage />
            </BrowserRouter>
        );
    });

    const clientName = screen.getByText("John Doe", { exact: false });
    const clientInvoices = screen.getByText("42", { exact: false });
    expect(clientName).toBeFalsy();
    expect(clientInvoices).toBeFalsy();
})

it("should get a client without invoices", async () => {

    loadClientFromApi.mockResolvedValue([
        { id: 1, fullName: "John Doe", email: "john.doe@supamail.com" }
    ]);

    loadInvoicesFromApi.mockResolvedValue([]);

    addClientToApi.mockImplementation((client) => Promise.resolve([{ ...client, id: 1 }]))

    addInvoiceToApi.mockImplementation((invoice) => Promise.resolve([{ ...invoice, id: 1 }]))

    await act(async () => {
        await render(
            <BrowserRouter>
                <ClientDetailsPage />
            </BrowserRouter>
        );
    });

    await new Promise((r) => setTimeout(r, 2000));

    const clientName = screen.getByText("Aucune factures au nom de ce client.", { exact: false });
    expect(clientName).toBeTruthy();
})

it("should get a client with invoices", async () => {

    loadClientFromApi.mockResolvedValue([
        { id: 1, fullName: "John Doe", email: "john.doe@supamail.com" }
    ]);

    loadInvoicesFromApi.mockResolvedValue([
        { id: 1, value: 42, status: "SENT", clientId: 1 }
    ]);

    addClientToApi.mockImplementation((client) => Promise.resolve([{ ...client, id: 1 }]))

    addInvoiceToApi.mockImplementation((invoice) => Promise.resolve([{ ...invoice, id: 1 }]))

    await act(async () => {
        await render(
            <BrowserRouter>
                <ClientDetailsPage />
            </BrowserRouter>
        );
    });

    const clientName = screen.getByText("John Doe", { exact: false });
    const clientInvoices = screen.getByText("42", { exact: false });
    expect(clientName).toBeTruthy();
    expect(clientInvoices).toBeTruthy();
})