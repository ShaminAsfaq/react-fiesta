import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

    onTextChange = (e) => {
        if (e.target.value==='date') {
            this.props.sortByDate();
        } else if (e.target.value==='amount') {
            this.props.sortByAmount();
        }
    };
    onSortChange = (e) => {
        if (e.target.value==='date') {
            this.props.sortByDate();
        } else if (e.target.value==='amount') {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>

                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.setStartDate(startDate);
                        this.props.setEndDate(endDate);
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

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => {
            return (
                dispatch(setTextFilter(text))
            )
        },
        sortByDate: () => {
            return (
                dispatch(sortByDate())
            )
        },
        sortByAmount: () => {
            return (
                dispatch(sortByAmount())
            )
        },
        setStartDate: (startDate) => {
            return (
                dispatch(setStartDate(startDate))
            )
        },
        setEndDate: (endDate) => {
            return (
                dispatch(setEndDate(endDate))
            )
        }
    }
}

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

export {
    ConnectedExpenseListFilters as default,
    ExpenseListFilters
}

