
function getUserDetails() {
    var numPersons;

    do {
        numPersons = prompt("Enter the number of persons you want to enter:");

        if (numPersons === null) {
            alert("Operation canceled.");
            return;
        }

        numPersons = Number(numPersons);

        if (isNaN(numPersons) || numPersons <= 0 || !Number.isInteger(numPersons)) {
            alert("Invalid input! Please enter a positive whole number.");
        }
    } while (isNaN(numPersons) || numPersons <= 0 || !Number.isInteger(numPersons));

    var persons = [];

    for (var i = 0; i < numPersons; i++) {
        var name, age;

        
        do {
            name = prompt("Enter the name of person " + (i + 1) + " (3-10 characters):");

            if (name === null) {
                alert("Operation canceled.");
                return;
            }

            if (name.length < 3 || name.length > 10) {
                alert("Invalid name! It should be between 3 and 10 characters.");
            }
        } while (name.length < 3 || name.length > 10);

    
        do {
            age = prompt("Enter the age of " + name + " (between 10 and 60):");

            if (age === null) {
                alert("Operation canceled.");
                return;
            }

            age = Number(age);

            if (isNaN(age) || age <= 10 || age >= 60) {
                alert("Invalid age! It should be between 10 and 60.");
            }
        } while (isNaN(age) || age <= 10 || age >= 60);

      
        persons.push({ name: name, age: age });
    }

    populateTable(persons);
}

function populateTable(persons) {
 
    var table = document.querySelector("#userTable");

    for (var i = 0; i < persons.length; i++) {
        var row = table.insertRow(-1); 
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = persons[i].name;
        cell2.textContent = persons[i].age;
    }
}
getUserDetails();

