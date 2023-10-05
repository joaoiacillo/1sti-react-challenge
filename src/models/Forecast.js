import getArrayAverageValue from "../utils/getArrayAverageValue";

function getCurrentTemperature(timestamps, temperatures) {
    const now = new Date(Date.now());
    const nowHour = now.getHours();
    
    for (let i = 0; i < timestamps.length; i++) {
        let timestamp = timestamps[i];

        let hour = new Date(timestamp).getHours();
        if (hour === nowHour) {
            return Math.round(temperatures[i]);
        }
    }
}

export default function Forecast(data) {
    const humidityArray = data.hourly.relativehumidity_2m;
    const humidity = Math.round(getArrayAverageValue(humidityArray));

    const currentTemp = getCurrentTemperature(
        data.hourly.time,
        data.hourly.temperature_2m
    );

    return {
        city: data.city,
        country: data.country,
        humidity: humidity,
        temperature: {
            current: currentTemp,
            max: Math.round(data.daily.temperature_2m_max[0]),
            min: Math.round(data.daily.temperature_2m_min[0]),
            apparent: Math.round(data.daily.apparent_temperature_max[0])
        },
        fiveDaysTemperature: data.fiveDaysTemperature,
        windSpeed: Math.round(data.daily.windspeed_10m_max[0])
    };
};
