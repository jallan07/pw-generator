// ———————————————————————————— //

    // Before reviewing the code, it's important to know that I DID NOT use the code template that was provided in the /develop folder for this project. It was an oversight on my part, and I was already in too deep before I realized the error. So I chose to move forward without it using the solution that I had created myself.

    // That being said, I believe you will find that all criteria for this project have been met.
    
    // Enjoy!

// ———————————————————————————— //
// ———————————————————————————— //


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

    // Sets the default character set and default password to empty.
    charSet = "";
    password = "";

    // Clears the password return area to make room for a new password each time the "create password" button is clicked
    document.getElementById("pwResult").innerHTML = "";

    // Check to make sure the pwLength variable is set properly
    while(true) {
        var pwLength = prompt("How many characters do you want your password to be?");
        // Set the pwLength variable to a number instead of a string
        var pwLength = +pwLength;
        // Run if statements to make sure the length fits in the project scope criteria
        if (pwLength < 8) { 
            // If it is too short, an alert will be triggered
            alert("Passwords must be at least 8 characters in length.");
        } 
        else if (pwLength > 128) { 
            // If it is too long, an alert will be triggered
            alert("Passwords must be no more than 128 characters in length.");
        }
        else { 
            // If the input is valid, then it will break out of the while loop and move to the next prompts regarding character set
            break;
        }
    };

    // Create the variables for the other pieces of criteria
    var lowersPrompt = confirm("Would you like LOWERCASE letters in your password? Click ok for yes, and cancel for no.");
    var uppersPrompt = confirm("Would you like UPPERCASE letters in your password? Click ok for yes, and cancel for no.");
    var numbersPrompt = confirm("Would you like NUMBERS in your password? Click ok for yes, and cancel for no.");
    var specialPrompt = confirm("Would you like SPECIAL CHARACTERS in your password? Click ok for yes, and cancel for no.");

    // Adjust charSet based on the criteria requested by the user

        // Originally, I had a long list of if/else statements written out here to determine the character set. But as I researched, I discovered the same thing was possible with fewer lines of code using a while() statement.
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

    // If character set is empty after the criteria prompts, send the user an alert
    while (true){
        if (charSet === "") {
            alert("At least one character type must be selected in order to create a password. Please try again.");
        }
        break;
    }

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

}); 


// Copy to clipboard function
    // Resource found here: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    function copyToClipboard() {
        /* Get the text field */
        var copyText = document.getElementById("pwResult");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");
    
        // —————————— //
        // Snackbar functionality to alert copied text. Resource found here: https://www.w3schools.com/howto/howto_js_snackbar.asp
        // —————————— //
        // Get the snackbar div
        var x = document.getElementById("snackbar");
        // Add the show class to div
        x.className = "show";
        //After 3 seconds, remove the show class from the snackbar div
        setTimeout(function(){
            x.className = x.className.replace("show", ""); }
            , 3000);
    };

// Function that changes the h1 tag on click of the "create password" button
    // Resource here: https://www.sitepoint.com/community/t/changing-h1-tag-when-link-is-clicked/111256
function changeMainHeading(mainHeading,newHeading){
var newHeading = document.getElementById(newHeading);

newHeading.innerHTML = mainHeading; 
};



// FOR USE LATER:
    // var starWars = ["Luk3", "Skyw@Lk3r", "H@n", "S0l0", "L3ia", "J3d!", "$!th", "R3y", "Kyl*", "D*7th", "V*d3r", "Y*d@", "$!d!ous"];