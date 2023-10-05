import svg from "../../assets/svg/search-icon.svg";

export default function SearchButton() {
    return (
        <button type="submit" className="search-button">
            <img src={svg} alt="decorative magnifying glove" />
        </button>
    );
};
