function isPalindrome(x) {

  if (x<10) {
    return false;
  } else {
    let i = 0,
    j = a.length - 1;

  while (i < j) {
    if (a[i] !== a[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
  }
}

console.log(isPalindrome(2));
