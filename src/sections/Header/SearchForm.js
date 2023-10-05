import { useState } from "react";

import SearchBox from "./SearchBox";

export default function SearchForm(props) {
    let [ value, setValue ] = useState("");

    const p_onSubmit = props.onSubmit;

    return (
        <form method="get" onSubmit={(e) => p_onSubmit(e, value)}>
            <SearchBox setValue={setValue} />
        </form>
    );
}
