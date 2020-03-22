function createNode(element) {
	return document.createElement(element);
}

function append(parent, element) {
	return parent.appendChild(element);
}

const ul = document.getElementById('people');

fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => {
		let people = data;

		return people.map(person => {
			let li = createNode('li');
			let span = createNode('span');

			li.innerHTML = person.name;
			span.innerHTML = person.email;

			append(li, span);
			append(ul, li);
		});
	});