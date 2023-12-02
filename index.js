const pass = document.querySelectorAll("input[type=password]");

pass.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        let one = pass[0].value;
        let two = pass[1].value;

        if (one === two) {
            document.querySelector(".warning-msg").style.display = "none"
            document.querySelector(".match-msg").style.display = "block"
            pass.forEach(element => element.classList.remove("warning"));
            pass.forEach(element => element.classList.add("match"));
        } else {
            document.querySelector(".warning-msg").style.display = "block"
            document.querySelector(".match-msg").style.display = "none"

            pass.forEach(element => element.classList.add("warning"));
            pass.forEach(element => element.classList.remove("match"));
        }
    });
});
