// function maxSumArr(arr, subset) {
//     let arrLength = arr.length;
//     if (arrLength < subset || arrLength === 0) return null;
//     let max = -Infinity;

//     for (let i = 0; i <= arrLength - subset; i++) {
//         let storeMax = 0;
//         for (let j = 0; j < subset; j++) {
//             storeMax += arr[i + j];
//             console.log("🚀 ~ maxSumArr ~ arr[i + j]:", arr[i + j])
//             console.log("🚀 ~ maxSumArr ~ storeMax:", storeMax);
//         }

//         console.log("🚀 ~ maxSumArr ~ max:", max);
//         console.log("🚀 ~ maxSumArr ~ storeMax:", storeMax);
//         if (storeMax > max) {
//             max = storeMax;
//         }
//     }
//     return max;
// }

// with sliding window pattern time complexity O(n)
function maxSumArr(arr, subset) {
    let arrLength = arr.length;
    if (arrLength < subset || arrLength === 0) return null;
    let maxSum = 0;
    let maxStoredSum = 0;

    //store the sum of first consecutive @param subset
    for (let i = 0; i < subset; i++) {
        maxStoredSum += arr[i];
    }

    for (let i = subset; i < arrLength; i++) {
        //calculate the sum of the current subarray by subtracting the first element of the previous subarray and adding the current element.
        maxStoredSum = maxStoredSum - arr[i - subset] + arr[i];
        if (maxStoredSum > maxSum) {
            maxSum = maxStoredSum;
        }
    }
    return maxSum;
}

let arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];

console.log(maxSumArr(arr, 3));
