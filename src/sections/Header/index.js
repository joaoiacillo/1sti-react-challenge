import { useState } from "react";
import fetchForecast from "../../api/forecast";

import Heading from "../../components/ui/Heading";
import SearchForm from "./SearchForm";
import CityForecast from "./CityForecast";


function getCitySearchData(name, setForecastOpen, setCityForecastData) {
    fetchForecast(name)
        .then((forecast) => {
            setCityForecastData(forecast);
            setForecastOpen(true);
        })
        .catch((error) => {
            alert("Essa cidade não existe ou houve um erro ao realizar a busca.");
            console.error(error);
        });
}

export default function Header() {
    let [ cityForecastData, setCityForecastData ] = useState({});
    let [ forecastOpen, setForecastOpen ] = useState(false);

    function handleSearchSubmit(event, searchValue) {
        event.preventDefault();
        if (searchValue.trim() === "") return;

        getCitySearchData(searchValue, setForecastOpen, setCityForecastData);
    }

    return (
        <header className="header">
            <Heading type="primary">Previsão do tempo</Heading>

            <CityForecast data={cityForecastData} open={forecastOpen} />

            <SearchForm onSubmit={handleSearchSubmit} />
        </header>
    );
}
