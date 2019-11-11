const add = (a, b) => a + b;
const generate = (name) => {
    return `Hello, ${name}!`
};

test('Should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);

});

test('Should greet', () => {
	const greet = generate('Mike');
	console.log(greet);
	expect(greet).toBe('Hello, Mike!');
});
