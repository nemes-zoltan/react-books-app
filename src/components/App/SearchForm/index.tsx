import React, { ReactElement , useState, FormEvent, SyntheticEvent } from 'react';
import './styles.css';

interface Props {
    search: (searchTerm: string) => void;
}

export function SearchForm({ search }: Props): ReactElement {
    const [searchTerm, setSearchTerm] = useState('');

    const inputChange = (event: FormEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value);
    };

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        search(searchTerm);
    };

    return (
        <form className="formContainer" onSubmit={onSubmit}>
            <input className="searchInput" placeholder="Enter your text..." onChange={inputChange} />
            <button className="searchButton" type="submit">Search</button>
        </form>
    );
}