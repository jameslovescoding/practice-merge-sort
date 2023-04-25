// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }
  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  // Recursively sort the left half
  let left = mergeSort(arr.slice(0, mid));
  // Recursively sort the right half
  let right = mergeSort(arr.slice(mid));
  // Merge the halves together and return
  return merge(left, right);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let res = [];
  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while(indexA < arrA.length && indexB < arrB.length) {
    // Compare the first values of each array
    if (arrA[indexA] < arrB[indexB]) {
      res.push(arrA[indexA]);
      indexA++;
    } else {
      res.push(arrB[indexB]);
      indexB++;
    }
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
  }
  // Return the return array
  return res.concat(arrA.slice(indexA)).concat(arrB.slice(indexB));
}

module.exports = [merge, mergeSort];
