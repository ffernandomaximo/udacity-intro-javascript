/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
var facebookProfile = {
    name: "Fernando Maximo",
    friends: 786,
    messages: ["Miss You", "Let's do it", "Hahaha", "I'm in!"],
    postMessage: function(messageToAdd) {
        this.messages.push(messageToAdd);
        return this.messages;
    },
    deleteMessage: function(messageToRemove) {
        this.messages.splice(messageToRemove, 1);
        return this.messages;
    },
    addFriend: function() {
        return this.friends++;
    },
    removeFriend: function() {
        return this.friends--;
    }
};

console.log(facebookProfile.messages, facebookProfile.postMessage("Hello"));

console.log(facebookProfile.friends, facebookProfile.addFriend(5));

console.log(facebookProfile.friends, facebookProfile.removeFriend(105));

console.log(facebookProfile.messages, facebookProfile.deleteMessage(-1));
