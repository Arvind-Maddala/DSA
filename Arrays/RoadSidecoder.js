// Q1. Second largest Number

function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

//Q2. Rotate array by K;
//Given an integer array nums, rotate the array to the right by k steps

//input: nums = [1,2,3,4,5,6,7], k = 3; ---> output: [5,6,7,1,2,3,4]
//input: nums = [-1,-100,3,99], k = 2; ---> output: [3,99,-1,-100]

function rotateByK(nums, k) {
  let size = nums.length;

  if (k > size) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}

console.log(rotateByK([1, 2, 3, 4, 5, 6, 7], 3));
