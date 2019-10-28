import React from 'react';
import Option from './Option';

// Stateless Functional Component
const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__h3">Available Options</h3>
                <button
                    className="button button--link"
                    onClick={props.deleteAll}
                >
                    Remove All
                </button>
            </div>
            {
                props.options.length === 0 && 
                <p className="widget__message">
                    Empty List!
                </p>
            }
            {
                props.options.map((option, index) => {
                    return (
                        <Option
                            item={option}
                            key={option}
                            count={index+1}
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
