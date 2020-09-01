// Various arrays for potential characters
    var lowers = 'abcdefghijklmnopqrstuvwxyz';
    var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var special = '!@#$%^&*(){}[]|?.<>,/-=_+~`';

// Set default character to empty
    var charSet = "";

// Set default password to empty — my function will fill it in later
    var password = "";

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
    while (true) {
        if (lowersPrompt === true){
            charSet += lowers;
        }
        if (uppersPrompt === true){
            charSet += uppers;
        }
        if (numbersPrompt === true){
            charSet += numbers;
        }
        if (specialPrompt === true){
            charSet += special;
        }
        break;
    };
    console.log(masterPasswordGenerator(pwLength, charSet));

    // Master generator function
    function masterPasswordGenerator(pwLength, charSet) {
        for (i = 0; i < pwLength; i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        return password;
    };
    console.log(password);
    document.getElementById("pwResult").innerHTML += password;
    // document.getElementById("mainHeading").innerHTML = "Pa$$woRd G3n3rat0r";

}); 





// —————————————————————————————————————————— //
// —————————————————————————————————————————— //
// —————————————————————————————————————————— //
// —————————————————————————————————————————— //



// OLD Foundational Functions

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


// FOR USE LATER:
// var starWars = ["Luk3", "Skyw@Lk3r", "H@n", "S0l0", "L3ia", "J3d!", "$!th", "R3y", "Kyl*", "D*7th", "V*d3r", "Y*d@", "$!d!ous"];