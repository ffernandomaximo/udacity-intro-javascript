// var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
// /*  We decided to make all the same donut types, 
//     but only sell them as donut holes instead, 
//     we could write the following code:
// */
// donuts[0] += " hole";
// donuts[1] += " hole";
// donuts[2] += " hole";

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}