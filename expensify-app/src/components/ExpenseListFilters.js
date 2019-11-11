import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                    console.log(e.target.value);
                }}/>

                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value==='date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value==='amount') {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.dispatch(setStartDate(startDate));
                        this.props.dispatch(setEndDate(endDate));
                    }}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={(calendarFocused) => {
                        this.setState(() => {
                            return {
                                calendarFocused
                            }
                        });
                    }}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={true}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters);

export {
    ConnectedExpenseListFilters as default
}

