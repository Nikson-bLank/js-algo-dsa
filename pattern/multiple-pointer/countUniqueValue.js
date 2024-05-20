function countUniqueValue(arr) {
    if (arr.length === 0) return 0;
    let left = 0;
    let right = left + 1;
    let uniqueValueCount = 0;

    while (right < arr.length) {
        if (arr[left] == arr[right]) {
            right++;
        } else {
            uniqueValueCount++;
            left = right;
            right = left + 1;
        }
    }
    return uniqueValueCount;
}

let arr = [1, 1, 2, 2, 3, 4, 5, 5, 7];
countUniqueValue(arr);

// i;
// 1, 1, 2, 2, 3, 4, 5, 5, 7;
// j;
