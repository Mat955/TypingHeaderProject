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

//Animation Robot

const bars = () => {

  const tl = new TimelineMax({ onComplete: bars });

  const scale = () => {
    return 0.1 + Math.random() * 3;
  }
  const color = () => {
    const colors = ['orange', 'green', 'yellow'];
    return colors[Math.floor(Math.random() * 3)];
  }
  // const voiceBars = document.querySelector('#voice-bars');
  const barsElement = document.querySelectorAll('#voice-bars > *');

  tl.set(barsElement, { y: -30, transformOrigin: '50% 50%' });
  tl.staggerTo(barsElement, .7, { scaleY: scale, repeat: 1, yoyo: true, fill: color, ease: Bounce.easeIn }, .1);
  return tl;
}

const eyes = () => {

  const tl = new TimelineMax({ repeat: -1, repeatDelay: 3, delay: 2 });

  const eyesElement = document.querySelectorAll('#eye-left, #eye-right');

  tl
    .set(eyesElement, { transformOrigin: '50% 50%' })
    .to(eyesElement, .1, { scaleY: 0, fill: "231f20" })
    .to(eyesElement, .05, { scaleY: 1, fill: "48b3e6" })
    .to(eyesElement, .12, { scaleY: 0, fill: "231f20" }, "+=0.5")
    .to(eyesElement, .03, { scaleY: 1, fill: "48b3e6" })
    .to(eyesElement, .08, { scaleY: 0, fill: "231f20" }, "+=1.5")
    .to(eyesElement, .08, { scaleY: 1, fill: "red" })

  return tl;
}

const arms = () => {
  const tl = new TimelineMax();

  const handsElement = document.querySelectorAll('#hand-right, #hand-left');
  const armsElement = document.querySelectorAll('#arm-right, #arm-left');

  tl
    .to(handsElement, .6, { y: -20, repeat: -1, yoyoy: true, ease: Bounce.easeIn }, .6)
    .to(armsElement, .6, { y: -30, repeat: -1, yoyoy: true, ease: Bounce.easeIn }, .6)

  return tl;

}

const move = () => {

  const tl = new TimelineMax();

  const legsElement = document.querySelectorAll('#leg-right, #leg-left')

  tl.staggerTo(legsElement, .5, { y: -60, repeat: -1, yoyo: true, ease: Power0.easeNone }, .5);
  return tl;
}


const master = new TimelineMax();
master.add('start');
master.add(bars(), 'start');
master.add(move(), 'start');
master.add(eyes(), 'start');
master.add(arms(), 'start');