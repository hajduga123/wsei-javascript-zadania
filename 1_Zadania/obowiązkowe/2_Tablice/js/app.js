//Tablice - zadanie 0
function distFromAverage(numberArray) {
    var avg = 0;
    numberArray.forEach(element => {
        avg += element;
    });
    avg = avg / numberArray.length;
    console.log(avg)
    var returnArray = [];
    numberArray.forEach(element => {
        returnArray.push(element - avg)
    });
    return returnArray;
}
distFromAverage([1, 2, 3, 4, 5, 6])

//Tablice - zadanie 1
let fruits = ['apple', 'orange', 'banana', 'strawberry'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1])
for (let count = 0; count < fruits.length; count++) {
    console.log(fruits[count]);
}

//Tablice - zadanie 3
function printTableArray(array) {
    array.map(elemnt => {
        console.log(elemnt)
    })
}
printTableArray([1, 2, 3, 4, 5, 6])

//Tablice - zadanie 4
function multiply(array) {
    let multiplication = 1
    array.map(el => {
        multiplication *= el
    })
    console.log(multiplication)
}
multiply([1, 2, 3, 4, 5, 6, 7])

//Tablice - zadanie 5
function getEvenAverage(array) {
    let avg = 0
    let evenNumber = 0
    array.forEach(element => {
        if (element % 2 == 0) {
            avg += element
            evenNumber++
        }
    });
    if (avg == 0) {
        console.log(null)
    }
    else {
        console.log(avg = avg / evenNumber)
    }
}
getEvenAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//Tablice - zadanie 6
function sortArray(array) {
    array.sort((firstValue, secondValue) => firstValue - secondValue)
    console.log(array)
}
sortArray([145, 11, 3, 64, 4, 6, 10])

//Tablice - Zadanie 7
function addArrays(first, second) {
    let counter = first.length > second.length ? first.length : second.length
    let result = []
    for (let i = 0; i < counter; i++) {
        let firstNum = first[i] != null ? first[i] : 0
        let secondNum = second[i] != null ? second[i] : 0
        result[i] = firstNum + secondNum
    }
    return result
}

addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]); //TODO