const fibonacci = n => {
  const sequence = [];

  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      sequence.push(i);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  if (n <= 1) {
    return sequence[0];
  }
  return sequence[n - 1];
};

console.log(fibonacci(11));
