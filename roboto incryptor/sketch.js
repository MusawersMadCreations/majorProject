// Roboto Language incryptor
// Musawer Jalal
// May 9, 2018
// version 0.7
// For Dan Schellenburg, CompSci 30

// global variables
let aSound, bSound, cSound, dSound, eSound, fSound, gSound, hSound, iSound, jSound, kSound, lSound, mSound, nSound;
let oSound, pSound, qSound, rSound, sSound, tSound, uSound, vSound, wSound, xSound, ySound, zSound, spaceSound;
let textbox;
let submitButton, playSoundButton, downloadButton;

let lettersList = [];
let soundsList = [];

let state;
let i = -1;

let wordtext = {
  x: 785,
  y: 200,
};

let box = {
  x: 185,
  y: 100,
  l: 1220,
  w: 125,
};


function preload() {
  aSound = loadSound("sounds/A.wav"), bSound = loadSound("sounds/B.wav"), cSound = loadSound("sounds/C.wav"), dSound = loadSound("sounds/D.wav"), eSound = loadSound("sounds/E.wav");
  fSound = loadSound("sounds/F.wav"), gSound = loadSound("sounds/G.wav"), hSound = loadSound("sounds/H.wav"), iSound = loadSound("sounds/I.wav"), jSound = loadSound("sounds/J.wav");
  kSound = loadSound("sounds/K.wav"), lSound = loadSound("sounds/L.wav"), mSound = loadSound("sounds/M.wav"), nSound = loadSound("sounds/N.wav"), oSound = loadSound("sounds/O.wav");
  pSound = loadSound("sounds/P.wav"), qSound = loadSound("sounds/Q.wav"), rSound = loadSound("sounds/R.wav"), sSound = loadSound("sounds/S.wav"), tSound = loadSound("sounds/T.wav");
  uSound = loadSound("sounds/U.wav"), vSound = loadSound("sounds/V.wav"), wSound = loadSound("sounds/W.wav"), xSound = loadSound("sounds/X.wav"), ySound = loadSound("sounds/Y.wav");
  zSound = loadSound("sounds/Z.wav"), spaceSound = loadSound("sounds/space.wav");
}

function setup() {
  n = createCanvas(windowWidth, windowHeight);
  state = "program";
  time = millis();

  // creates text input box
  textbox = createInput("Enter What You Want EnCrypted");

  //buttons
  submitButton = createButton("Encrypt");
  playSoundButton = createButton("Play Sound");
  downloadButton = createButton("Download");
  uploadButton = createButton("Upload");
  decryptButton = createButton("Decrypt");
  startButton = createButton("Start");

  //css styles
  submitButton.style("background-color", "#4CAF50");
  submitButton.style("color", "white");
  submitButton.style("border", "none");
  submitButton.style("font-size", "30px");
  submitButton.style("padding", "16px 32px");
  submitButton.style("width", "20%");


  playSoundButton.style("background-color", "#4CAF50");
  playSoundButton.style("color", "white");
  playSoundButton.style("border", "none");
  playSoundButton.style("font-size", "30px");
  playSoundButton.style("padding", "16px 32px");
  playSoundButton.style("width", "20%");

  downloadButton.style("background-color", "#1E90FF");
  downloadButton.style("color", "white");
  downloadButton.style("border", "none");
  downloadButton.style("font-size", "30px");
  downloadButton.style("padding", "6px 2px");
  downloadButton.style("width", "10%");

  uploadButton.style("background-color", "#1E90FF");
  uploadButton.style("color", "white");
  uploadButton.style("border", "none");
  uploadButton.style("font-size", "30px");
  uploadButton.style("padding", "6px 2px");
  uploadButton.style("width", "10%");

  decryptButton.style("background-color", "#1E90FF");
  decryptButton.style("color", "white");
  decryptButton.style("border", "none");
  decryptButton.style("font-size", "30px");
  decryptButton.style("padding", "16px 32px");
  decryptButton.style("width", "20%");

  textbox.style("width", "56%");
  textbox.style("height", "15px");
  textbox.style("padding", "7px");


  changeTextToSound();
}

