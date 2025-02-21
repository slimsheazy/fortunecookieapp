const fortunes = [
    "Your future is bright, but first, a minor inconvenience.",
    "A small surprise is on its way.",
    "A familiar name is about to show up unexpectedly.",
    "The color you notice most today will be a clue.",
    "You will soon need advice from someone you don’t usually listen to.",
    "Spare no expense.",
    "A half-truth is a whole lie.",
    "Slow & steady.",
    "Curiosity killed the cat. But he has 8 more lives.",
    "What is your role in this movie?",
    "Adults grow up to be children.",
    "Eeny, meeny, miny, moe.",
    "Is it fair or is it just?",
    "An apology is in your near future.",
    "Don't let their poker face fool you.",
    "Coming in hot.",
    "You can only trust yourself in this situation.",
    "Cleanse your space.",
    "Check the moon phase.",
    "Who is in your space?",
    "Who is in charge around here?",
    "Read more into it.",
    "Make something out of everything.",
    "Dot your i's and cross your t's.",
    "The answer is in the question.",
    "You are not alone.",
    "Your guess is as good as mine.",
    "Borrow trouble if that's your nature.",
    "A door you forgot about is about to open again."
];

const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", 
    "Virgo", "Libra", "Scorpio", "Sagittarius", 
    "Capricorn", "Aquarius", "Pisces"
];

const cookie = document.getElementById("fortune-cookie");
const fortuneText = document.getElementById("fortune-text");
const luckyNumber = document.getElementById("lucky-number");
const zodiacSign = document.getElementById("zodiac-sign");
const crackSound = document.getElementById("crack-sound");

cookie.addEventListener("click", () => {
    // Play sound
    crackSound.play();

    // Change cookie to cracked image
    cookie.src = "cookie-cracked.png";

    // Generate random fortune
    fortuneText.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];

    // Generate random lucky number (1-999)
    luckyNumber.textContent = `Lucky Number: ${Math.floor(Math.random() * 999) + 1}`;

    // Generate random zodiac sign
    zodiacSign.textContent = `Zodiac Sign: ${zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)]}`;

    // Reveal text with transition
    fortuneText.classList.remove("hidden");
    luckyNumber.classList.remove("hidden");
    zodiacSign.classList.remove("hidden");
});
