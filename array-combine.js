let userArray1 = prompt("Select three items");
let userArray2 = prompt("Select three more items");

function arrayCombine (array1, array2) {
    if( (array1.length !== array2.length) || (array1.length || array2.length) > 3) {
        alert("You didn't select three items");
        return null;
    }
    let finalArray = [];
    for(let i = 0; i < array1.length; i++) {
        finalArray.push(array1[i], array2[i]);
    }
    return finalArray;
}

let result = arrayCombine(userArray1, userArray2);

if (result == null) {
    alert("Try again using only three items")
} else {
    alert(result)
    console.log(result)
}