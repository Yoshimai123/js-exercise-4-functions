function stringReverse(string){ 
    let reversedString = "";
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i];
    }
    return reversedString;
}

let userString = prompt("Choose a word to reverse")
let userStringReversed = stringReverse(userString);
if(userString === userStringReversed) {
    alert(userStringReversed + " ----> Your word is a palyndrome");
} else{
    alert(userStringReversed);
}
