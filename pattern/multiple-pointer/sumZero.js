// naive(time complexity O(n^2))
// function findSumZeroPair(arr) {
//     let pairs;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 pairs.push(arr[i], arr[j]);
//             }
//         }
//     }
//     return pairs;
// }

// with multiple pointer time complexity O(n)
function findSumZeroPair(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}

let arr = [-3, -2, -1, 0, 1, 2, 5];

console.log(findSumZeroPair(arr));
