 class IndecisionApp extends React.Component {
     render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hand of a computer';
        const options = [
            'Thing One',
            'Thing Two',
            'Thing Three',
            'Thing Four'
        ];
        
         return (
             <div>
                 <Header title={title} subtitle={subtitle}/>
                 <Action/>
                 <Options options={options}/>
                 <AddOption/>
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
    randomPick() {
        
    }
    
    render() {
        return (
            <div>
                <button onClick={this.randomPick}>Pick something random!</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    onSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll() {
        console.log(this.props.options);
    }

    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>

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

