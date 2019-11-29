class Searching {
  linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
      if (key === arr[i]) {
        return i;
      }
    }
    return -1;
  }

  binarySearch(arr, key) {
    if (!arr) {
      return -1;
    }
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (key === arr[mid]) {
        return mid;
      } else if (key < arr[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return -1;
  }

  indexOfSubString(str, subStr) {
    if (subStr.length > str) {
      return false;
    }
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === subStr[j]) {
        j++;
        if (j == subStr.length) {
          return i - subStr.length + 1;
        }
      } else {
        j = 0;
      }
    }
    return -1;
  }
}

let searching = new Searching();
console.log("linearSearch:", searching.linearSearch([3, 1, 5], 2));
console.log("binarySearch: ", searching.binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log("indexOfSubString: ", searching.indexOfSubString("gopal", "pal"));
