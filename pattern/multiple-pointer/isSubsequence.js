function isSubsequence(str1, str2) {
    let str1Index = 0;
    let str2Index = 0;

    if (!str1) return false;

    while (str2Index < str2.length) {
        if (str1[str1Index] === str2[str2Index]) str1Index++;
        if (str1Index === str1.length) return true;
        str2Index++;
    }
    return false;
}

console.log(isSubsequence("abcr", "abracadaba"));
