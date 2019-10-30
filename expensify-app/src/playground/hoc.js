//  Higher Order Component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>An Info: {props.info}</p>
        </div>
    );
}


const warning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <p>CONFIDENTIAL!</p>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}


const authentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {
                    props.isAuthenticated ? 
                    (<WrappedComponent {...props}/>) : (<p>Please Get Authentication</p>)
                }
            </div>
        );
    }
}


const AdminInfo = warning(Info);
const AuthInfo = authentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated = {true} info='#iLoveJS'/>, document.getElementById('app'));




