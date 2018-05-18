function sumPrimes(num) {
  let isPrime = true;
  let primeSum = 2;

  for (let i = 2; i <= num; i++) {
      isPrime = true;
      if (i % 2 != 0) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            isPrime = false;
          }
        }
        if (isPrime == true) {
          primeSum += i;
        }
      }
  }

  console.log(primeSum);
    return primeSum;
  }
  
  sumPrimes(977);