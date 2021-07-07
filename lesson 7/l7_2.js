var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
        if (umbrella.isOpen === false) {
            umbrella.isOpen = true;
            return "Open the umbrella!";
        } else {
            return "The umbrella is open!";
        }
    }
};

console.log(umbrella.isOpen, umbrella.open(), umbrella.isOpen);