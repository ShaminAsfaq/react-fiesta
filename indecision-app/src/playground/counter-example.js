class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handeAddOne = this.handeAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);

        this.state = {
            count: props.count
        };
    }

    handeAddOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            }
        });
    }

    handleResetButton() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handeAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetButton}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 2016000000141
};

ReactDOM.render(<Counter count={2014000000075}/>, document.getElementById('app'));
