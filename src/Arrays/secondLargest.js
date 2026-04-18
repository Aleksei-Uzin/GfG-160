/**
 * Returns the second largest element in an array of positive integer
 *
 * @param {number[]} arr - Array of positive integers
 * @returns {number} The second largest element, or -1 if it doesn't exist
 *
 * @complexity Time: O(n) - single pass through the array
 * @complexity Auxiliary Space: O(1) - the extra space does not change
 */
function _getSecondLargest(arr) {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
