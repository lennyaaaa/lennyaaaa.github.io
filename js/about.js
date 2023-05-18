let aboutText = document.querySelector(".aboutText");
let btnContinue = document.querySelector(".btnContinue");
let buttonTopic = document.querySelector(".buttonTopic");

btnContinue.addEventListener("click", hideFunction);

function hideFunction() {
    aboutText.classList.add("hide");
    console.log("btnContinue clicked");
    buttonTopic.classList.remove("hide");
};
