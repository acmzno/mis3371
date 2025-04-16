 /*
Name: April Campuzano
Date created: 2/20/2025
Date last edited: 3/7/2025
Version: 2.0
Description: MIS 3371 Homework 2 JS 
*/

// Display today's date
const d = new Date();
document.getElementById("today").innerHTML = d.toLocaleDateString();

// Range slider display
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

// First name validation
function validateFname() {
    const fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;

    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name cannot be empty";
        return false;
    } else if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name must be at least 2 characters";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

// Last name validation
function validateLname() {
    const lname = document.getElementById("lname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name cannot be empty";
        return false;
    } else if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name must be at least 2 characters";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

// Middle initial validation
function validateMini() {
    let mini = document.getElementById("mini").value.toUpperCase();
    document.getElementById("mini").value = mini;
    const namePattern = /^[A-Z]$/;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

// DOB validation
function validateDob() {
    const dob = document.getElementById("dob");
    const date = new Date(dob.value);
    const maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// SSN validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// Address 1 validation
function validateAddress1() {
    const ad1 = document.getElementById("address1").value;

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter address";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// City validation
function validateCity() {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// Zip code validation
function validateZcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// Email validation
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailR = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!email || !emailR.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// Phone validation
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneR = /^\d{3}-\d{3}-\d{4}$/;

    if (!phone) {
        document.getElementById("phone-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    } else if (!phoneR.test(phone)) {
        document.getElementById("phone-error").innerHTML = "Enter phone number in format 000-000-0000.";
        return false;
    } else {
        document.getElementById("phone-error").innerHTML = "";
        return true;
    }
}

// Format phone input
function formatPhone() {
    let phone = document.getElementById("phone").value.replace(/\D/g, "");
    if (phone.length > 3) phone = phone.slice(0, 3) + "-" + phone.slice(3);
    if (phone.length > 6) phone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 10);
    document.getElementById("phone").value = phone;
}

// UID validation
function validateUid() {
    let uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length === 0) {
        document.getElementById("uid-error").innerHTML = "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = "User ID can't start with a number";
        return false;
    }

    const regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

// Password validation
function validatePword() {
    const pword = document.getElementById("pword").value;
    const uid = document.getElementById("uid").value;
    const error = document.getElementById("pword-error");
    const errorMessage = [];

    if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
    if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
    if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
    if (!pword.match(/[!@#$%&*\-_\\.+()]/)) errorMessage.push("Enter at least one special character");
    if (pword.includes(uid)) errorMessage.push("Password can't contain user ID");

    if (errorMessage.length > 0) {
        error.innerHTML = errorMessage.join("<br>");
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

// Confirm password match
function confirmPword() {
    const p1 = document.getElementById("pword").value;
    const p2 = document.getElementById("passconf").value;

    if (p1 !== p2) {
        document.getElementById("pword2-error").innerHTML = "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = "Passwords match";
        return true;
    }
}

// Show alert box
function showAlert() {
    const alertBox = document.getElementById("alert-box");
    const closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = () => {
        alertBox.style.display = "none";
    };
}

// Validate everything before enabling submit
function validateEverything() {
    let valid = true;

    if (!validateFname()) valid = false;
    if (!validateMini()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDob()) valid = false;
    if (!validateSsn()) valid = false;
    if (!validateAddress1()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateZcode()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateUid()) valid = false;
    if (!validatePword()) valid = false;
    if (!confirmPword()) valid = false;

    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }
}

// Review form input
function reviewInput() {
    const formcontent = document.getElementById("signup");
    let formoutput = "<table class='output'><th colspan='3'> Review Your Information:</th>";

    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

// Clear review output
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}


