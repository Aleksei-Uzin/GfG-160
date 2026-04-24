// Given an array of integers arr[], reverse the array in place

/**
 * @param {number[]} arr - Array of integers
 * @returns {void}
 *
 * @complexity Time: O(n) - single pass through half the array
 * @complexity Auxiliary Space: O(1)
 */
function _reverseArraySinglePointer(arr) {
  const len = arr.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    [arr[i], arr[len - i - 1]] = [arr[len - i - 1], arr[i]];
  }
}

/**
 * @param {number[]} arr - Array of integers
 * @returns {void}
 *
 * @complexity Time: O(n) - single pass through the array
 * @complexity Auxiliary Space: O(1)
 */
function _reverseArrayTwoPointers(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
