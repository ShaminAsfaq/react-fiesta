import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount}-{createdAt}</p>
            <Link to={`/edit/${id}`}>
                <button>
                    Edit
                </button>
            </Link>
        </div>
    );
}

export {
    ExpenseListItem as default
}

