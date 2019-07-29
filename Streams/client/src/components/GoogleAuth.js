import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: '57631410571-ai08eslajar881lr541s7jp204cok12p.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    }

    onSingInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return (
                <div></div>
            );
        }else {
            if(this.state.isSignedIn===true) {
                return (
                    <button onClick={this.onSignOutClick} className="ui red google button">
                        <i className="google icon"/>
                        Sing Out
                    </button>
                );
            } else {
                return (
                    <button onClick={this.onSingInClick} className="ui red google button">
                        <i className="google icon"/>
                        Sing In with Google
                    </button>
                );
            }
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;



