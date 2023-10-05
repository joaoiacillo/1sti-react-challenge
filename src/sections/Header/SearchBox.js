import SearchButton from "./SearchButton";

export default function SearchBox(props) {
    const p_setValue = props.setValue;

    return (
        <div className="search-box-wrapper">
            <input 
                type="text"
                name="city-search"
                id="city-search"
                placeholder="Insira aqui o nome da cidade"
                onChange={(e) => p_setValue(e.target.value)}
            />
            <SearchButton />
        </div>
    );
}
