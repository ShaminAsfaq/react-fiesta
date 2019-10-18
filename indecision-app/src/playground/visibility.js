const app = {
    visibility: false,
    content: 'This is the content'
}

const toggle = () => {
    if(app.visibility===false) {
        app.visibility = true;
        console.log('Found FALSE')
    } else {
        app.visibility = false;
        console.log('Found TRUE')
    }
    renderAgain();
}

const renderAgain = () => {
    const template = (
        <div>
            <button onClick={toggle}>Toggle Visibility</button>
            {
                app.visibility? <div>{app.content}</div> : undefined            
            }
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
}
renderAgain();
