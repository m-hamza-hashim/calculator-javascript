var inp1 = document.getElementsByClassName("inp1")[0];

document.getElementsByTagName("body")[0].onload = function () {
    inp1.focus();
};

document.addEventListener("keydown", function(event) {
    event.preventDefault();
});

function digit(btn) {
    inp1.value += btn; 
}

var classNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (i = 0; i <= 9; i++) {
    // Get the button element
    var button = document.getElementsByClassName(classNames[i])[0];
    // Add event listener to the button
    button.addEventListener("click", function() {
        digit(i);
    });
}


// document.getElementsByClassName("one")[0].addEventListener("click", function() {
//     digit(1);
// });
// document.getElementsByClassName("two")[0].addEventListener("click", function() {
//     digit(2);
// });
// document.getElementsByClassName("three")[0].addEventListener("click", function() {
//     digit(3);
// });
// document.getElementsByClassName("four")[0].addEventListener("click", function() {
//     digit(4);
// });
// document.getElementsByClassName("five")[0].addEventListener("click", function() {
//     digit(5);
// });
// document.getElementsByClassName("six")[0].addEventListener("click", function() {
//     digit(6);
// });
// document.getElementsByClassName("seven")[0].addEventListener("click", function() {
//     digit(7);
// });
// document.getElementsByClassName("eight")[0].addEventListener("click", function() {
//     digit(8);
// });
// document.getElementsByClassName("nine")[0].addEventListener("click", function() {
//     digit(9);
// });
// document.getElementsByClassName("zero")[0].addEventListener("click", function() {
//     digit(0);
// });


