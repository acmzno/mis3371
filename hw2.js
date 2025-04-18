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

// Range slider value display
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

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

// Address validation
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

// Zip code validation
function validateZcode() {
    const zipInput = document.getElementById("zcode");
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
    const emailerror = document.getElementById("email-error");
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email || !emailR.test(email)) {
        emailerror.innerHTML = "Please enter a valid email address";
        return false;
    } else {
        emailerror.innerHTML = "";
        return true;
    }
}

// Phone validation
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const error = document.getElementById("phone-error");
    const phoneR = /^\d{3}-\d{3}-\d{4}$/;

    if (!phone) {
        error.innerHTML = "Phone number cannot be left blank.";
        return false;
    } else if (!phoneR.test(phone)) {
        error.innerHTML = "Enter a valid phone number in the format 000-000-0000.";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

// Phone format helper
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
function validatePassword() {
    const pword = document.getElementById("password").value;
    const uid = document.getElementById("uid").value;
    const error = document.getElementById("password-error");
    const errorMessage = [];

    if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
    if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
    if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
    if (!pword.match(/[!@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
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
    const pword1 = document.getElementById("pword").value;
    const pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = "Passwords match";
        return true;
    }
}

// Review input
function reviewInput() {
    const formcontent = document.getElementById("signup");
    let formoutput = "<table class='output'><th colspan='3'> Review Your Information:</th>";

    for (let i = 0; i < formcontent.length; i++) {
        const el = formcontent.elements[i];
        if (el.value !== "") {
            switch (el.type) {
                case "checkbox":
                    if (el.checked) {
                        formoutput += `<tr><td align='right'>${el.name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (el.checked) {
                        formoutput += `<tr><td align='right'>${el.name}</td><td>${el.value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${el.name}</td><td>${el.value}</td></tr>`;
            }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

// Clear review
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}


