// Given two non-empty strings s1 and s2 consisting only of lowercase
// English letters, determine whether they are anagrams of each other.
// Two strings are anagrams if they contain the same characters with exactly
// the same frequencies, regardless of their order.

/**
 * @param {string} s1 - First lowercase string.
 * @param {string} s2 - Second lowercase string.
 * @returns {boolean} True if s1 and s2 are anagrams, false otherwise.
 *
 * @complexity Time: O(n^2) - indexOf is O(n) called for each character in s2.
 * @complexity Auxiliary Space: O(n) - map stores at most n unique characters.
 */
function _areAnagramsMap(s1, s2) {
  if (s1.length !== s2.length) return false;

  const map = new Map();

  for (const char of s1) {
    const currInd = map.get(char) || 0;
    const nextInd = s2.indexOf(char, currInd);

    if (nextInd === -1) return false;

    map.set(char, nextInd + 1);
  }

  return true;
}

/**
 * @param {string} s1 - First lowercase string.
 * @param {string} s2 - Second lowercase string.
 * @returns {boolean} True if s1 and s2 are anagrams, false otherwise.
 *
 * @complexity Time: O(n) - single pass through both strings.
 * @complexity Auxiliary Space: O(1) - fixed-size array of 26 characters.
 */
function _areAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;

  const arr = Array.from({ length: 26 }, () => 0);

  for (let i = 0; i < s1.length; i++) {
    const indA = s1[i].charCodeAt() - 97;
    const indB = s2[i].charCodeAt() - 97;
    arr[indA] += 1;
    arr[indB] -= 1;
  }

  return arr.every(n => n === 0);
}
