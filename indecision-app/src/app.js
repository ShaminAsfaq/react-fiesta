console.log('Hello React!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderAgain();
    }

}

const clearList = () => {
    app.options = [];
    renderAgain();
}

const pickForMe = () => {
    let random = Math.random() * app.options.length;
    random = Math.floor(random);

    const autoPick = app.options[random];
    alert('We picked ' + autoPick + ' for you!');
}

const appRoot = document.getElementById('app');

const renderAgain = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >= 0 ? 'Total Options: ' + app.options.length:''}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <ol>
            {
                app.options.map((item) => {
                    return <li key={item}>{item}</li>;
                })
            }
            </ol>
            <button onClick={clearList}>Reset</button>
            <button disabled={app.options.length===0} onClick={pickForMe}>Pick one for me!</button>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderAgain();
