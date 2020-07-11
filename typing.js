const box = document.querySelector('.typing');

const text = [
  "Hello! How are you today bro?", "I am also looking for a job as a Frontend Developer in a large company or starup in Poznan! ^I would like to grow as much as you do and jump to a higher robot level!", "I know finding a first job as a Junior is hard... ^But you will soon reach the same level as me! ^More hard work and you'll be Codo-Robot!"
];

const speed = 70;
const stop = 2000;
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
let activeDOMElement = box;

const typing = (newTime) => {

  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1);
    if (wordIndex === text[textIndex].length - 1) {
      if (textIndex === text.length - 1) {
        return;
      }
      return setTimeout(() => {
        box.textContent = "";
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing);
      }, stop);
    } else if (wordIndex === 0 || letter === '^') {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDOMElement = p;
    }

    if (!(letter === '^')) {
      activeDOMElement.textContent += letter;
    }

    oldTime = newTime;
    wordIndex++;
  }
  requestAnimationFrame(typing);
}

typing();