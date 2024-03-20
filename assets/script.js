const userName = localStorage.getItem("userName");
if (userName) {
	document.getElementById("user").innerHTML = userName;
} else {
	document.getElementById("user").innerHTML = "anonymous";
}

// Generate the date and time that is seen on the heading
// Update the date every second
setInterval(function () {
	document.getElementById("current_date").innerHTML = new Date();
}, 1000);

// Ensures that the user can see where the input field is
window.onload = function () {
	document.getElementById("command").focus();
};
// even when the whole html body is clicked
document.getElementById("body").addEventListener("click", function () {
	document.getElementById("command").focus();
});

function updateTimeCounter() {
	// Get current time
	let currentTime = new Date();
	// Get the stored start time from local storage
	let storedStartTime = sessionStorage.getItem("startTime");
	// If start time is not stored, set it to the current time
	if (!storedStartTime) {
		storedStartTime = currentTime;
		sessionStorage.setItem("startTime", storedStartTime);
	} else {
		// Convert stored start time from string to Date object
		storedStartTime = new Date(storedStartTime);
	}
	// Calculate the time difference between current time and the stored start time
	let timeDiff = currentTime - storedStartTime;
	// Calculate seconds, minutes, and hours
	let seconds = Math.floor((timeDiff / 1000) % 60);
	let minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
	let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
	// Format the time counter
	let timeCounter = `${hours.toString().padStart(2, "0")}:${minutes
		.toString()
		.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	// Display the time counter
	counterElement.textContent = `Time on site: ${timeCounter}`;
}
// Get the element where the counter will be displayed
let counterElement = document.getElementById("counter");
// Call updateTimeCounter function initially to display the time on site
updateTimeCounter();
// Update the time counter every second
setInterval(updateTimeCounter, 1000);

// get user input
const command = document.getElementById("command");
// Add event listener to the input field
command.addEventListener("keydown", function (event) {
	// Check if the key pressed is the Enter key (key code 13)
	if (event.key === "Enter") {
		const cmd = command.value;
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

			default:
				break;
		}
		// Show an alert with the content of the input
		// alert(command.value);
	}
});
