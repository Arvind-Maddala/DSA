//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern
function areThereDuplicates1(...args) {
  //frequency counter approach

  let obj = {};
  for (let val of args) {
    obj[val] ? (obj[val] = obj[val] + 1) : (obj[val] = 1);
  }
  for (let i = 0; i < args.length; i++) {
    if (obj[args[i]] > 1) {
      return true;
    }
  }
  return false;
}
// areThereDuplicates("a", "b", "c", "a");

function areThereDuplicates2(...args) {
  //multiple pointer approach
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(arr, n) {
  if (arr.length === 0) {
    console.log(false);
  }

  let start = 0;
  let last = arr.length - 1;

  while (start < last) {
    if ((arr[start] + arr[last]) / 2 === n) {
      console.log(true);
    } else if ((arr[start] + arr[last]) / 2 < n) {
      start++;
    } else if ((arr[start] + arr[last]) / 2 > n) {
      last--;
    }
  }
  console.log(false);
}

//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) return true;
    j++;
  }
  return false;

  isSubsequence("sing", "sting");
}

//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
//sliding window
function maxSubarraySum(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring(str) {
  var i = 0;
  var j = 0;
  while (j < str.length) {
    if (str[j] === str[i]) {
      i++;
      str[i] = str[j];
    }
    j++;
  }
  console.log(i + 1);
}

findLongestSubstring("thisisawesome"); // 6

//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
function minSubArrayLen(nums, sum) { //leetcode - 209
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

//minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52