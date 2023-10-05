import axios from "axios";
import buildUrl from "./urlBuilder";
import SevenDaysTemperature from "../models/SevenDaysTemperature";

const FETCH_URL = "https://api.open-meteo.com/v1/forecast?latitude=%latitude&longitude=%longitude&timeformat=unixtime&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo";

export default async function fetch7DayTemperature(geoposition) {
    const url = buildUrl(FETCH_URL, {
        latitude: geoposition.latitude,
        longitude: geoposition.longitude
    });

    const response = await axios.get(url);

    const model = SevenDaysTemperature(response.data);
    return model;
}