import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    const { searchRepositories } = useActions();
    const { data, loading, error } = useTypedSelector(
        (state) => state.repositories
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                />
                <button>Search</button>
            </form>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {!error && !loading && data.map((item) => <div>{item}</div>)}
        </div>
    );
};

export default RepositoriesList;
