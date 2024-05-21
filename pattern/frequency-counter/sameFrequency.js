// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

//     sameFrequency(182,281) // true
//     sameFrequency(34,14) // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
    let num1String = num1.toString();
    let num2String = num2.toString();
    let num1Length = num1String.length;
    let num2Length = num2String.length;

    if (num1Length !== num2Length) return false;

    let numCount = {};

    for (let i = 0; i < num1Length; i++) {
        if (numCount[num1String[i]]) {
            numCount[num1String[i]] += 1;
        } else {
            numCount[num1String[i]] = 1;
        }
    }

    for (let j = 0; j < num2Length; j++) {
        let key = num2String[j];
        console.log("🚀 ~ sameFrequency ~ key:", key)
        if (!numCount[key]) {
            return false;
        } else {
            numCount[key] -= 1;
        }
    }
    return true;
}

console.log(sameFrequency(221, 222));
