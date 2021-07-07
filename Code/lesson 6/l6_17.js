/*
Use the MDN Documentation to determine which of these methods would be best for reversing elements in this array:
*/
var reverseMe = ["h", "e", "l", "l", "o"];
reverseMe.reverse();
console.log(reverseMe);

/*
What would be the best array method to sort the elements in this array:
*/
var sortMe = [2, 1, 10, 7, 6];
sortMe.sort();
console.log(sortMe);

/*
Let's say that you want to modify (i.e., mutate) removeFirstElement by removing the first element within it. 
Which method(s) could you use?
*/
var removeFirstElement = ["a", "b", "c"];
removeFirstElement.shift()
removeFirstElement.splice(0, 1);
console.log(removeFirstElement);

/*
What method would be best for changing this array into a string?
*/
var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
turnMeIntoAString.toString();
// turnMeIntoAString.join("");
console.log(turnMeIntoAString);