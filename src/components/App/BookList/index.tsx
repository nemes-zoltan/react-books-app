import React, { ReactElement } from 'react';
import './styles.css';

interface Props {
    books: Record<string, any>[];
}

export function BookList({ books }: Props): ReactElement {
    const getBookItemStyles = (index: number): string => {
        return (index + 1) === books.length ? 'bookItem' : 'bookItem borderBottom';
    };

    return (
        <div className="bookList">
            <h3 className="booksHeading">Books ({books.length})</h3>
            {books.map((book, index) => (
                <div key={book.key} className={getBookItemStyles(index)}>
                    {book.title}
                </div>
            ))}
        </div>
    );
}