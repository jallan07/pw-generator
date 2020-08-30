
// Arrays for storing potential characters
        // An array for storing potential numbers
            var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // An array for storing potential letters
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        // An arrat for storing special characters
            var special = '!@#$%^&*(){}[]|?.<>,/-=_+~`';

// Functions for selecting random characters from the above arrays
        // Generates a random number
            function getRandomNumber() {
                return numbers[Math.floor(Math.random() * numbers.length)];
            }
        // Generates a random LOWER case letter
            function getRandomLower(){
                return letters[Math.floor(Math.random() * letters.length)].toLowerCase();
            }
        // Generate a random upper case letter
            function getRandomUpper(){
                return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
            }
        // Generate a random special character
            function getRandomSpecial() {
                return special[Math.floor(Math.random() * special.length)];
            }

// Object that stores each of random functions
            var randomFunction = {
                upper: getRandomUpper,
                lower: getRandomLower,
                number: getRandomNumber,
                special: getRandomSpecial
            };

// Debugging logs
    console.log(getRandomNumber());
    console.log(getRandomLower());
    console.log(getRandomUpper());
    console.log(getRandomSpecial());
