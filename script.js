function handleInput(event) {
    if (event.keyCode === 13) { // Check if the Enter key is pressed
        var input = document.getElementById("username").value.trim();
        if (input !== "") {
            clearTerminal();
            displayWelcomeMessage(input);
            displayTypeBelowMessage();
        }
    }
}

function clearTerminal() {
    document.getElementById("terminalBody").innerHTML = "";
}

function displayWelcomeMessage(username) {
    var welcomeMessage = document.createElement("div");
    welcomeMessage.innerHTML = "<div class='command-output'>Welcome, " + username + "!</div>" +
                                "<div class='command-output'>What would you like to see? Contact, Projects, About Me</div>";
    document.getElementById("terminalBody").appendChild(welcomeMessage);
}

function displayTypeBelowMessage() {
    var typeMessage = document.createElement("div");
    typeMessage.innerHTML = "<div class='command-output'>Type below: </div>";
    document.getElementById("terminalBody").appendChild(typeMessage);

    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "userInput";
    inputField.onkeydown = handleCategoryInput;
    document.getElementById("terminalBody").appendChild(inputField);
}

function handleCategoryInput(event) {
    if (event.keyCode === 13) { // Check if the Enter key is pressed
        var category = document.getElementById("userInput").value.trim();
        if (category !== "") {
            handleCategory(category.toLowerCase());
        }
    }
}

function handleCategory(category) {
    switch (category) {
        case "contact":
            window.location.href = "/pages/contact.html";
            break;
        case "projects":
            window.location.href = "/pages/projects.html";
            break;
        case "about me":
            window.location.href = "/pages/about.html";
            break;
        default:
            displayErrorMessage(category);
            break;
    }
}

function displayErrorMessage(input) {
    var errorMessage = document.createElement("div");
    errorMessage.innerHTML = "<div class='command-output'>No '" + input + "' category found. Please try again.</div>";
    document.getElementById("terminalBody").appendChild(errorMessage);
}
