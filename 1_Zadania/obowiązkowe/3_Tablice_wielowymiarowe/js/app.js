var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34]
];

function checkArray(tab) {
    var t = [];
    for (let i = 0; i < tab.length; i++) {
        t[i] = [];
    }

    for (let y = 0; y < tab.length; y++) {
        for (let x = 0; x < tab[y].length; x++) {
            if (!(tab[y][x] % 2)) {
                t[y][x] = true;
            }
            else t[y][x] = false;
        }
    }
    return t;
}

checkArray(arr);


//-------------------------------------
// zadanie 2

// 1
for (let i = 0; i < task2Array[0].length; i++) {
    console.log(task2Array[0][i]);
}

// 2
for (let i = 0; i < 3; i++) {
    console.log('col ' + i + ' dlugosc: ' + task2Array[i].length);
}

// 3
for (let y = 0; y < task2Array.length; y++) {
    for (let x = 0; x < task2Array[y].length; x++) {
        console.log(task2Array[y][x]);
    }
}

//-------------------------------------
// zadanie 3
function print2DArray(array) {
    for (let y = 0; y < array.length; y++)
        for (let x = 0; x < array[y].length; x++) {
            console.log(array[y][x]);
        }
}

var arrayToTask3 = [
    [4, 3, 2, 1],
    [8, 7, 6, 5],
    [12, 11, 10, 9]
];
print2DArray(arrayToTask3);

//-------------------------------------
// zadanie 5
function create2DArray(cols, rows) {
    let array = [];
    let counter = 1;

    for (let y = 0; y < cols; y++) {
        let temp = [];
        for (let x = 0; x < rows; x++) {
            temp.push(counter++);
        }
        array.push(temp);
    }

    return array;
}
create2DArray(4, 4);