function draw() {
  if (state === "start"){
    startAnimation();
  }
  if (state === "program") {
    checkEvents();
  }
}

function startAnimation() {
  let r = {
    rx: width/6,
    ry: height/5,
    ox: width/6 * 2,
    oy: height/5 * 5,
    bx: width/6 * 3,
    by: height/5,
    o2x: width/6 * 4,
    o2y: height/5 * 5,
    tx: width/6 * 5,
    ty: height/5,
    o3x: width/6 * 6,
    o3y: height/5 * 5,
  };

  if (state === "start") {
    background(255);
    fill(0);
    textSize(100);
    text("R",r.rx,r.ry,);
    text("O",r.ox,r.oy,);
    text("B",r.bx,r.by,);
    text("O",r.o2x,r.o2y,);
    text("T",r.tx,r.ty,);
    text("O",r.o3x,r.o3y,);
  }
}


function checkEvents() {
  if (state === "program") {
    textbox.position(width / 5, 400);
    submitButton.position(width / 5, 500);
    playSoundButton.position(width / 5 * 2.85, 500);
    downloadButton.position(width / 5 * 2.85, 600);
    uploadButton.position(width / 5 * 1.5, 600);
    playSoundButton.mousePressed(playsound);
    submitButton.mousePressed(recordInput);
    downloadButton.mousePressed(downloadSound);
    uploadButton.mousePressed(uploadScreen);
  }
  if (state === "upload") {
    n.drop(gotFile);
  }
}


function recordInput() {
  if (state === "program") {
    lettersList = [];
    soundsList = [];
    lettersList = textbox.value().split(""); //splits every character into a list
    console.log(lettersList);
    changeTextToSound();
    submitText();
  }
}

function changeTextToSound() {
  //converts every letter into a robot beep
  if (state === "program") {
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
  if (state === "program") {
    if (soundsList.length >= 1) {
      background(255);
      noStroke();
      fill(30, 144, 255);
      rect(box.x, box.y, box.l, box.w);
      fill(0);
      text("You Can Now Download", wordtext.x, wordtext.y);
      i++; // adds 1 to the list value
      if (i === soundsList.length) {
        i = -1
        background(255);
      }
      if (i === soundsList.length) return;
      soundsList[i].play();
      setTimeout(playsound, 250); // call the same fuction again every .250 seconds
    }
  }
}


function submitText() {
  if (state === "program") {
    textAlign(CENTER);
    textSize(100);

    if (lettersList.length < 1) {
      noStroke();
      fill(204, 0, 0);
      rect(box.x, box.y, box.l, box.w);
      fill(0);
      text("You Can't Encrypt Nothing", wordtext.x, wordtext.y);

    } else if (lettersList.length >= 1) {
      noStroke();
      fill(76, 175, 80);
      rect(box.x, box.y, box.l, box.w);
      fill(0);
      textSize(80);
      text("Your Text Has Been EnCrypted", wordtext.x, wordtext.y);
    }
  }
}

function gotFile() {
  if (file.type === '.txt') {
    lettersList(file.data).push()
  } else {
    print('ONLY ROBOTO FILES');
  }
}

function downloadSound() {
  if (state = "program") {
    //download button function
    let content = soundsList;
    let filename = "Roboto.text";
    let blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
    });
    downloadFile(blob, filename);
  }
}

function uploadScreen() {
  background(255);
  state = "upload";
  downloadButton.remove();
  uploadButton.remove();
  textbox.remove();
  playSoundButton.remove();
  submitButton.remove();
  decryptButton.position(width / 2 - 170, 640);
  rect(100, 100, 1400, 500);
  textSize(130);
  text("DROP", 600, 400);

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
