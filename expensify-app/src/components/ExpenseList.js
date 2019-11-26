import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            {
                props.expenses.length === 0 ? (
                    <p>Nothing to render</p>
                ) : (
                    props.expenses.map((item) => {
                        return (
                            <ExpenseListItem key={item.id} {...item}/>
                        );
                    })
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export {
    ConnectedExpenseList as default,
    ExpenseList
}

