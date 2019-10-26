import React from 'react';

// Stateless Functional Component
const Action = (props) => {
    return (
        <div>
            <button
                className="big-button"
                onClick={props.action}
                disabled={!props.hasOptions}
            >
                Pick something random!
            </button>
        </div>
    );
};

export {
    Action as default
};

