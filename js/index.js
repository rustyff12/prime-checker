// Simple function to check if a number is prime

// Declare the function

function isPrime(number) {
    // 1 is not prime, 2 is prime
    if (number < 2) {
        return console.log("Is not prime");
    }
    // Loop starts at 2
    for (let i = 2; i < number; i++) {
        if (number %i === 0) {
            return console.log("Is not prime")
        }
    
    }
    return console.log("Is PRIME!");
    
}

isPrime(4);