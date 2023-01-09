// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Constraints:

//     1 <= s.length <= 15
//     s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//     It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// Example 1:

// Input:
var s1 = "III";
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input:
var s2 = "LVIII";
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input:
var s3 = "MCMXCIV";
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let output = 0;
    const romanNumerals = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};

    for (let i=0;i<s.length;i++){
        if(i+1<s.length && romanNumerals[s.charAt(i)]<romanNumerals[s.charAt(i+1)]){
            output += romanNumerals[s.charAt(i+1)] - romanNumerals[s.charAt(i)];
            i++;
        } else {
            output += romanNumerals[s.charAt(i)];
        }
    }

    return output;
};

console.log("-----s1-----");
console.log(romanToInt(s1));
console.log("------------");
console.log("-----s2-----");
console.log(romanToInt(s2));
console.log("------------");
console.log("-----s3-----");
console.log(romanToInt(s3));
console.log("------------");