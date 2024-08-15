var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");

function validateForm(event) {
    event.preventDefault(); // Prevents form submission

    if(age.value === '' || height.value === '' || weight.value === '' || (!male.checked && !female.checked)) {
        alert("All fields are required!");
    } else {
        countBmi();
    }
}

function countBmi() {
    var p = [age.value, height.value, weight.value];
    var gender = male.checked ? "male" : "female";
    
    var bmi = Number(p[2]) / ((Number(p[1]) / 100) ** 2);
    var result = '';

    if(bmi < 18.5) {
        result = 'Underweight';
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        result = 'Healthy';
    } else if(bmi >= 25 && bmi <= 29.9) {
        result = 'Overweight';
    } else if(bmi >= 30 && bmi <= 34.9) {
        result = 'Obese';
    } else if(bmi >= 35) {
        result = 'Extremely obese';
    }

    displayResult(result, bmi);
}

function displayResult(result, bmi) {
    document.querySelectorAll("h1, h2").forEach(function(element) {
        element.remove();
    });

    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");

    var t = document.createTextNode(result);
    var b = document.createTextNode('BMI: ');
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));

    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);

    document.body.appendChild(h1);
    document.body.appendChild(h2);
}

document.getElementById("submit").addEventListener("click", validateForm);
