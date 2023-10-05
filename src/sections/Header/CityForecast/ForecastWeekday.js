export default function ForecastWeekday(props) {
    const p_title = props.title;
    const p_min = props.min;
    const p_max = props.max;

    return (
        <div className="forecast-weekday">
            <strong>{p_title}</strong>
            <div>
                <span>{p_min}</span>
                <span>{p_max}</span>
            </div>
        </div>
    );
}