// Given an array arr[], rotate the array to the left (counter-clockwise)
// by d steps. Consider the array as circular. Modify the array in place.

/**
 * @param {number[]} arr - Array of integers
 * @param {number} d - Number of steps to rotate left
 * @returns {void}
 *
 * @complexity Time: O(n) - single pass through the array
 * @complexity Auxiliary Space: O(d)
 */
function _rotateArr(arr, d) {
  const len = arr.length;
  d %= len;
  const diff = len - d;
  const temp = Array.from({ length: d }, (_, i) => arr[i]);

  for (let i = 0; i < len; i++) {
    const val = i < diff ? arr[d + i] : temp[i - diff];
    arr[i] = val;
  }
}
