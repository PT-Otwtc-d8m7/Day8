// ======================= Cau 1 ===========================================

let a = [1, 2, 3];
let b = [4, 5, 6];
let mergedArray = b.concat(a);
console.log(mergedArray);

// ======================= Cau 2 ===========================================

let array = [2, 4, 6, 8, 10]; 
let allEven = array.every(function(element) {
    return element % 2 === 0;
});
console.log(allEven);
let anotherArray = [2, 4, 6, 7, 10]; 
let allEven2 = anotherArray.every(function(element) {
    return element % 2 === 0;
});
console.log(allEven2);

// ======================= Cau 3 ===========================================

let array2 = [1, 3, 5, 7, 9];
let hasEven = array.some(function(element) {
    return element % 2 === 0;
});

if (hasEven) {
    console.log("yes");
} else {
    console.log("no");
}

// ======================= Cau 4 ===========================================

let array3 = [-2, 5, -10, 8, -3, 0, 7]; 
let positiveNumbers = array.filter(function(element) {
    return element > 0;
});
console.log(positiveNumbers);

// ======================= Cau 5 ===========================================


let array4 = [-1, 2, 3, 4, -5]; 
let positiveNumber = array4.find(function(element) {
    return element > 0;
});

if (positiveNumber !== undefined) {
    let index = array4.findIndex(function(element) {
        return element === positiveNumber;
    });
    console.log(`${index} ${positiveNumber}`);
} else {
    console.log("No result");
}

// ======================= Cau 6 ===========================================

let array5 = [1, 5, 30, 26];

array5.forEach(function(element) {
    if (element % 5 === 0) {
        console.log(element);
    }
});

// ======================= Cau 7 ===========================================

let array6 = [1, 2, 3, 4, 2, 5, 6, 7, 2]; // Example array

// Find and print the first index of value 2
let firstIndex = array6.indexOf(2);
if (firstIndex !== -1) {
    console.log("First index of value 2:", firstIndex);
} else {
    console.log("Value 2 not found in the array");
}

// Find and print the last index of value 2
let lastIndex = array6.lastIndexOf(2);
if (lastIndex !== -1) {
    console.log("Last index of value 2:", lastIndex);
} else {
    console.log("Value 2 not found in the array");
}


// ======================= Cau 8 ===========================================

let array7 = [ "A", "B", "C" ];
let array8 = [1,2,3];

console.log(array7.join(','))
console.log(array8.join(','))



// ======================= Cau 9 ===========================================

let array9 = [-1, -5, 3, -7, 10];
let absoluteArray = array9.map(function(element) {
    return Math.abs(element);
});

console.log(absoluteArray);