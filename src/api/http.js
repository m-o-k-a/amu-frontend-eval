/*
 * API Http
*/
const SUPABASE_URL_BASE = "https://ebjbuhvvscambsmxhbbw.supabase.co/rest/v1/";
const SUPABASE_URL_CLIENTS = SUPABASE_URL_BASE + "customers";
const SUPABASE_URL_INVOICES = SUPABASE_URL_BASE + "invoices";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViamJ1aHZ2c2NhbWJzbXhoYmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MDQwODUsImV4cCI6MTk5MzA4MDA4NX0.tkN1gl0aq2hXH36Ow4daaTIbgGQ7wmT_qCWU1UNNo90";
/**
 * Ajoute un client dans l'API
 * @param {{fullName: string, email: string}} client 
 * @returns Promise<Array<{id: number, fullName: string, email: string}>>
 */
 export const addClientToApi = async (client) => {
    return fetch(SUPABASE_URL_CLIENTS, {
        method: "POST",
        body: JSON.stringify(client),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
    .then((response) => response.json())
}

/**
 * Récupère les données des clients à partir de l'API
 * @returns Promise<Array<{id: number, firstName: string, lastName: string, email: string}>>
 */
export const loadClientsFromApi = () => {
    return fetch(`${SUPABASE_URL_CLIENTS}?order=created_at`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    })
    .then((response) => response.json())
}

/**
 * Récupère les données d'un client à partir de l'API
 * @param {number} id 
 * @returns Promise<{id: number, firstName: string, lastName: string, email: string}>
 */
export const loadClientFromApi = (id) => {
    return fetch(`${SUPABASE_URL_CLIENTS}?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response => response.json())
}

/**
 * Ajoute une facture dans l'API
 * @param {{clientId: number, value: number, isPaid: boolean}} Invoice 
 * @returns Promise<{id: number, clientId: number, value: number, isPaid: boolean}>
 */
 export const addInvoiceToApi = (Invoice) => {
    return fetch(SUPABASE_URL_INVOICES, {
        method: "POST",
        body: JSON.stringify(Invoice),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
    .then((response) => response.json())
}

/**
 * Récupère les données des factures d'un client à partir de l'API
 * @param {number} clientId
 * @returns Promise<Array<{id: number, clientId: number, value: number, isPaid: boolean}>>
 */
export const loadInvoicesFromApi = (clientId) => {
    return fetch(`${SUPABASE_URL_INVOICES}?clientId=eq.${clientId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
    .then(response => response.json())
}

