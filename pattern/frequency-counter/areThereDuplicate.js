function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    console.log(arguments);
    if (arguments.length === 0) return false;

    let argArr = Object.values(arguments);
    console.log("🚀 ~ areThereDuplicates ~ argArr:", argArr);
    for (element of argArr) {
        console.log("element",element);
    }
    // let count = {};

    // for (let i = 0; i < arguments.length; i++) {
    //     const element = arguments[i];
    //     if (count[element]) {
    //         count[element] += 1;
    //     } else {
    //         count[element] = 1;
    //     }
    // }
    // for (key in count) {
    //     if (count[key] > 1) return true;
    // }
    // return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, "a", 1, 2));
