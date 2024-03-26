var inp1 = document.getElementsByClassName("inp1")[0];

document.getElementsByTagName("body")[0].onload = function () {
    inp1.focus();
};

document.addEventListener("keydown", function(event) {
    event.preventDefault();
});

function digit (btn) {
    if (inp1.value.length < 9) {
        inp1.value += btn; 
    }
}

var equClicked = false;

var classNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (var i = 0; i <= 9; i++) {
    (function(index) {
        var button = document.getElementsByClassName(classNames[index])[0];
        button.addEventListener("click", function() {
            if (!equClicked) {
                digit(`${index}`);
            }
        });
    })(i);
}

document.getElementsByClassName("dec")[0].addEventListener("click", function () {
    if (inp1.value.indexOf(".") === -1) {
        if (!equClicked) {
            digit(".");
        }
    }
});

var nos = [];
var operator;

var operations = ["add", "sub", "mul", "div", "mod"];

function operationSetup(fun) {
    nos.push(inp1.value);
    operator = fun;
    inp1.value = "";
}

for (var i = 0; i < operations.length; i++) {
    (function(index) {
        document.getElementsByClassName(operations[index])[0].addEventListener("click", function () {
            if (!equClicked) {
                operationSetup(operations[index]);
            }
        });
    })(i);
}

var sum = 0, mul = 1;
var sub, div, mod;

var inp2 = document.getElementsByClassName("inp2")[0];

document.getElementsByClassName("equ")[0].addEventListener("click", function () {
    if (inp1.value) {
        nos.push(inp1.value);
        switch (operator) {
            case "add":
                for (var i = 0; i < nos.length; i++) {
                    sum += Number(nos[i]);
                }
                inp2.value = sum;
                sum = 0;
                break;
            case "sub":
                for (var i = 1; i < nos.length; i++) {
                    sum += Number(nos[i]);
                }
                sub = Number(nos[0]) - sum;
                inp2.value = sub;
                sub = 0;
                break;
            case "mul":
                for (var i = 0; i < nos.length; i++) {
                    mul *= Number(nos[i]);
                }
                inp2.value = mul;
                mul = 0;
                break;
            case "div":
                div = Number(nos[0]);
                for (var i = 1; i < nos.length; i++) {
                    div /= Number(nos[i]);
                }
                inp2.value = div;
                div = 0;
                break;
            case "mod":
                mod = Number(nos[0]);
                for (var i = 0; i < nos.length; i++) {
                    mod %= Number(nos[i]);
                }
                inp2.value = mod;
                mod = 0;
                break;
        }
        nos = [];
        operator = "";
        equClicked = true;
        }
    }
);

document.getElementsByClassName("c")[0].addEventListener("click", function () {
    inp1.value = "";
    equClicked = false;
});

document.getElementsByClassName("del")[0].addEventListener("click", function () {
    if (!equClicked) {
        inp1.value = inp1.value.slice(0, -1);
    }
});






