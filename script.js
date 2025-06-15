    document.addEventListener("DOMContentLoaded", function () {
    const inputSlider = document.getElementById("inputSlider");
    const sliderValue = document.getElementById("sliderValue");
    const passBox = document.getElementById("passBox");
    const lowercase = document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");
    const genBtn = document.getElementById("genBtn");

    sliderValue.textContent = inputSlider.value;

    inputSlider.addEventListener("input", function () {
        sliderValue.textContent = inputSlider.value;
    });

    genBtn.addEventListener("click", function () {
        passBox.value = generatePassword();
    });

    function generatePassword() {
        let genPassword = "";
        let allChars = "";

        if (lowercase.checked) {
        allChars += "abcdefghijklmnopqrstuvwxyz";
        }
        if (uppercase.checked) {
        allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (numbers.checked) {
        allChars += "0123456789";
        }
        if (symbols.checked) {
        allChars += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";
        }

        if (allChars === "") {
        allChars = "abcdefghijklmnopqrstuvwxyz";
        lowercase.checked = true;
        }

        const passwordLength = inputSlider.value;
        for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        genPassword += allChars[randomIndex];
        }

        return genPassword;
    }
    });
