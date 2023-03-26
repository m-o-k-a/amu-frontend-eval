// tests/ClientListPage.test.js

import { render, screen } from "@testing-library/react";
import React from "react"
import { act } from "@testing-library/react";
import { addClientToApi, loadClientsFromApi } from "../src/api/http";
import ClientsListPage from "../src/pages/ClientsListPage";
import { BrowserRouter } from "react-router-dom";

jest.mock("../src/api/http");

it("should get a list of empty client", async () => {

    loadClientsFromApi.mockResolvedValue([]);
    
    await act(async () => {
        await render(
            <BrowserRouter>
                <ClientsListPage />
            </BrowserRouter>
        );
    });

    const clientName = screen.getByText("Aucun client enregistré à ce jour.", { exact: false });
    expect(clientName).toBeTruthy();
})

it("should get a list of client", async () => {

    loadClientsFromApi.mockResolvedValue([
        { id: 1, fullName: "John Doe", email: "john.doe@supamail.com" }
    ]);

    addClientToApi.mockImplementation((client) => Promise.resolve([{ ...client, id: 1 }]))

    await act(async () => {
        await render(
            <BrowserRouter>
                <ClientsListPage />
            </BrowserRouter>
        );
    });

    const clientName = screen.getByText("John Doe", { exact: false });
    expect(clientName).toBeTruthy();
})