let count = 0;
const addOne = () => {
    ++count;
    renderAgain();
}

const subtractOne = () => {
    --count;
    renderAgain();
}

const reset = () => {
    count = 0;
    renderAgain();
}

const renderAgain = () => {
    const templateTwo = (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={addOne}>
                +1
            </button>
            <button onClick={subtractOne}>
                -1
            </button>
            <button onClick={reset}>
                reset
            </button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}


renderAgain();

