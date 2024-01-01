//your code here

function calculateTotal() {
	const prices = document.querySelectorAll('[data-ns-test="price"]');

	let totalPrice = 0;
	prices.forEach(priceElement => {
		totalPrice+=parseFloat(priceElement.textContent);
	});

	const newRow = document.createElement('tr');
	const totalCell = document.createElement('td');
	totalCell.setAttribute('data-ns-test', 'grandTotal');
	totalCell.textContent = 'Total: ' + totalPrice.toFixed(2);
	newRow.appendChild(totalCell);

	const table = document.getElementById('groceryTable');
	table.appendChild(newRow);
}

calculateTotal();

