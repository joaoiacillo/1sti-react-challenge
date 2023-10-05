function TitledData(props) {
    const p_title = props.title;
    const p_value = props.value;

    return (
        <div className="forecast-data">
            <span>{p_title}</span>
            <strong>{p_value}</strong>
        </div>
    );
}

function IconData(props) {
    const p_icon = props.icon;
    const p_reversedIcon = props.reversedIcon;
    const p_value = props.value;

    return (
        <div className="forecast-data">
            <img
                src={p_icon}
                alt="forecast data icon"
                className={p_reversedIcon ? "reversed" : ""}
            />
            <strong>{p_value}</strong>
        </div>
    );
}

export default function ForecastData(props) {
    const p_icon = props.icon;
    const p_reversedIcon = props.reversedIcon;
    const p_title = props.title;
    const p_value = props.value;

    if (p_icon !== undefined) {
        return <IconData
            icon={p_icon}
            value={p_value}
            reversedIcon={p_reversedIcon}
            />;
    }

    return <TitledData title={p_title} value={p_value} />; 
}