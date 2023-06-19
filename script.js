const adjectives = [
  "funny",
  "thoughtfully",
  "sadly",
  "insistently",
  "furiously",
  "with inspiration",
  "with a smile",
  "with suspicion",
  "businesslike",
  "boldly",
  "measuredly",
  "slowly",
  "gracefully",
  "confidently",
  "quickly",
  "talented",
  "enchantingly",
];
const verbs = [
  "watching",
  "leafing through",
  "scrolling",
  "studying",
  "save",
  "conquer",
  "looking for",
  "looking through",
  "analyze",
];
const nouns = [
  "news",
  "youtube",
  "series",
  "instagram",
  "facebook",
  "photo",
  "memes",
  "pages of former",
  "netflix",
  "hbo",
  "twitch",
];

const button = document.querySelector("button");
const para = document.querySelector(".phrase");

button.addEventListener("click", () => {
  const phrase = `${getRandomWord(adjectives)} 
  ${getRandomWord(verbs)} ${getRandomWord(nouns)}`
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
  para.textContent = phrase;
});

function getRandomWord(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
