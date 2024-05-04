const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main")
const card = document.querySelectorAll(".card")


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#000";
		body.style.color = "#fff";
        main.style.background = "#000";
		main.style.color = "#fff";
        card.forEach(card => {
            card.style.background = "#bbb";
            card.style.color = "#000";
        });
        modeButton.textContent = "🔆";
    } else {
        body.style.background = "#eee";
        body.style.color = "#000";
        main.style.background = "#eee";
		main.style.color = "#000";
        card.forEach(card => {
            card.style.background = "#fff";
            card.style.color = "#000";
        });
        modeButton.textContent = "🕶️";
    }
});