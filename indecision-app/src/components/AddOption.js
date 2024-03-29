import React from 'react';

//  Class Based Component
class AddOption extends React.Component {
    state = {
        error: undefined
    };

    onSubmit = (e) => {
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
                    this.state.error && <p className="add-option-error">{this.state.error}</p>
                }
                <form className="add-option" onSubmit={this.onSubmit}>
                    <input className="add-option__input" type="text" name="option" autoComplete="off"/>
                    <button
                        className="button"
                    >
                        Add Option
                        </button>
                </form>
            </div>
        );
    }
}

export {
    AddOption as default
};


