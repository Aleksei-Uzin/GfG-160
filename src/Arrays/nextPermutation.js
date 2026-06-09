/**
 * Given an array of integers arr representing a permutation, implement the
 * next permutation that rearranges the numbers into the lexicographically
 * next greater permutation. If no such permutation exists, rearrange the
 * numbers into the lowest possible order (i.e., sorted in ascending order).
 *
 * The permutations of [1, 2, 3] in lexicographical order are:
 *
 *   1 2 3
 *   1 3 2
 *   2 1 3
 *   2 3 1
 *   3 1 2
 *   3 2 1
 *
 * Algorithm:
 *
 * 1. Find the first decreasing element from the right. This is the "pivot".
 *    - If no such index exists (the array is in descending order) -> return the ascending sorted array.
 *
 * 2. Find the smallest "arr[i]" number larger than "arr[pivot]" to the right.
 *    - Swap arr[pivot] and arr[i].
 *
 * 3. Reverse the part of the array to the right of "pivot" index.
 * This ensures the suffix becomes the smallest possible order.
 *
 * @param {number[]} arr - Array of integers
 * @returns {void}
 *
 * @complexity Time: O(n) - one backward scan, one forward scan, one reversal
 * @complexity Auxiliary Space: O(1)
 */
function _nextPermutation(arr) {
  const len = arr.length;
  let pivotInd = len - 2;

  while (pivotInd >= 0 && arr[pivotInd] >= arr[pivotInd + 1]) {
    pivotInd -= 1;
  }

  if (pivotInd < 0) {
    arr.sort((a, b) => a - b);
    return;
  }

  let next = pivotInd + 1;

  for (let i = next; i < len; i++) {
    if (arr[i] > arr[pivotInd] && arr[i] <= arr[next]) {
      next = i;
    }
  }

  [arr[pivotInd], arr[next]] = [arr[next], arr[pivotInd]];

  for (let j = pivotInd + 1, k = len - 1; j < k; j++, k--) {
    [arr[j], arr[k]] = [arr[k], arr[j]];
  }
}
