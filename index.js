//Ваш код будет здесь
var references = {
    div: undefined,
    firstInput: undefined,
    secondInput: undefined,
    button: undefined
};
var MARGIN = '15px';
var colors = {
    red: 'red',
    green: 'green'
};
var attributes = {
    error: {
        type: "class",
        content: "error-message"
    },
    result: {
        type: "id",
        content: "result"
    }
};

window.addEventListener('load', windowEvent);

(function () {
    setTimeout(function timeOut() {
        if (references.button) {
            references.button.addEventListener('click', buttonEvent);
        }
        else {
            setTimeout(timeOut, 10);
        }
    }, 10)
})();

function windowEvent() {
    var firstInput = document.createElement('input');
    var div = document.createElement('div');
    var button = document.createElement('button');
    var secondInput = document.createElement('input');
    firstInput.style.marginRight = MARGIN;
    secondInput.style.marginRight = MARGIN;
    button.innerText = 'Посчитать';
    button.style.marginRight = MARGIN;
    document.body.appendChild(div);
    div.appendChild(firstInput);
    div.appendChild(secondInput);
    div.appendChild(button);
    references.div = div;
    references.firstInput = firstInput;
    references.secondInput = secondInput;
    references.button = button;

}

function buttonEvent() {
    var res = document.querySelector('#result');

    if (res) {
        references.div.removeChild(res);
    }

    if (isNaN(references.firstInput.value) || isNaN(references.secondInput.value)) {
        if (isNaN(references.firstInput.value)) {
            var error = createCustomDiv(colors.red, "error", attributes.error);
            insertAfter(error, references.firstInput);
        }
        if (isNaN(references.secondInput.value)) {
            var error = createCustomDiv(colors.red, "error", attributes.error);
            insertAfter(error, references.secondInput);
        }
    }
    else if(references.firstInput.value === '' || references.secondInput.value === ''){
        if (references.firstInput.value ==='') {
            var error = createCustomDiv(colors.red, "error", attributes.error);
            insertAfter(error, references.firstInput);
        }

        if (references.secondInput.value ==='') {
            var error = createCustomDiv(colors.red, "error", attributes.error);
            insertAfter(error, references.secondInput);
        }

    }
    else {
        var errors = document.querySelectorAll('.error-message');
        for (var i = 0; i < errors.length; i++) {
            references.div.removeChild(errors[i]);
        }
        var message = parseInt(references.firstInput.value) + parseInt(references.secondInput.value)
        var div = createCustomDiv(colors.green, message, attributes.result);
        references.div.appendChild(div);

    }

}
function createCustomDiv(color, text, attribute) {
    var div = document.createElement('div');
    div.style.fontSize = '20px';
    div.style.marginBottom = '20px';
    div.style.marginTop = '20px';
    div.style.color = color;
    div.innerText = text;
    div.setAttribute(attribute.type, attribute.content);
    return div
}

function insertAfter(elem, refElem) {
    var parent = refElem.parentNode;
    var next = refElem.nextSibling;
    if (next) {
        return parent.insertBefore(elem, next);
    } else {
        return parent.appendChild(elem);
    }
}

