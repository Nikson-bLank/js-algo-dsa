function averagePair(arr, avgNum) {
    // add whatever parameters you deem necessary - good luck!
    let arr = arguments[0];
    let avgNum = arguments[1];
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let average = (arr[start] + arr[end]) / 2;
        if (average === avgNum) {
            return true;
        } else if (average < avgNum) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 13], 8));
