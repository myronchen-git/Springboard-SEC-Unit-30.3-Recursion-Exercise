/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length < 2) return true;

  if (str.at(0) === str.at(-1)) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;

  if (arr[0] === val) {
    return 0;
  } else {
    const index = findIndex(arr.slice(1), val);

    return index < 0 ? -1 : 1 + index;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return '';
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strings = [];

  function _gatherStrings(obj, strings) {
    for (const v of Object.values(obj)) {
      if (typeof v === 'object') {
        _gatherStrings(v, strings);
      } else if (typeof v === 'string') {
        strings.push(v);
      }
    }
  }

  _gatherStrings(obj, strings);

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function _binarySearch(arr, val, start, end) {
    const len = end - start;

    if (len === 0) {
      return -1;
    } else if (len === 1) {
      return arr[start] === val ? start : -1;
    }

    const mid = Math.floor(len / 2) + start;

    if (arr[mid] === val) {
      return mid;
    } else {
      return Math.max(
        _binarySearch(arr, val, start, mid),
        _binarySearch(arr, val, mid + 1, end)
      );
    }
  }

  return _binarySearch(arr, val, 0, arr.length);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
