import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Easy to IDENTIFY</h1>
            { props.expenses.length }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export {
    ConnectedExpenseList as default
}

