function updateHtmlElement(stateName, value) {
	var elements = document.querySelectorAll(`[stateId="${stateName}"]`);

	if (elements && elements.length) {
		elements.forEach(element => {
			if (element.nodeName !== "INPUT") {
				element.innerHTML = value.toString();
			} else {
				element.value = value.toString();
			}
		});
	} else {
		console.warn(`Elements with stateId=${stateName} not found`);
	}
}

function createState(name, initialValue) {
	let newState = {
		name,
		value: initialValue,
	};

	updateHtmlElement(name, initialValue);

	const setter = function (newValue) {
		newState.value = newValue;
		updateHtmlElement(name, newValue);
	};

	const getter = function () {
		return newState.value;
	};

	return [getter, setter];
}
