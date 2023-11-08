export default class Typewriter {
  constructor(text) {
    this.text = document.querySelector(text);
  }

  phraseWriter(element) {
    const textArray = element.innerHTML.split("");
    element.innerHTML = "";
    textArray.forEach((letter, i) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 75 * i);
    });
  }

  init() {
    this.phraseWriter(this.text);
    return this;
  }
}
