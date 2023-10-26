let userWord1 = prompt("Type a word");
let userWord2 = prompt("Type another word");

function wordLengthCheck(word1, word2) {
    if (word1.length === word2.length) {
        return(word1 + " " + word2);
    } else if(word1.length > word2.length) {
        return(word1);
    } else if(word1.length < word2.length) {
        return(word2);
    }
    
}

alert(wordLengthCheck(userWord1, userWord2));