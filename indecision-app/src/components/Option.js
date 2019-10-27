import React from 'react';

// Stateless Functional Component
const Option = (props) => {
    return (
        <div>
            {props.item}
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

