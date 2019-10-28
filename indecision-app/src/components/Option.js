import React from 'react';

// Stateless Functional Component
const Option = (props) => {
    return (
        <div className="option">
            <p className="option__item">
                {props.count}. {props.item}
            </p>
            <button
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteSingleOption(props.item);
                }}
            >
                remove
            </button>
        </div>
    );
};

export {
    Option as default
};

 