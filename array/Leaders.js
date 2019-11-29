// Write a program to print all the LEADERS in the array.
// An element is leader if it is greater than all the elements to its right side.
// And the rightmost element is always a leader. For example int the array
// {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2.

function getLeaders(arr) {
  let currentMax = Number.MIN_VALUE;
  let i = arr.length - 1;
  let leaders = [];

  while (i >= 0) {
    if (arr[i] > currentMax) {
      leaders.push(arr[i]);
      currentMax = arr[i];
    }
    i--;
  }
  return leaders;
}

const arr = [16, 17, 4, 3, 5, 2];
console.log("Leaders: ", getLeaders(arr));
