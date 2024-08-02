// const colorPairs = [
// 	{ background: "#FFB3BA", text: "#FFDFBA" },
// ];

const colorPairs = [
	{ background: "#FFDFBA", text: "#FFB3BA" },
	{ background: "#bae9ff", text: "#f9f9fb" },
	{ background: "#c1afe4", text: "#fdfd96" },
	{ background: "#fdfd96", text: "#fbc740" },
	{ background: "#ffd1dc", text: "#fcfd95" },
	{ background: "#c1afe4", text: "#c5ffe5" },
	{ background: "#fdfd96", text: "#ffd1dc" },
];

let currentIndex = 0;

function changeColors() {
    const textElement = document.getElementById('coming-soon-text');
    const colorPair = colorPairs[currentIndex];

    document.body.style.backgroundColor = colorPair.background;
    textElement.style.color = colorPair.text;

    currentIndex = (currentIndex + 1) % colorPairs.length;
}

setInterval(changeColors, 1000);
