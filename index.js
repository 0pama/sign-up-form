const pass = document.querySelectorAll("input[type=password]");

pass.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        let one = pass[0].value;
        let two = pass[1].value;

        if (one === two && one != "") {
            document.querySelector(".warning-msg").style.display = "none"
            document.querySelector(".match-msg").style.display = "none"
            pass.forEach(element => element.classList.remove("warning"));
            pass.forEach(element => element.classList.add("match"));
        } else {
            document.querySelector(".warning-msg").style.display = "none"
            document.querySelector(".match-msg").style.display = "none"

            pass.forEach(element => element.classList.add("warning"));
            pass.forEach(element => element.classList.remove("match"));
        }
    });

    input.addEventListener("focus", (e) => {
        let one = pass[0].value;
        let two = pass[1].value;

        if (one === two && one != "") {
            document.querySelector(".warning-msg").style.display = "none"
            document.querySelector(".match-msg").style.display = "none"
            pass.forEach(element => element.classList.remove("warning"));
            pass.forEach(element => element.classList.add("match"));
        } else {
            document.querySelector(".warning-msg").style.display = "none"
            document.querySelector(".match-msg").style.display = "none"

            pass.forEach(element => element.classList.add("warning"));
            pass.forEach(element => element.classList.remove("match"));
        }
    });


    input.addEventListener("blur", (e) => {
        let one = pass[0].value;
        let two = pass[1].value;

        if (one === two) {
            document.querySelector(".warning-msg").style.display = "none"
            document.querySelector(".match-msg").style.display = "none"
            pass.forEach(element => element.classList.remove("warning"));
            pass.forEach(element => element.classList.remove("match"));
        } else {
            document.querySelector(".warning-msg").style.display = "none"
            document.querySelector(".match-msg").style.display = "none"

            pass.forEach(element => element.classList.remove("warning"));
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
        
        document.querySelector('.photo-credit').innerHTML = '<p> Photo by <a target="_blank" href="https://www.deviantart.com/joaofred/gallery">joaofred</a> at <a target="_blank" href="https://www.deviantart.com">deviantart</a></p>';
        document.querySelector('.theme').textContent = "go light";
        document.querySelector(".side").style.background = "no-repeat url(images/darktheme.jpg)  0 0 / 100% 100%"
        
    } else {
        document.querySelector('.theme').textContent = "go dark";
        document.querySelector('.photo-credit').innerHTML = '<p> Photo by <a target="_blank" href="https://www.deviantart.com/zenart07/gallery">zenart07</a> at <a target="_blank" href="https://www.deviantart.com">deviantart</a></p>';
        document.querySelector(".side").style.background = "no-repeat url(images/lighttheme.jpg)  0 0 / 100% 100%"

    }
    
});


document.getElementById('signup-form').addEventListener('submit', function(event) {
    let one = pass[0].value;
    let two = pass[1].value;

    // Condition to prevent default submission
    if (one !== two || one === "") {
        event.preventDefault(); // Prevent default form submission
        pass.forEach(element => element.classList.add("warning"));
        setTimeout(() => {
            pass.forEach(element => element.classList.remove("warning"));
        }, 1000);        
    } else {
        console.log("Form submitted.");
    }
});