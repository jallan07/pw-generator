
// Variables for storing potential characters
    // A variable for storing potential lowercase letters
        var lowers = 'abcdefghijklmnopqrstuvwxyz';
    // A variable for storing potential uppercase letters
        var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // A variable for storing potential numbers
        var numbers = '0123456789';
    // A variable for storing special characters
        var special = '!@#$%^&*(){}[]|?.<>,/-=_+~`';

// Give our charSet an initial character set of lowers so that it has at least some characters to work with
        var charSet = lowers;

// Event listener for the "Create Password" button
        runCriteria.addEventListener("click", function(){

    // Check to make sure the pwLength variable is set properly
            while(true) {
                var pwLength = prompt("How many characters do you want your password to be?");
                // Set the pwLength variable to a number instead of a string
                var pwLength = +pwLength;
                // Run if statements to make sure the length fits in the project scope criteria
                if (pwLength < 8){
                    alert("Passwords must be at least 8 characters in length.");
                } 
                else if (pwLength > 128) {
                    alert("Passwords must be no more than 128 characters in length.");
                }
                else {
                    break;
                }
            };

        // Create the variables for the other pieces of criteria
            var lowersPrompt = confirm("Click OK if you would like to include lowercase letters, and CANCEL if not.");
            var uppersPrompt = confirm("Click OK if you would like to include uppercase letters, and CANCEL if not.");
            var numbersPrompt = confirm("Click OK if you would like to include numbers, and CANCEL if not.");
            var specialPrompt = confirm("Click OK if you would like to include special characters, and CANCEL if not.");

        // Adjust charSet based on the criteria requested by the user
            // if they would like to include 
            if (uppersPrompt === true && numbersPrompt === true && specialPrompt === true) {
                charSet += uppers;
                charSet += numbers;
                charSet += special;
                console.log(charSet);
                return charSet;
            }
            else if (uppersPrompt === true && numbersPrompt === true && specialPrompt !== true) {
                charSet += uppers;
                charSet += numbers;
                console.log(charSet);
                return charSet;
            }
            else if (uppersPrompt === true && numbersPrompt !== true && specialPrompt === true) {
                charSet += uppers;
                charSet += special;
                console.log(charSet);
                return charSet;
            }
            else if (uppersPrompt === true && numbersPrompt !== true && specialPrompt !== true) {
                charSet += uppers;
                console.log(charSet);
                return charSet;
            }
            else if (uppersPrompt !== true && numbersPrompt === true && specialPrompt === true) {
                charSet += numbers;
                charSet += special;
                console.log(charSet);
                return charSet;
            }
            else if (uppersPrompt !== true && numbersPrompt === true && specialPrompt !== true) {
                charSet += numbers;
                console.log(charSet);
                return charSet;
            }
            else if (uppersPrompt !== true && numbersPrompt !== true && specialPrompt === true) {
                charSet += special;
                console.log(charSet);
                return charSet;
            }
            else {
                return charSet;
            }
        }); 

// Master generator function
            function masterPasswordGenerator(pwLength, charSet) {
                var password = "";
                for (i = 0; i < pwLength; i++) {
                    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
                }
                return password;
            };




// // Functions for selecting random characters from the above arrays
//         // Generates a random number
//             function getRandomNumber() {
//                 return numbers[Math.floor(Math.random() * numbers.length)];
//             }
//         // Generates a random LOWER case letter
//             function getRandomLower(){
//                 return letters[Math.floor(Math.random() * letters.length)].toLowerCase();
//             }
//         // Generate a random upper case letter
//             function getRandomUpper(){
//                 return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
//             }
//         // Generate a random special character
//             function getRandomSpecial() {
//                 return special[Math.floor(Math.random() * special.length)];
//             }
//         // Generate a random star wars phrase
//             function getRandomSW() {
//                 return starWars[Math.floor(Math.random() * starWars.length)];
//             }