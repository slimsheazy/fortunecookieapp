const fortunes = [
    "Your future is bright, but first, a minor inconvenience.",
    "A small surprise is on its way.",
    "A familiar name is about to show up unexpectedly.",
    "The color you notice most today will be a clue.",
    "You will soon need advice from someone you don’t usually listen to.",
    "Spare no expense.",
    "A half truth is a whole lie.",
    "Slow & steady.",
    "Curiosity killed the cat. But he has 8 more lives.",
    "What is your role in this movie?",
    "Adults grow up to be children.",
    "Eeny, meeny, miny, moe.",
    "Is it fair or is it just?",
    "I really remember when I say I forgot.",
    "An apology is in your near future.",
    "Get over it.",
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

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getFortune() {
    const fortune = getRandomItem(fortunes);
    const zodiac = getRandomItem(zodiacSigns);
    const luckyNumber = Math.floor(Math.random() * 100) + 1;
    return { fortune, zodiac, luckyNumber };
}

document.getElementById("cookieButton").addEventListener("click", () => {
    const result = getFortune();
    document.getElementById("fortune").textContent = `Fortune: ${result.fortune}`;
    document.getElementById("zodiac").textContent = `Zodiac: ${result.zodiac}`;
    document.getElementById("luckyNumber").textContent = `Lucky Number: ${result.luckyNumber}`;
});