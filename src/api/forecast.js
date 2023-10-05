import axios from "axios";
import fetch7DayTemperature from "./7day_temperature";

import fetchGeoposition from "./geoposition";
import buildUrl from "./urlBuilder";
import Forecast from "../models/Forecast";

const FETCH_URL = "https://api.open-meteo.com/v1/forecast?latitude=%latitude&longitude=%longitude&hourly=temperature_2m,relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1";

async function get5DaysTemperature(geoposition) {
    const sevenDayTemperature = await fetch7DayTemperature(geoposition);
    return sevenDayTemperature.slice(1, 6);
}

export default async function fetchForecast(name) {
    const geoposition = await fetchGeoposition(name);

    const url = buildUrl(FETCH_URL, {
        latitude: geoposition.latitude,
        longitude: geoposition.longitude
    });

    const response = await axios.get(url);
    const fiveDaysTemperature = await get5DaysTemperature(geoposition);

    const data = {
        ...response.data,
        fiveDaysTemperature: fiveDaysTemperature,
        city: geoposition.city,
        country: geoposition.country
    };

    const model = new Forecast(data);
    return model;
};
