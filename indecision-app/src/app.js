 class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.randomPick = this.randomPick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: []
        }
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter a valid item.'
        } else if(this.state.options.indexOf(option) >= 0) {
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
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hand of a computer';
        
         return (
             <div>
                 <Header title={title} subtitle={subtitle}/>
                 <Action hasOptions={this.state.options.length > 0} action={this.randomPick}/>
                 <Options 
                    options={this.state.options}
                    deleteAll={this.handleDeleteOptions}
                 />
                 <AddOption handleAddOption={this.handleAddOption}/>
             </div>
         );
     }
 }

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
                <div>
                    <button 
                        onClick={this.props.action}
                        disabled={!this.props.hasOptions}
                    >
                        Pick something random!
                    </button>
                </div>
        );
    }
}

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
        console.log(e)
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error: error                
            }
        });
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

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.deleteAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option item={option} key={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                {this.props.item}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

