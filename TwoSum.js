const twoSum = (array, target) => {
    const hashtable = {};
    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i];

        if (hashtable.hasOwnProperty(complement)) {
            return [hashtable[complement], i]
        }

        hashtable[array[i]] = i;
    };

    return null;
}
const arr1 = [3, 4, 5, 6, 7];
const target1 = 8;
// should return, [0,2] > 3 + 5 = 8
const arr2 = [34, 23, 35, 24, 2, 7, 11]
const target2 = 47;
// should return, [1, 3]
const arr3 = [7, 7]
const target3 = 14;
// should return [0,1]

console.log(" ----------------- ");
console.log(" test case one ")
console.log(twoSum(arr1, target1));
console.log(" ----------------- ");
console.log(" test case two ")
console.log(twoSum(arr2, target2));
console.log(" ----------------- ");
console.log(" test case three ")
console.log(twoSum(arr3, target3));