
// Roboto Language incryptor
// Musawer Jalal
// May 9, 2018

// global variables
let aSound,bSound,cSound,dSound,eSound,fSound,gSound,hSound,iSound,jSound,kSound,lSound,mSound,nSound;
let oSound,pSound,qSound,rSound,sSound,tSound,uSound,vSound,wSound,xSound,ySound,zSound,spaceSound;
let textbox;
let submitButton, playSoundButton;

let lettersList = [];
let soundsList = [];

function preload() {
  aSound = loadSound("sounds/A.wav"),bSound = loadSound("sounds/B.wav"),cSound = loadSound("sounds/C.wav"),dSound = loadSound("sounds/D.wav"),eSound = loadSound("sounds/E.wav");
  fSound = loadSound("sounds/F.wav"),gSound = loadSound("sounds/G.wav"),hSound = loadSound("sounds/H.wav"),iSound = loadSound("sounds/I.wav"),jSound = loadSound("sounds/J.wav");
  kSound = loadSound("sounds/K.wav"),lSound = loadSound("sounds/L.wav"),mSound = loadSound("sounds/M.wav"),nSound = loadSound("sounds/N.wav"),oSound = loadSound("sounds/O.wav");
  pSound = loadSound("sounds/P.wav"),qSound = loadSound("sounds/Q.wav"),rSound = loadSound("sounds/R.wav"),sSound = loadSound("sounds/S.wav"),tSound = loadSound("sounds/T.wav");
  uSound = loadSound("sounds/U.wav"),vSound = loadSound("sounds/V.wav"),wSound = loadSound("sounds/W.wav"),xSound = loadSound("sounds/X.wav"),ySound = loadSound("sounds/Y.wav");
  zSound = loadSound("sounds/Z.wav");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  fSound.play();
  // creates text input box
  textbox = createInput();
  textbox.position(700, 500);
  textbox.changed(recordInput);   // records text

  submitButton = createButton("submit");
  submitButton.position(textbox.x + textbox.width, 500);

}



function draw() {
  background(255);
  makePlayButton();
}

function recordInput(){
  lettersList.push(textbox.value());
  console.log(textbox.value());
}

function makePlayButton(){
  if (lettersList.length === 1 ){
    submitButton = createButton("Play Sound");
    submitButton.position(textbox.x + textbox.width + 100, 500);
  }
}

function changeTextToSound(){
  for (let i = lettersList[0]; i < lettersList[0].length; i++) {
    if (lettersList[i] === "a"){
      soundsList.push("OMG");
    }
  }
}
