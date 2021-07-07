var donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
];

donutBox.forEach(function(row_donutBox, i) {
    // console.log(i, row_donutBox);
    row_donutBox.forEach(function(column_donutBox, column_i){
        console.log(i, column_i, column_donutBox);
    })
});


// console.log(donutBox, donutBox[1][2]);