//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog1_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog1_names = ["Max", "HAS", "PuRple", "dog"]

function findWords(string, names) {
    let matchFound = false;

    for (let i = 0; i < names.length; i++) {
        if (string.includes(names[i])) {
            console.log(`Matched ${names[i]}`);
            matchFound = true;
        }
    }

    if (!matchFound) {
        console.log("No Matches");
    }
}

//Call method here with parameters
let result1 = findWords(dog1_string, dog1_names)
console.log(result1);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array.splice(i, 1, "even index");
        }
    }

    return array;
}

let result2 = replaceEvens(Given_arr)
console.log(result2);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




//============Codewars #2 ============//
/*WWrite a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times." */

function repeatStr (n, s) {
    return s.repeat(n);
  }