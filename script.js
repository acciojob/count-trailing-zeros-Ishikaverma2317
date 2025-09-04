function trailingZeros(n) {
  n = parseInt(n); // input ko number me convert karna
  let count = 0;
  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
