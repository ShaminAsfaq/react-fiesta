import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>;
};

const PageTwo = () => {
    return (
        <div>
            <button>Click Me!  ..from Page Two</button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}/>
                    <Route path="/pageTwo" component={PageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

