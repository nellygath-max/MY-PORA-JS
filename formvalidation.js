

//   STEP 3 This is for Global Variables. Ii's very hard to debug.
// const form = document.getElementById("validateForm");   // ------ We find the form in the HTML and save it in a box called form.

const submittedRecords = [];  // ------We will use this later to remember who has already submitted the form, so we can block duplicates.


        //   STEP 4
// Lines 1-4: We run individual checks for every single input. 
// If any of them fail, we change isValid to false. At the very end, we report back. 
// If it's false, the main engine (above) stops the form.
  
function validatefname() {
    const fname = document.getElementById("name").value.trim();
    const errorSpan = document.getElementById("nameError");

    // Lines 1-5: If the name box is completely empty (""), 
    // inject the red text "Full name is required" into the HTML, 
    // and report false (failed). If it's not empty, report true (passed).
    if (fname === "") {
        errorSpan.textContent = "Full name is required.";
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const errorSpan = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (email === "") {
        errorSpan.textContent = "Email is required.";
        return false;
    } else if (!emailRegex.test(email)) {
        errorSpan.textContent = "Please enter a valid email address.";
        return false;
    }
    return true;
}

function validatePhone() {
    const phone = document.getElementById("tel").value.trim();
    const errorSpan = document.getElementById("phoneError");
    // Regex for typical phone numbers (allows +, -, spaces, and 10-15 digits)
    const phoneRegex = /^[\d\s\-\+]{10,15}$/;
    if (phone === "") {
        errorSpan.textContent = "Phone number is required.";
        return false;
    } else if (!phoneRegex.test(phone)) {
        errorSpan.textContent = "Please enter a valid phone number.";
        return false;
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const errorSpan = document.getElementById("passwordError");
    if (password === "") {
        errorSpan.textContent = "Password is required.";
        return false;
    } else if (password.length < 6) {
        errorSpan.textContent = "Password must be at least 6 characters long.";
        return false;
    }
    return true;
}

function validateMessage() {
    const message = document.getElementById("message").value.trim();
    const errorSpan = document.getElementById("messageError");
    if (message === "") {
        errorSpan.textContent = "Message is required.";
        return false;
    } else if (message.length < 10) {
        errorSpan.textContent = "Message must be at least 10 characters long.";
        return false;
    }
    return true;
}


     //   STEP 5
// Clear all error messages before validating
function clearErrors() {
    document.querySelectorAll('.error').forEach(span => span.textContent = '');
}



   
      //   STEP 6
// How the Master Validator Works: (This is the checklist we asked about in Step 3).
// When this runs, it first runs clearErrors() to wipe away any old red text on the screen. 
// Then, we assume the form is true (good).


function validateForm() {
    clearErrors();
    let isValid = true;

    // Lines 1-4: We run individual checks for every single input. 
    // If any of them fail, we change isValid to false. 
    // At the very end, we report back. If it's false, 
    // the main engine (above) stops the form.
    // Use single bitwise AND or just run all to ensure all errors show up at once
    if (!validatefname()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateMessage()) isValid = false;

    return isValid;
}

//   STEP 7
function isDuplicateSubmission(name, email, phone) {
    return submittedRecords.some(record =>
        record.name === name && record.email === email && record.phone === phone
    );
}


//   STEP 8
document.getElementById("validateForm").addEventListener("submit", function(event) {   // -----We attach an "alarm system" to the form. It sits silently until the user clicks the Submit button.
// form.addEventListener("submit", function(event) { --- This is the same as the line above, but it uses the variable form that we defined at the very top in line 4. It's cleaner, but it can be harder to debug if you accidentally mess up the variable name. The line above is more direct and less prone to that kind of error.   
    event.preventDefault(); // Prevent native submission/Stops the page from reloading/// This pauses the submission!

    if (!validateForm()) {  //  ---If validation fails, do not proceed with submission. By default, an HTML form will refresh the page the second you click submit. We don't want that! We want to check the data first.
        return;            // (The ! means fail/false). If it failed, we hit return;, which cancels the submission completely. If it passed, the code skips this and moves downward.
    }

// If it's a brand new person, we push (save) their details into our list. 
// We show a success alert, and then form.reset() wipes the HTML form clean. (The }); closes the main engine).
  

// ------Lines 1-3: If we made it this far, the form has no errors! We grab the exact 
// text the user typed into the name, email, and phone boxes, and chop off extra spaces (trim()).
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("tel").value.trim();


// We run a quick check (which we build later) to see if these exact 
// details are already in our submittedRecords list. If they are, we show a popup alert and return (stop).
if (isDuplicateSubmission(name, email, phone)) {
        alert("This form has already been submitted. Please submit a different form.");
        return;
}


submittedRecords.push({ name, email, phone });
    alert("Form Submitted Successfully!");
    event.target.reset();
    // form.reset();  // This is the same as the line above, but it uses the variable form that we defined at the very top in line 4. It's cleaner, but it can be harder to debug if you accidentally mess up the variable name. The line above is more direct and less prone to that kind of error.   
});



  

