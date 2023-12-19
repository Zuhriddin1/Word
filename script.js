const words = [
  {
    word: "Abundant",
    definition:
      "Present in great quantity; more than adequate; oversufficient.",
  },
  {
    word: "Capitulate",
    definition: "To surrender unconditionally or on stipulated terms.",
  },
  { word: "Effervescent", definition: "Bubbling; vivacious; lively." },
  { word: "Eror", definition: "Eror!!!" },
];

function RandomWord() {
  const word = document.getElementById("word");
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  word.innerText = `Word: ${randomWord.word}\nDefinition: ${randomWord.definition}`;
}
