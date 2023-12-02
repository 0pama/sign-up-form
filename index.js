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


const root = document.documentElement;
root.className ="light"

document.querySelector('.theme').addEventListener('click', (e) => {
    let currentTheme = root.className || 'dark'; // Assume 'dark' if no class is set
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    if(newTheme === "dark"  ) {
        document.querySelector('.theme').textContent = "go light";
        document.querySelector(".side").style.background = "no-repeat url(images/darktheme.jpg)  0 0 / 100% 100%"
    } else {
        document.querySelector('.theme').textContent = "go dark";
        document.querySelector(".side").style.background = "no-repeat url(images/lighttheme.jpg)  0 0 / 100% 100%"

    }
    
});