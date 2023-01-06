// Given an integer X, return true if X is a Palindrome, and false otherwise.

// Example 1:

// Input:
var num1 = 121;
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input:
var num2 = -121;
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input:
var num3 = 10;
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:

// Input:
var num4 = 547868745;
// Output: true
// Explanation: Reads the same from left to right and right to left.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (num) {
    if (num < 0) return false;

    var tmp = 0,x =0, y=0;

    y = num;

    while(num>0){
        x=num%10;
        // console.log(x);
        num=parseInt(num/10);
        // console.log(num);
        tmp=tmp*10+x;
        // console.log(tmp);
    }

    if(tmp==y){
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(num1));
console.log(isPalindrome(num2));
console.log(isPalindrome(num3));
console.log(isPalindrome(num4));