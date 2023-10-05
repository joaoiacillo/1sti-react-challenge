import Heading from "../../components/ui/Heading";
import CapitalsTable from "./CapitalsTable";

const CAPITAL_NAMES = [
    "Rio de Janeiro", "São Paulo",
    "Belo Horizonte", "Brasília",
    "Belém", "Salvador",
    "Curitiba", "Fortaleza",
    "Manaus", "João Pessoa"
];

export default function Capitals(props) {
    return (
        <main className="capitals">
            <Heading type="secondary">Capitais</Heading>
            
            <div className="capitals-table-wrapper">
                <CapitalsTable capitalNames={CAPITAL_NAMES.slice(0, 5)} />
                <CapitalsTable capitalNames={CAPITAL_NAMES.slice(5, 10)} />
            </div>
        </main>
    );
};
