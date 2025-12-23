function allEqual(arr) {
  if (arr.length === 0) return true;
  const first = arr[0];
  return arr.every(str => str === first);
}

function azSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}
