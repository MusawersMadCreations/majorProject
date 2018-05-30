// Roboto Language incryptor
// Musawer Jalal
// May 9, 2018

// global variables
let aSound, bSound, cSound, dSound, eSound, fSound, gSound, hSound, iSound, jSound, kSound, lSound, mSound, nSound;
let oSound, pSound, qSound, rSound, sSound, tSound, uSound, vSound, wSound, xSound, ySound, zSound, spaceSound;
let textbox;
let submitButton, playSoundButton;

let lettersList = [];
let soundsList = [];

let myTimer;

let wordtext = {
  x: 800,
  y: 400,
};

let roboto = {
  rx: 0,
  ry: 75,
  ox: 75,
  oy: 75,
  bx: 150,
  by: 75,
  o2x: 225,
  o2y: 75,
  tx: 300,
  ty: 75,
  o3x: 375,
  o3y: 75,
  speed: 3,
};


let state;

function preload() {
  aSound = loadSound("sounds/A.wav"), bSound = loadSound("sounds/B.wav"), cSound = loadSound("sounds/C.wav"), dSound = loadSound("sounds/D.wav"), eSound = loadSound("sounds/E.wav");
  fSound = loadSound("sounds/F.wav"), gSound = loadSound("sounds/G.wav"), hSound = loadSound("sounds/H.wav"), iSound = loadSound("sounds/I.wav"), jSound = loadSound("sounds/J.wav");
  kSound = loadSound("sounds/K.wav"), lSound = loadSound("sounds/L.wav"), mSound = loadSound("sounds/M.wav"), nSound = loadSound("sounds/N.wav"), oSound = loadSound("sounds/O.wav");
  pSound = loadSound("sounds/P.wav"), qSound = loadSound("sounds/Q.wav"), rSound = loadSound("sounds/R.wav"), sSound = loadSound("sounds/S.wav"), tSound = loadSound("sounds/T.wav");
  uSound = loadSound("sounds/U.wav"), vSound = loadSound("sounds/V.wav"), wSound = loadSound("sounds/W.wav"), xSound = loadSound("sounds/X.wav"), ySound = loadSound("sounds/Y.wav");
  zSound = loadSound("sounds/Z.wav"), spaceSound = loadSound("sounds/space.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  state = "start";
  fSound.play();
  // creates text input box
  textbox = createInput();

  submitButton = createButton("Submit");
  playSoundButton = createButton("Encrypt");

  changeTextToSound();
  textbox.changed(recordInput); // records text

}

function draw() {
  startAnimation();
  if (state === "program"){
    checkEvents();
  }
}

function checkEvents() {
  if (state === "program"){
    submitButton.position(textbox.x + textbox.width, 500);
    playSoundButton.position(textbox.x + textbox.width + 100, 500);
    playSoundButton.mousePressed(playsound);
    submitButton.mousePressed(submitText);
    textbox.position(700, 500);
  }
}

function recordInput() {
  if (state === "program"){
    lettersList = [];
    soundsList = [];
    lettersList = textbox.value().split("");
    console.log(lettersList);
    changeTextToSound();
  }
}

function changeTextToSound() {
  if (state === "program"){
    for (let i = 0; i < lettersList.length; i++) {
      if (lettersList[i] === "a" || lettersList[i] === "A") {
        soundsList.push(aSound);
      }
      if (lettersList[i] === "b" || lettersList[i] === "B") {
        soundsList.push(bSound);
      }
      if (lettersList[i] === "c" || lettersList[i] === "C") {
        soundsList.push(cSound);
      }
      if (lettersList[i] === "d" || lettersList[i] === "D") {
        soundsList.push(dSound);
      }
      if (lettersList[i] === "e" || lettersList[i] === "E") {
        soundsList.push(eSound);
      }
      if (lettersList[i] === "f" || lettersList[i] === "F") {
        soundsList.push(fSound);
      }
      if (lettersList[i] === "g" || lettersList[i] === "G") {
        soundsList.push(gSound);
      }
      if (lettersList[i] === "h" || lettersList[i] === "H") {
        soundsList.push(hSound);
      }
      if (lettersList[i] === "i" || lettersList[i] === "I") {
        soundsList.push(iSound);
      }
      if (lettersList[i] === "j" || lettersList[i] === "J") {
        soundsList.push(jSound);
      }
      if (lettersList[i] === "k" || lettersList[i] === "K") {
        soundsList.push(kSound);
      }
      if (lettersList[i] === "l" || lettersList[i] === "L") {
        soundsList.push(lSound);
      }
      if (lettersList[i] === "m" || lettersList[i] === "M") {
        soundsList.push(mSound);
      }
      if (lettersList[i] === "n" || lettersList[i] === "N") {
        soundsList.push(nSound);
      }
      if (lettersList[i] === "o" || lettersList[i] === "O") {
        soundsList.push(oSound);
      }
      if (lettersList[i] === "p" || lettersList[i] === "P") {
        soundsList.push(pSound);
      }
      if (lettersList[i] === "q" || lettersList[i] === "Q") {
        soundsList.push(qSound);
      }
      if (lettersList[i] === "r" || lettersList[i] === "R") {
        soundsList.push(rSound);
      }
      if (lettersList[i] === "s" || lettersList[i] === "S") {
        soundsList.push(sSound);
      }
      if (lettersList[i] === "t" || lettersList[i] === "T") {
        soundsList.push(tSound);
      }
      if (lettersList[i] === "u" || lettersList[i] === "U") {
        soundsList.push(uSound);
      }
      if (lettersList[i] === "v" || lettersList[i] === "V") {
        soundsList.push(vSound);
      }
      if (lettersList[i] === "w" || lettersList[i] === "W") {
        soundsList.push(wSound);
      }
      if (lettersList[i] === "x" || lettersList[i] === "X") {
        soundsList.push(xSound);
      }
      if (lettersList[i] === "y" || lettersList[i] === "Y") {
        soundsList.push(ySound);
      }
      if (lettersList[i] === "z" || lettersList[i] === "Z") {
        soundsList.push(zSound);
      }
      if (lettersList[i] === " ") {
        soundsList.push(spaceSound);
      }
    }
  }
}

function playsound() {
  if (state === "program"){
    if (soundsList.length >= 1) {
      myTimer = new Timer(200);
      for (let i = 0; i < soundsList.length; i++) {
        if (myTimer.isDone()) {
          soundsList[i].play();
          myTimer.reset(200);
        }
      }
    }
  }
}
class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    } else {
      return false;
    }
  }
}

function submitText() {
  if (state === "program"){
    textAlign(CENTER);
    textSize(100);
    if (lettersList.length < 1) {
      background(255, 0, 0);
      text("You Can't Submit Nothing", wordtext.x, wordtext.y);
    } else if (lettersList.length >= 1) {
      background(0, 255, 0);
      text("Your Text Has Been EnCrypted", wordtext.x, wordtext.y);
    }
  }
}


function startAnimation() {
  if (state === "start") {
    lettersPath();
  } else {
    state = "program";
  }
}

function lettersPath() {
  textSize(75);
  robotoletter();
  roboto.ry + 75,roboto.oy + 75,roboto.by + 75,roboto.o2y + 75, roboto.ty + 75,roboto.o3y + 75;
  robotoletter();

}

function robotoletter(){
  text("R", roboto.rx, roboto.ry), text("O", roboto.ox, roboto.oy), text("B", roboto.bx, roboto.by);
  text("O", roboto.o2x, roboto.o2y), text("T", roboto.tx, roboto.ty), text("O", roboto.o3x, roboto.o3y);
}
