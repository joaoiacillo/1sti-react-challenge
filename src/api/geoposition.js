import axios from "axios";
import buildUrl from "./urlBuilder";
import Geoposition from "../models/Geoposition";

const FETCH_URL = "https://geocoding-api.open-meteo.com/v1/search?name=%name&count=1&language=pt&format=json";

export default async function fetchGeoposition(name) {
    const url = buildUrl(FETCH_URL, { name: name });

    const response = await axios.get(url);
    const results = response.data.results;

    if (results === undefined) {
        throw new Error("Unknown city: " + name);    
    }

    const data = results[0];
    const model = new Geoposition(data);
    return model;
}