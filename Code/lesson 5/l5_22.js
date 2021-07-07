// function myFunc(num) {
//     var ha = ""
//     for (i = 1; i <= num; i++) {
//         ha += "ha";
//     }
//     return ha + "!";
// }

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(22));
}

emotions("happy", function myFunc(num) {
    var ha = ""
    for (i = 1; i <= num; i++) {
        ha += "ha";
    }
    return ha + "!";
});