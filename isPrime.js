
function findPrimeNumber(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= i - 1; j++) {
            if (j == 2) {
                continue;
            }
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
findPrimeNumber(10);
// findPrimeNumber(20);
// findPrimeNumber(30); 
