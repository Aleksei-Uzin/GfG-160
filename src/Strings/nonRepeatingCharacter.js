// Given a string s consisting of lowercase English letters, return the
// first non-repeating character. If there is no non-repeating character, return '$'.

/**
 * @param {string} s - Lowercase string.
 * @returns {string} The first non-repeating character, or '$' if none exists.
 *
 * @complexity Time: O(n) - single pass through the string.
 * @complexity Auxiliary Space: O(1) - map stores at most 26 unique characters.
 */
function _nonRepeatingChar(s) {
  const map = new Map();

  for (const ch of s) {
    const mapVal = map.get(ch) || 0;
    map.set(ch, mapVal + 1);
  }

  for (const [key, val] of map) {
    if (val === 1) return key;
  }

  return '$';
}
