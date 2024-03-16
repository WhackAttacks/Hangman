const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

let options = {
    fruits: [
        "Apple",
        "Blueberry",
        "Mandarin",
        "Pineapple",
        "Pomegranate",
        "Watermelon",
        "Banana",
        "Grapes",
        "Strawberry",
        "Kiwi",
        "Orange",
        "Mango",
        "Peach",
        "Cherry",
        "Pear",
        "Raspberry",
        "Cantaloupe",
        "Apricot",
        "Plum",
        "Lemon",
        "Coconut",
        "Fig",
        "Guava",
        "Papaya",
        "Lychee",
        "Passion Fruit",
        "Cranberry",
        "Dragonfruit",
        "Lime",
        "Avocado",
        "Blackberry",
        "Tangerine",
        "Nectarine",
        "Persimmon",
        "Grapefruit",
        "Kumquat",
        "Starfruit",
        "Honeydew",
        "Clementine",
        "Mulberry",
        "Rhubarb",
        "Boysenberry",
        "Carambola",
        "Quince",
        "Elderberry",
        "Gooseberry",
        "Cactus Pear",
        "Feijoa",
        "Jackfruit",
        "Durian"
    ],
    animals: [
        "Hedgehog",
        "Rhinoceros",
        "Squirrel",
        "Panther",
        "Walrus",
        "Zebra",
        "Giraffe",
        "Elephant",
        "Kangaroo",
        "Tiger",
        "Penguin",
        "Lion",
        "Ostrich",
        "Cheetah",
        "Koala",
        "Gorilla",
        "Panda",
        "Hippopotamus",
        "Polar Bear",
        "Sloth",
        "Cobra",
        "Alligator",
        "Camel",
        "Dolphin",
        "Frog",
        "Lizard",
        "Owl",
        "Octopus",
        "Seagull",
        "Shark",
        "Snail",
        "Turtle",
        "Antelope",
        "Armadillo",
        "Badger",
        "Bat",
        "Beaver",
        "Buffalo",
        "Chameleon",
        "Chipmunk",
        "Crocodile",
        "Duck",
        "Fox",
        "Hare",
        "Hyena",
        "Jaguar",
        "Leopard",
        "Moose",
        "Raccoon",
        "Salamander"],
    countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ],
};

let winCount = 0;
let count = 0;

let chosenWord = "";

const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");

    optionsButtons.forEach((button) => {
        button.disabled = true;
    });


    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
};


const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");

    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });


    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];

    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();


    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

    userInputSection.innerHTML = displayItem;
};

const initializer = () => {
    winCount = 0;
    count = 0;

    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";


    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");

        button.innerText = String.fromCharCode(i);

        button.addEventListener("click", () => {
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");

            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {

                    if (char === button.innerText) {

                        dashes[index].innerText = char;

                        winCount += 1;

                        if (winCount == charArray.length) {
                            resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;

                            blocker();
                        }
                    }
                });
            } else {

                count += 1;

                drawMan(count);

                if (count == 6) {
                    resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                    blocker();
                }
            }

            button.disabled = true;
        });
        letterContainer.append(button);
    }

    displayOptions();

    let { initialDrawing } = canvasCreator();

    initialDrawing();
};


const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };


    const initialDrawing = () => {

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        drawLine(10, 130, 130, 130);

        drawLine(10, 10, 10, 131);

        drawLine(10, 10, 70, 10);

        drawLine(70, 10, 70, 20);
    };

    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};


const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
};


newGameButton.addEventListener("click", initializer);
window.onload = initializer;