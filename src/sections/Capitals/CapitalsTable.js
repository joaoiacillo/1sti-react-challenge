import Capital from "./Capital";

export default function CapitalsTable(props) {
    const p_capitalNames = props.capitalNames;

    const capitals = p_capitalNames.map((name, idx) => <Capital key={idx} name={name} />);

    return (
        <table className="capitals-table">
            <thead>
                <tr>
                    <th>Min</th>
                    <th>Max</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {capitals}
            </tbody>
        </table>
    );
}
