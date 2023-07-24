/*
    state object = {
        value: number | string | object | array
    }
*/

const states = [];

function updateHtmlElement(stateName, value) {
    var elements = document.querySelectorAll(`[stateId="${stateName}"]`);

    if (elements && elements.length) {
        elements.forEach((element) => {
            element.innerHTML = value.toString();
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

    // let pushIndex =
    //     states.push({
    //         name,
    //         value: initialValue,
    //     }) - 1;
    //

    updateHtmlElement(name, initialValue);

    const setter = function(newValue) {
        // states[pushIndex].value = newValue;
        newState.value = newValue;
        updateHtmlElement(name, newValue);
    };

    const getter = function() {
        // return states[pushIndex].value;
         return newState.value;
    };

    return [getter, setter];
}
