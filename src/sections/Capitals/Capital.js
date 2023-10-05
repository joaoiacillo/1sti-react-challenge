import axios from "axios";

import { useEffect, useState } from "react";

import fetchGeoposition from "../../api/geoposition";

function fetchCityTemperatures(geoposition) {
    const latitude = geoposition.latitude;
    const longitude = geoposition.longitude;

    return new Promise((resolve, reject) => {
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&forecast_days=1`)
            .then((response) => {
                const daily = response.data.daily;
                if (daily === undefined) reject({error: "Unknown geoposition", geoposition: geoposition});
                
                const max = daily.temperature_2m_max[0];
                const min = daily.temperature_2m_min[0];

                resolve({max: max, min: min});
            })
            .catch((error) => reject({
                error: "Unknown geoposition",
                geoposition: geoposition,
                apiResponse: error
            }));
    });
}

function fetchAndSetCapitalData(name, setMinTemp, setMaxTemp) {
    fetchGeoposition(name)
        .then((geoposition) => {
            fetchCityTemperatures(geoposition)
                .then((temperatures) => {
                    setMinTemp(Math.round(temperatures.min));
                    setMaxTemp(Math.round(temperatures.max));
                });
        })
        .catch((geoposition) => {
            console.error("Error on " + name + " geoposition fetch.");
        });
}

export default function Capital(props) {
    const p_name = props.name;

    const [ minTemp, setMinTemp ] = useState("Loading...");
    const [ maxTemp, setMaxTemp ] = useState("Loading...");

    useEffect(() => {
        fetchAndSetCapitalData(p_name, setMinTemp, setMaxTemp);
    }, [p_name]);

    return (
        <tr>
            <td>{minTemp}º</td>
            <td>{maxTemp}º</td>
            <td className="city-name">{p_name}</td>
        </tr>
    );
}