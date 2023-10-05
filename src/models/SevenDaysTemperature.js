const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

function createDay(time, min, max) {
    const date = new Date(time * 1000);
    const weekDayNumber = date.getDay();
    const weekDayString = weekDays[weekDayNumber];

    return {
        weekDay: {
            string: weekDayString,
            number: weekDayNumber
        },
        temperature: {
            min: min,
            max: max
        }
    };
}

export default function SevenDaysTemperature(data) {
    const time = data.daily.time;
    const minTemperatures = data.daily.temperature_2m_min;
    const maxTemperatures = data.daily.temperature_2m_max;

    let model = [];

    for (let i = 0; i < time.length; i++) {
        model.push(createDay(
            time[i], 
            Math.round(minTemperatures[i]),
            Math.round(maxTemperatures[i])
        ));
    }

    return model;
}