import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

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

    handleDeleteSingleOption = (option) => {
        this.setState((previousState) => {
            return {
                options: previousState.options.filter((item) => {
                    return item !== option;
                })
            }
        });
    };

    handleAddOption = (option) => {
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
    };

    randomPick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState({
            selectedOption: option
        });
    };

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    };

    handleOkayButton = () => {
        this.setState({
            selectedOption: undefined
        });
    }

    render() {
        const subtitle = 'Put your life in the hand of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} action={this.randomPick}/>
                    <Options
                        options={this.state.options}
                        deleteAll={this.handleDeleteOptions}
                        handleDeleteSingleOption={this.handleDeleteSingleOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleOkayButton={this.handleOkayButton}
                />
            </div>
        );
    }
}

//  Default Props
IndecisionApp.defaultProps = {
    options: []
};

export {
    IndecisionApp as default
};