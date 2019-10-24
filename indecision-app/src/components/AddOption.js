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

export {
    AddOption as default
};


