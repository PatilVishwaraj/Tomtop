// Function to Create New User
if (localStorage.getItem("tomtopUser") === null) {
    localStorage.setItem("tomtopUser", JSON.stringify([]));
}

let gettingUser = localStorage.getItem("tomtopUser");
let user = JSON.parse(gettingUser);

function tomtopUser(event) {
    event.preventDefault();

    let email = document.getElementById("CreateAccountEmail").value;
    let fname = document.getElementById("CreateAccountFirstName").value;
    let lname = document.getElementById("Creat_LastName").value;
    let pass = document.getElementById("Creat_Password").value;

    if (email.length === 0 || fname.length === 0 || lname.length === 0 || pass.length === 0) {
        alert("Fill all the detail!");
    } else {
        if (user.length === 0) {
            

            user.push({ email: email, fname: fname, lname: lname, password: pass });

            let addData = JSON.stringify(user);
            localStorage.setItem("tomtopUser", addData);
        } else {
            let receiveData = localStorage.getItem("tomtopUser");
            let users = JSON.parse(receiveData);
            let check = 0;
            for (let i = 0; i < users.length; i++) {
                if (Object.values(users[i])[0] === email) {
                    check++;
                }
            }
            if (check > 0) {
                alert("User already exist. Please Login!");
            } else {
                user.push({ email: email, fname: fname, lname: lname, password: pass });
                let addData = JSON.stringify(user);
                localStorage.setItem("tomtopUser", addData);
            }
        }
    }
    document.getElementById("CreateAccountEmail").value = null;
    document.getElementById("CreateAccountFirstName").value = null;
    document.getElementById("Creat_LastName").value = null;
    document.getElementById("Creat_Password").value = null;
}

// Function for Mail Subscription in Footer
function mailSent() {
    let email = document.getElementById("email").value;

    if (email != null) {
        setTimeout(function () {
            alert("Subscribed, you will receive daily tips on mail!");
            document.getElementById("email").value = null;
        }, 3000);
    }
}

// Function for User Login
function loginUser(event) {
    event.preventDefault();

    let mail = document.getElementById("Email").value;
    let pass = document.getElementById("Password").value;

    let accessData = localStorage.getItem("tomtopUser");
    let user = JSON.parse(accessData);

    let count = 0;
    for (let i = 0; i < user.length; i++) {
        if (Object.values(user[i])[0] === mail && Object.values(user[i])[3] === pass) {
            count++;
        }
    }

    if (count === 1) {
        window.location.href = "index.html";
    } else {
        alert("Invalid Credentials!")
    }

    document.getElementById("Email").value = null;
    document.getElementById("Password").value = null;
}

// For Recover Password

function recoverPassword(event) {
    event.preventDefault();

    let email = document.getElementById("Email_recover").value;

    let accessing = localStorage.getItem("tomtopUser");
    let convert = JSON.parse(accessing);

    let passCount = 0;
    for (let i = 0; i < convert.length; i++) {
        if (Object.values(convert[i])[0] === email) {
            setTimeout(function () {
                alert("Password recovery link has been sent to your E-mail!");
            }, 2000);
            break;
        } else if (Object.values(convert[i])[0] !== email) {
            passCount++;
        }
    }
    if (passCount === convert.length) {
        setTimeout(function () {
            alert("You are not a user. Create a new account!");
            window.location.href = "create_one.html";
        }, 2000);
    }
}

function nextPage(event) {
    event.preventDefault();
    let email = document.getElementById("Email").value.trim();
    let fname = document.getElementById("Payment_username").value.trim();
    let lname = document.getElementById("Payment_lastname").value.trim();
    let add1 = document.getElementById("Payment_address").value.trim();

    if (email.length < 1 || fname.length < 1 || lname.length < 1 || add1.length < 1) {
        alert("Enter Valid Details!");
    } else {
        window.location.href = "payment_2.html";
    }   
}

// JS for Last PAyment Page

function payMoney(event) {
    event.preventDefault();

    let cardNo = document.getElementById("cardno").value;
    let cardName = document.getElementById("cardname").value.trim();
    let exp = document.getElementById("expiry").value;
    let code = document.getElementById("code").value;

    if (cardNo.length === 16 && cardName.length > 0 && exp.length > 3 && code.length >= 4) {
        localStorage.removeItem("tomtopCart")

        setTimeout(function () {
            alert("Paymet Successful!");
            window.location.href = "index.html";
        }, 2000);
    } else {
        alert("Invalid Details!")
    }
}