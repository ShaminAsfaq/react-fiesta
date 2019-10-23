import React from 'react';

// Stateless Functional Component
const Option = (props) => {
    return (
        <div>
            {props.item}
            <button
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

