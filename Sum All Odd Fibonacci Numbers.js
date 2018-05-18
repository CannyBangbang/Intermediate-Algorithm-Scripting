function sumFibs(num) {
    var fib = 1;
    var fibOld = 0;
    var fibHolder;
    var fibCount = 1;
        
    while (fib <= num) {
        console.log("fib count:", fib)
        fibHolder = fib;
        fib = fib + fibOld;
        fibOld = fibHolder;

        if (fib % 2 != 0 && fib <= num) {
            console.log("Odd fib count:", fib)
            fibCount = fibCount + fib;
        }
    }

    console.log("answer:", fibCount);
    return fibCount;
  }
  
  sumFibs(75025);
  