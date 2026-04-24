// Given an array arr[] of non-negative integers, move all zeros to the
// right end while maintaining the relative order of non-zero elements.
// The operation must be performed in place.

/**
 * @param {number[]} arr - Array of non-negative integers
 * @returns {void}
 *
 * @complexity Time: O(n) - single pass through the array
 * @complexity Auxiliary Space: O(1)
 */
function _pushZerosToEndOneTraversal(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count += 1;
    }
  }
}

/**
 * @param {number[]} arr - Array of non-negative integers
 * @returns {void}
 *
 * @complexity Time: O(n) - two passes through the array
 * @complexity Auxiliary Space: O(1)
 *
 * @example
 * arr = [1, 2, 0, 4, 3, 0, 5, 0]
 *
 * | Step | i | arr[i] | count | arr                      |
 * |------|---|--------|-------|--------------------------|
 * | -    | - | -      | 0     | [1, 2, 0, 4, 3, 0, 5, 0] |
 * | 1    | 0 | 1      | 1     | [1, 2, 0, 4, 3, 0, 5, 0] |
 * | 2    | 1 | 2      | 2     | [1, 2, 0, 4, 3, 0, 5, 0] |
 * | 3    | 2 | 0      | 2     | [1, 2, 0, 4, 3, 0, 5, 0] |
 * | 4    | 3 | 4      | 3     | [1, 2, 4, 4, 3, 0, 5, 0] |
 * | 5    | 4 | 3      | 4     | [1, 2, 4, 3, 3, 0, 5, 0] |
 * | 6    | 5 | 0      | 4     | [1, 2, 4, 3, 3, 0, 5, 0] |
 * | 7    | 6 | 5      | 5     | [1, 2, 4, 3, 5, 0, 5, 0] |
 * | 8    | 7 | 0      | 5     | [1, 2, 4, 3, 5, 0, 5, 0] |
 * | fill | - | -      | -     | [1, 2, 4, 3, 5, 0, 0, 0] |
 */
function _pushZerosToEndTwoTraversals(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count += 1;
    }
  }

  while (count < arr.length) {
    arr[count] = 0;
    count += 1;
  }
}

/**
 * @param {number[]} arr - Array of non-negative integers
 * @returns {void}
 *
 * @complexity Time: O(n) - two passes through the array
 * @complexity Auxiliary Space: O(n)
 */
function _pushZerosToEndTempArr(arr) {
  const len = arr.length;
  const temp = Array.from({ length: len }, () => 0);
  let ind = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] !== 0) {
      temp[ind] = arr[i];
      ind += 1;
    }
  }

  temp.forEach((n, j) => (arr[j] = n));
}
