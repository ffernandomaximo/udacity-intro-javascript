// var start = 0; // when to start
// while (start < 10) { // when to stop
//   console.log(start);
//   start = start + 2; // how to get to the next item
// }

var start = 0;
while (start < 10) {
    console.log(start);
    if (start === 0){
        start = start + 2;
    } 
    else {
        start = start * 1.23;
    }
}