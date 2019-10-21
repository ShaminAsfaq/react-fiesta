class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleIt = this.toggleIt.bind(this);

        this.state = {
            flag: false,
            content: 'This is now visible!'
        }
    }

    toggleIt() {
        this.setState((previousState) => {
            return  {
                flag: !previousState.flag
            }
        });        
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleIt}>Toggle it!</button>
                {
                    this.state.flag &&
                    <p>{this.state.content}</p>
                }
            </div>
        );
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));


