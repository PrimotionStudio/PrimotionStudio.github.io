const userName = localStorage.getItem("userName");
if (userName) {
	document.getElementById("user").innerHTML = userName;
} else {
	document.getElementById("user").innerHTML = "anonymous";
}
setInterval(function () {
	document.getElementById("current_date").innerHTML = new Date();
}, 1000);

window.onload = function () {
	document.getElementById("command").focus();
	document.getElementById("home").style.display = "block";
};
document.getElementById("body").addEventListener("click", function () {
	document.getElementById("command").focus();
});

function updateTimeCounter() {
	let currentTime = new Date();
	let storedStartTime = sessionStorage.getItem("startTime");
	if (!storedStartTime) {
		storedStartTime = currentTime;
		sessionStorage.setItem("startTime", storedStartTime);
	} else {
		storedStartTime = new Date(storedStartTime);
	}
	let timeDiff = currentTime - storedStartTime;
	let seconds = Math.floor((timeDiff / 1000) % 60);
	let minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
	let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
	let timeCounter = `${hours.toString().padStart(2, "0")}:${minutes
		.toString()
		.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	counterElement.textContent = `Time on site: ${timeCounter}`;
}
let counterElement = document.getElementById("counter");
updateTimeCounter();
setInterval(updateTimeCounter, 1000);

// get user input
const command = document.getElementById("command");
const linuxCommands = [
	"ls",
	"cd",
	"pwd",
	"mkdir",
	"rmdir",
	"touch",
	"rm",
	"cp",
	"mv",
	"chmod",
	"chown",
	"grep",
	"cat",
	"head",
	"tail",
	"chmod",
	"ssh",
	"sudo",
];
command.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		const cmd = command.value.toLowerCase().trim();
		if (linuxCommands.includes(cmd.split(" ")[0])) {
			alert("Ahahaha, I can't be hacked!");
		} else if (
			![
				"home",
				"about",
				"contact",
				"career",
				"login",
				"logout",
				"1",
				"2",
				"3",
				"4",
			].includes(cmd)
		) {
			alert("Awwwwn I don't know that command");
		} else {
			switch (cmd) {
				case "login":
					let name = prompt("What is your name?");
					name = name.toLowerCase().replace(/\s/g, "");
					localStorage.setItem("userName", name);
					window.location.reload();
					break;
				case "logout":
					localStorage.removeItem("userName");
					window.location.reload();
					break;
				case "1":
				case "home":
				default:
					document.getElementById("directory").innerHTML = "home";
					document.getElementById("home").style.display = "block";
					document.getElementById("about").style.display = "none";
					document.getElementById("career").style.display = "none";
					document.getElementById("contact").style.display = "none";
					break;
				case "2":
				case "about":
					document.getElementById("directory").innerHTML = "about";
					document.getElementById("home").style.display = "none";
					document.getElementById("about").style.display = "block";
					document.getElementById("career").style.display = "none";
					document.getElementById("contact").style.display = "none";
					break;
				case "3":
				case "career":
					document.getElementById("directory").innerHTML = "career";
					document.getElementById("home").style.display = "none";
					document.getElementById("about").style.display = "none";
					document.getElementById("career").style.display = "career";
					document.getElementById("contact").style.display = "none";
					break;
				case "4":
				case "contact":
					document.getElementById("directory").innerHTML = "contact";
					document.getElementById("home").style.display = "none";
					document.getElementById("about").style.display = "none";
					document.getElementById("career").style.display = "none";
					document.getElementById("contact").style.display = "block";
					break;
			}
		}
	}
});
