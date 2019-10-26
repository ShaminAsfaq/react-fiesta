import React from 'react';
import Option from './Option';

// Stateless Functional Component
const Options = (props) => {
    return (
        <div>
            <button
                className="button button--link"
                onClick={props.deleteAll}
            >
                Remove All
            </button>
            {
                props.options.length === 0 && <p>Empty List!</p>
            }
            {
                props.options.map((option) => {
                    return (
                        <Option
                            item={option}
                            key={option}
                            handleDeleteSingleOption={props.handleDeleteSingleOption}
                        />
                    );
                })
            }
        </div>
    );
};

export {
    Options as default
};
