import React from 'react';

const EditExpense = (props) => {   
    console.log(props);
    return (
        <div>
            Current ID is {props.match.params.id}
        </div>
    );
}

export {
    EditExpense as default
}
