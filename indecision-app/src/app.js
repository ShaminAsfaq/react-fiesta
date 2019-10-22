//  Class Based Component
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.randomPick = this.randomPick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        let options = localStorage.options;

        if (options) {
            try {
                options = JSON.parse(options);
                this.setState(() => {
                    return {
                        options: options
                    }
                });
            } catch (ex) {
                // Do nothing
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Updated!!');
        }
    }

    componentWillUnmount() {
        console.log('UNMOUNTING..');
    }

    handleDeleteSingleOption(option) {
        this.setState((previousState) => {
            return {
                options: previousState.options.filter((item) => {
                    return item !== option;
                })
            }
        });
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid item.'
        } else if (this.state.options.indexOf(option) >= 0) {
            return 'Option used already.'
        }
        this.setState((previousState) => {
            return {
                options: previousState.options.concat([option])
            }
        });
    }

    randomPick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    render() {
        const subtitle = 'Put your life in the hand of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} action={this.randomPick}/>
                <Options
                    options={this.state.options}
                    deleteAll={this.handleDeleteOptions}
                    handleDeleteSingleOption={this.handleDeleteSingleOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

//  Default Props
IndecisionApp.defaultProps = {
    options: []
};

// Stateless Functional Component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {
                props.subtitle &&
                <h2>{props.subtitle}</h2>
            }
        </div>
    );
};

//  Default Props for Header
Header.defaultProps = {
    title: 'Indecision App (Default Title)'
};

// Stateless Functional Component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.action}
                disabled={!props.hasOptions}
            >
                Pick something random!
            </button>
        </div>
    );
};

//  Class Based Component
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }

    onSubmit(e) {
        e.preventDefault();
        // console.log(e);
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error: error
            }
        });

        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// Stateless Functional Component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteAll}>Remove All</button>
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

// Stateless Functional Component
const Option = (props) => {
    return (
        <div>
            {props.item}
            <button
                onClick={(e) => {
                    props.handleDeleteSingleOption(props.item);
                }}
            >
                remove
            </button>
        </div>
    );
};

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

