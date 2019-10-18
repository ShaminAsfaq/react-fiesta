'use strict';

console.log('Hello React!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderAgain();
    }
};

var clearList = function clearList() {
    app.options = [];
    renderAgain();
};

var pickForMe = function pickForMe() {
    var random = Math.random() * app.options.length;
    random = Math.floor(random);

    var autoPick = app.options[random];
    alert('We picked ' + autoPick + ' for you!');
};

var appRoot = document.getElementById('app');

var renderAgain = function renderAgain() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length >= 0 ? 'Total Options: ' + app.options.length : ''
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: item },
                    item
                );
            })
        ),
        React.createElement(
            'button',
            { onClick: clearList },
            'Reset'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: pickForMe },
            'Pick one for me!'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderAgain();
