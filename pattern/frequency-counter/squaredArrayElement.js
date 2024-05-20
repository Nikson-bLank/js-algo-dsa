function checkForSquaredArray(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    //to keep the count of elements
    let frequencyCount1 = {};
    let frequencyCount2 = {};

    for (let i = 0; i < arr1.length; i++) {
        // if present we add 1 to current value
        //else we initialize it to 1
        if (frequencyCount1[arr1[i]]) {
            frequencyCount1[arr1[i]] += 1;
        } else {
            frequencyCount1[arr1[i]] = 1;
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (frequencyCount2[arr2[j]]) {
            frequencyCount2[arr2[j]] += 1;
        } else {
            frequencyCount2[arr2[j]] = 1;
        }
    }

    // we loop through first frequencyCount1 object
    for (let key in frequencyCount1) {
        let squaredValue = key * key;
        // check if the key which squared and value is same or present
        if (!(squaredValue in frequencyCount2)) return false;
        if (frequencyCount2[squaredValue] !== frequencyCount1[key])
            return false;
    }
    return true;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [4, 1, 9, 16];

console.log(checkForSquaredArray(arr1, arr2));
