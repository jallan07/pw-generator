// Create the masterPasswordGenerator function
        function masterPasswordGenerator() {
    // Variables for storing potential characters
        // A variable for storing potential numbers
            var numbers = '0123456789';
        // A variable for storing potential letters
            var letters = 'abcdefghijklmnopqrstuvwxyz';
        // A variable for storing special characters
            var special = '!@#$%^&*(){}[]|?.<>,/-=_+~`';
        // A variable for storing Star Wars phrases
            var starWars = ["D@rth", "V@d3r", "S!d!ous", "L3!a", "Kyl*", "R3y", "!uk3", "H@n", "(hew!3", "Y0d@", "K2$O", "Ar2", "Dee2", "R2D2", "P@!pat!n3", "$0l0", "Ahs*k@", "T@n*", "J3d!", "$!th", "M!ll3nium", "FaLc0n", "An@k!n", "FN-2187"]


        }

// A variable for storing the returned password
            var returnedPW = document.getElementById("pw-result");

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
        // Generate a random star wars phrase
            function getRandomSW() {
                return starWars[Math.floor(Math.random() * starWars.length)];
            }

// Object that stores each of random functions
            var randomFunction = {
                upper: getRandomUpper,
                lower: getRandomLower,
                number: getRandomNumber,
                special: getRandomSpecial
            };

// An object that stores the various prompts for pw criteria
            // var criteriaPrompts = {
            //     pwLength: prompt("How many characters should your password be?"),
            //     pwNumbers: confirm("Click OK if you would like to include numbers, and CANCEL if not."),
            //     pwSymbols: confirm("Click OK if you would like to include special characters, and CANCEL if not.")
            // };

// Use a function to run the prompts once the button is clicked

            


// Debugging logs
    console.log(getRandomNumber());
    console.log(getRandomLower());
    console.log(getRandomUpper());
    console.log(getRandomSpecial());
    console.log(getRandomSW());
    // console.log("pwLength: " + criteriaPrompts.pwLength);
    // console.log("pwNumbers: " + criteriaPrompts.pwNumbers);
    // console.log("pwSymbols: " + criteriaPrompts.pwSymbols);

