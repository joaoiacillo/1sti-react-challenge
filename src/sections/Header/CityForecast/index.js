import isObjectEmpty from "../../../utils/isObjectEmpty";

import Heading from "../../../components/ui/Heading";
import Separator from "../../../components/ui/Separator";
import ForecastData from "./ForecastData";
import ForecastWeekday from "./ForecastWeekday";

import ArrowIcon from "../../../assets/img/arrow.png";

export default function CityForecast(props) {
    let p_data = props.data;
    let p_open = props.open;

    if (isObjectEmpty(p_data)) {
        return <div className="city-forecast"></div>
    }

    return (
        <div className={`city-forecast ${p_open ? "open" : ""}`}>
            <strong>{p_data.city} - {p_data.country}</strong>
            <Heading type="primary">{p_data.temperature.current}ºC Nublado</Heading>

            <div className="city-forecast-data-wrapper">
                <div className="wind">
                    <ForecastData
                        icon={ArrowIcon}
                        value={`${p_data.temperature.min}ºC`}
                        reversedIcon={true}
                    />
                    <ForecastData
                        icon={ArrowIcon}
                        value={`${p_data.temperature.max}ºC`}
                    />
                </div>

                <ForecastData
                    title="Sensação"
                    value={`${p_data.temperature.apparent}ºC`}
                />
                <ForecastData
                    title="Vento"
                    value={`${p_data.windSpeed}km/h`}
                />
                <ForecastData
                    title="Humidade"
                    value={`${p_data.humidity}%`}
                />
            </div>

            <Separator />

            <div className="city-forecast-weekday-wrapper">
                {
                    p_data.fiveDaysTemperature.map((t, idx) => {
                        return (
                            <ForecastWeekday
                                key={idx}
                                title={t.weekDay.string}
                                min={t.temperature.min + "º"}
                                max={t.temperature.max + "º"}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}
