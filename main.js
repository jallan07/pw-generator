
// Arrays for storing potential characters
        // An array for storing potential numbers
            var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // An array for storing potential letters
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        // An array for storing special characters
            var special = '!@#$%^&*(){}[]|?.<>,/-=_+~`';
        // An array for storing Star Wars phrases
            var starWars = ["D@rth", "V@d3r", "S!d!ous", "L3!a", "Kyl*", "R3y", "!uk3", "H@n", "(hew!3", "Y0d@", "K2$O", "Ar2", "Dee2", "R2D2", "P@!pat!n3", "()rg@na", "S*!*", "Ahs*k@", "T@n*", "J3d!", "$!th", "Windu", "Ezr@", "Br!dg3R", "M!ll3nium", "FaLc0n"]

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

// Star Wars function
            function starWarsFunc() {
                if (sw-toggle === true) {}
            }


// Debugging logs
    console.log(getRandomNumber());
    console.log(getRandomLower());
    console.log(getRandomUpper());
    console.log(getRandomSpecial());

