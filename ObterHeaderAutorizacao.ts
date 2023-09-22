import { environment } from "src/environments/environment.development";

export function ObterHeaderAutorizacao(): object{
    return {
        method: 'GET',
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${environment.API_KEY}`
        }
    }
}