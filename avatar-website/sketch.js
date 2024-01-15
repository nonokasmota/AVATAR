// CANVAS SIZES
let _canvasX = 512, // canvas width
  _canvasY = 512; // canvas height

// UNITS
let _centreX = _canvasX / 2, // center of canvas in the X axis
  _centreY = _canvasY / 2, // center of canvas in the Y axis
  _unit = _canvasY / 10, // metric unit relative to the canvas size in the Y axis
  _headX = (_canvasX / 8) * 3, // height of the head
  _headY = _canvasY / 2, // width of the head
  _neckWidth = _canvasX / 8; // width of the neck

// COLORS
let allColorOpts = [ // many colorful colors to choose from
    [213, 181, 39],
    [198, 117, 36],
    [180, 73, 43],
    [161, 28, 49],
    [188, 123, 134],
    [209, 196, 190],
    [214, 218, 219],
    [170, 174, 168],
    [130, 151, 146],
    [99, 93, 137],
    [121, 62, 118],
  ],
  colorOpts = [ // black and white
    [255, 255, 255],
    [0, 0, 0],
  ];

let elements = ["bg", "skin", "eyes", "shirt", "hair"]; // drawing elements to which colors will be assigned

for (i = 0; i < 3; i++) { // choosing 3 colors from allColorOpts
  let _randomColor = Math.floor(Math.random() * allColorOpts.length);
  colorOpts.push(allColorOpts[_randomColor]);
  allColorOpts.splice(_randomColor, 1);
}

let dic = {}; // place where colors are assigned to drawing elements
let _randomNo;
let colorOptsLen = colorOpts.length;

// COLOR VARIABLES --> (IN CASE YOU DON'T WANT RANDOM COLORS YOU CAN CHANGE THEM HERE) <--
let bg, // --> THIS APPLIES TO BACKGROUND AND MOUTH
  skin, // --> THIS APPLIES TO SKIN
  eyes, // --> THIS APPLIES TO EYES
  shirt, // --> THIS APPLIES TO CLOTHING AND GLASSES
  hair; // --> THIS APPLIES TO ALL HAIR

function colorMake() {
  // COLORS
allColorOpts = [ // many colorful colors to choose from
[213, 181, 39],
[198, 117, 36],
[180, 73, 43],
[161, 28, 49],
[188, 123, 134],
[209, 196, 190],
[214, 218, 219],
[170, 174, 168],
[130, 151, 146],
[99, 93, 137],
[121, 62, 118],
],
colorOpts = [ // black and white
[255, 255, 255],
[0, 0, 0],
];

elements = ["bg", "skin", "eyes", "shirt", "hair"]; // drawing elements to which colors will be assigned

for (i = 0; i < 3; i++) { // choosing 3 colors from allColorOpts
  _randomColor = Math.floor(Math.random() * allColorOpts.length);
  colorOpts.push(allColorOpts[_randomColor]);
  allColorOpts.splice(_randomColor, 1);
}

 dic = {}; // place where colors are assigned to drawing elements
 _randomNo;
 colorOptsLen = colorOpts.length;







  for (let i = 0; i < colorOptsLen; i++) { // color assignment to drawing elements
    _randomNo = Math.floor(Math.random() * (colorOpts.length - 1));
    dic[elements[i]] = colorOpts[_randomNo];
    colorOpts.splice(_randomNo, 1);
  }

  bg = dic["bg"],
  skin = dic["skin"],
  eyes = dic["eyes"],
  shirt = dic["shirt"],
  hair = dic["hair"];
}



// CANVAS SETUP
function setup() {
  let _canvas = createCanvas(_canvasX, _canvasY); // this creates the canvas
  _canvas.parent("canvas"); // this assigns the canvas to an HTML id
  noLoop();
}

//SAVE CANVAS
function saveImg() { // function to save canvas
    saveCanvas('yourAvatar_byAnaMota.jpg');
}



// BODY
function makeBody() {
  // SETUP
  
  fill(skin); // this picks the color of fill of the following drawing
  strokeWeight(0); // this removes the outline of the following drawing

  // HEAD
  rectMode(CENTER);
  rect( // rounded rectangle, shape of the head
    _centreX,
    _centreY,
    _headX,
    _headY,
    _headX / 3,
    _headX / 3,
    _headX / 2,
    _headX / 2
  );

  // EARS
  circle(_centreX + _headX / 2, _centreY + _unit, (7 * _unit) / 8); // cicle, your right
  circle(_centreX - _headX / 2, _centreY + _unit, (7 * _unit) / 8); // circle, your left

  // NECK
  rectMode(CORNER);
  rect( // rounded rectangle, neck
    _centreX - _neckWidth / 2,
    _centreY,
    _neckWidth,
    (_canvasY / 8) * 3,
    _canvasX
  );
}

// EYES
let _eyelidRandom;
let _eyelidTypes = ["top", "bottom", "none"]; // types of eyelid positions
function makeEyes(_ranVerif) { // checks if the type of eyelid should be random or not (e.g. if changing only another element, eyelid type should stay the same)
  if(_ranVerif == -1){
    _eyelidRandom = Math.floor(Math.random() * 3); // randomizing eyelid type
  } else{
    _eyelidRandom = _ranVerif; // 
  }
  let _eyelidType = _eyelidTypes[_eyelidRandom];

  // EYEBALLS
  strokeWeight(0);
  fill(eyes);
  circle((_canvasX / 7) * 3, _canvasY / 2, _unit);
  circle((_canvasX / 7) * 4, _canvasY / 2, _unit);

  // EYELIDS
  strokeWeight(0);
  fill(skin);

  if (_eyelidType == "top") {
    push();
    rectMode(CENTER);
    rect(_centreX, _centreY - (2 * _unit) / 3, (3 * _headX) / 4, _headY / 5);
    pop();
  } else if (_eyelidType == "bottom") {
    push();
    rectMode(CENTER);
    rect(_centreX, _centreY + (2 * _unit) / 3, (3 * _headX) / 4, _headY / 5);
    pop();
  } else if (_eyelidType == "none") {
  }
}

// SHIRT
function makeShirt() {
  strokeWeight(0);
  fill(shirt);
  
  rect(
    _centreX - (_canvasX / 10) * 3,
    (_canvasY / 5) * 4,
    (_canvasX / 5) * 3,
    _canvasY,
    _canvasX / 5,
    _canvasX / 5,
    0,
    0
  );
}

// MOUTH
let _mouthRandom;
let _mouthTypes = ["happy", "sad", "meh", "oh"];
function makeMouth(_ranVerif) {
  strokeWeight(0);
  fill(bg);
  if(_ranVerif == -1){
    _mouthRandom = Math.floor(Math.random() * 4);
  } else{
    _mouthRandom = _ranVerif;
  }
  let _mouthType = _mouthTypes[_mouthRandom];

  if (_mouthType == "happy") {
    push();
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + (5 * _unit) / 4,
      _unit,
      _unit,
      _unit / 5,
      _unit / 5,
      _unit * 2,
      _unit * 2
    );
    console.log("I'm happy!");
    pop();
  } else if (_mouthType == "sad") {
    push();
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + (5 * _unit) / 4,
      _unit,
      _unit,
      _unit * 2,
      _unit * 2,
      _unit / 5,
      _unit / 5
    );
    console.log("I'm sad!");
    pop();
  } else if (_mouthType == "meh") {
    push();
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + (5 * _unit) / 4,
      _unit,
      _unit / 3,
      _unit * 2,
      _unit * 2,
      _unit / 5,
      _unit / 5
    );
    console.log("I'm meh!");
    pop();
  } else if (_mouthType == "oh") {
    push();
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + (5 * _unit) / 4,
      _unit / 2,
      _unit / 2,
      _unit * 2,
      _unit * 2,
      _unit / 5,
      _unit / 5
    );
    console.log("Oh.");
    pop();
  }
}

// HAIR
let _hairFrontRandom;
let _hairFrontTypes = [
  "bangs",
  "side_part_l",
  "side_part_r",
  "mid_part",
  "anime_bangs",
  "none",
];
function makeHairFront(_ranVerif) {
  if(_ranVerif == -1){
    _hairFrontRandom = Math.floor(Math.random() * 6);
  }else{
    _hairFrontRandom = _ranVerif;
  }
  let _hairFrontType = _hairFrontTypes[_hairFrontRandom];

  strokeWeight(0);
  fill(hair);

  if (_hairFrontType == "bangs") {
    rect(
      _centreX - _headX / 2 - _unit / 5,
      _centreY - _headY / 2 - _unit / 5,
      _headX + (4 * _unit) / 10,
      _headY - _unit * 3,
      _headX / 3,
      _headX / 3,
      0,
      0
    );
  } else if (_hairFrontType == "side_part_l") {
    rect(
      _centreX - _headX / 2 - _unit / 5,
      _centreY - _headY / 2 - _unit / 5,
      _headX / 3,
      _headY - _unit * 3,
      _headX / 3,
      0,
      _headX,
      0
    );
    rect(
      _centreX - _headX / 2 - _unit / 5 + _headX / 3,
      _centreY - _headY / 2 - _unit / 5,
      _headX + (4 * _unit) / 10 - _headX / 3,
      _headY - _unit * 3,
      0,
      _headX / 6,
      0,
      _headX / 3
    );
  } else if (_hairFrontType == "side_part_r") {
    rect(
      _centreX - _headX / 2 - _unit / 5,
      _centreY - _headY / 2 - _unit / 5,
      _headX + (4 * _unit) / 10 - _headX / 3,
      _headY - _unit * 3,
      _headX / 6,
      0,
      _headX / 3,
      0
    );
    rect(
      _centreX + 2 * _unit / 10 + _headX / 6,
      _centreY - _headY / 2 - _unit / 5,
      _headX / 3,
      _headY - _unit * 3,
      0,
      _headX / 3,
      0,
      _headX
    );
  } else if (_hairFrontType == "mid_part") {
    rect(
      _centreX - _headX / 2 - _unit / 5,
      _centreY - _headY / 2 - _unit / 5,
      _headX / 2 + (2 * _unit) / 10,
      _headY - _unit * 3,
      _headX / 3,
      0,
      _headX / 3,
      0
    );
    rect(
      _centreX,
      _centreY - _headY / 2 - _unit / 5,
      _headX / 2 + (2 * _unit) / 10,
      _headY - _unit * 3,
      0,
      _headX / 3,
      0,
      _headX / 3
    );
  } else if (_hairFrontType == "anime_bangs") {
    rect(
      _centreX - _headX / 2 - _unit / 5,
      _centreY - _headY / 2 - _unit / 5,
      _headX + (4 * _unit) / 10,
      _headY - _unit * 3,
      _headX / 3,
      _headX / 3,
      0,
      0
    );
    rect(
      _centreX - _headX / 2 - _unit / 5,
      _centreY - _headY / 4 - _unit / 5,
      _unit / 2,
      _headY + _unit / 3,
      0,
      0,
      _unit,
      _unit
    );
    rect(
      _centreX + _headX / 2 - 3 * _unit / 10,
      _centreY - _headY / 4 - _unit / 5,
      _unit / 2,
      _headY + _unit / 3,
      0,
      0,
      _unit,
      _unit
    );
  } else if (_hairFrontType == "none") {}
}

let _hairBackRandom;
let _hairBackTypes = [
  "long",
  "mid",
  "short",
  "none",
  "up_do",
  "space_buns",
  "afro",
];
function makeHairBack(_ranVerif) {
  if(_ranVerif == -1){
    _hairBackRandom = Math.floor(Math.random() * 7);
  }else{
    _hairBackRandom = _ranVerif;
  }
  let _hairBackType = _hairBackTypes[_hairBackRandom];

  strokeWeight(0);
  fill(hair);

  if (_hairBackType == "long") {
    push();
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + (5 * _unit) / 3,
      _headX + _unit,
      _headY + 3 * _unit,
      _headX / 3,
      _headX / 3,
      _headX / 3,
      _headX / 3
    );
    pop();
  } else if (_hairBackType == "mid") {
    push();
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + (2 * _unit) / 3,
      _headX + _unit,
      _headY + _unit,
      _headX / 3,
      _headX / 3,
      _headX / 3,
      _headX / 3
    );
    pop();
  } else if (_hairBackType == "short") {
    push();
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + (2 * _unit) / 3 - _unit / 3,
      _headX + _unit,
      _headY,
      _headX / 3,
      _headX / 3,
      _headX / 3,
      _headX / 3
    );
    pop();
  } else if (_hairBackType == "up_do") {
    circle(_centreX, _centreY - _headY / 2 - (2 * _unit) / 5, (9 * _unit) / 5);
  } else if (_hairBackType == "space_buns") {
    circle(
      _centreX - 2 * _unit,
      _centreY - _headY / 2 - (2 * _unit) / 5,
      2 * _unit
    );
    circle(
      _centreX + 2 * _unit,
      _centreY - _headY / 2 - (2 * _unit) / 5,
      2 * _unit
    );
  } else if (_hairBackType == "afro") {
    circle(_centreX, _centreY - _unit / 2, 7 * _unit);
  } else if (_hairBackType == "none") {}
}

// GLASSES
let _glassesRandom;
let _glassesTypes = ["round", "square", "rectangle", "mono", "none"];
function makeGlasses(_ranVerif) {
  if(_ranVerif == -1){
    _glassesRandom = Math.floor(Math.random() * 5);
  }else{
    _glassesRandom = _ranVerif;
  }
  let _glassesType = _glassesTypes[_glassesRandom];

  push();
  strokeWeight(_unit / 10);
  stroke(shirt);
  noFill();

  if (_glassesType == "round") {
    circle((_canvasX / 7) * 3, _canvasY / 2, (4 * _unit) / 3);
    circle((_canvasX / 7) * 4, _canvasY / 2, (4 * _unit) / 3);
  } else if (_glassesType == "square") {
    rectMode(CENTER);
    rect(
      (_canvasX / 7) * 3,
      _canvasY / 2,
      (4 * _unit) / 3,
      (4 * _unit) / 3,
      _unit / 4
    );
    rect(
      (_canvasX / 7) * 4,
      _canvasY / 2,
      (4 * _unit) / 3,
      (4 * _unit) / 3,
      _unit / 4
    );
  } else if (_glassesType == "rectangle") {
    rectMode(CENTER);
    rect(
      (_canvasX / 7) * 3,
      _canvasY / 2 + _unit / 4,
      (4 * _unit) / 3,
      (2 * _unit) / 3,
      _unit / 4
    );
    rect(
      (_canvasX / 7) * 4,
      _canvasY / 2 + _unit / 4,
      (4 * _unit) / 3,
      (2 * _unit) / 3,
      _unit / 4
    );
  } else if (_glassesType == "mono") {
    circle((_canvasX / 7) * 3, _canvasY / 2, (4 * _unit) / 3);
  } else if (_glassesType == "none") {}
  pop();
}

// FACIAL HAIR
let _facialHairRandom;
let _facialHairTypes = ["moustache", "beard", "moustachexbeard", "none"];
function makeFacialHair(_ranVerif) {
  if(_ranVerif == -1){
    _facialHairRandom = Math.floor(Math.random() * 5);
  }else{
    _facialHairRandom = _ranVerif;
  }
  let _facialHairType = _facialHairTypes[_facialHairRandom];

  push();
  strokeWeight(0);
  fill(hair);

  if (_facialHairType == "moustache") {
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + _unit,
      (3 * _unit) / 2,
      _unit / 2,
      _unit,
      _unit,
      0,
      0
    );
  } else if (_facialHairType == "beard") {
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + (7 * _unit) / 3,
      _unit / 2,
      _unit / 2,
      _unit,
      _unit,
      0,
      0
    );
  } else if (_facialHairType == "moustachexbeard") {
    rectMode(CENTER);
    rect(
      _centreX,
      _centreY + _unit,
      (3 * _unit) / 2,
      _unit / 2,
      _unit,
      _unit,
      0,
      0
    );
    rect(
      _centreX,
      _centreY + (7 * _unit) / 3,
      _unit / 2,
      _unit / 2,
      _unit,
      _unit,
      0,
      0
    );
  } else if (_facialHairType == "none") {}
  pop();
}

// ACTION
function draw() {
  colorMake();
  background(bg);
  console.log("draw() started");
  makeHairBack(-1);
  makeShirt();
  makeBody();
  makeEyes(-1);
  makeMouth(-1);
  makeHairFront(-1);
  makeFacialHair(-1);
  makeGlasses(-1);
}

function drawDeterministic(HairBack,Eyes,Mouth,HairFront,FacialHair,Glasses) {
  background(bg);
  console.log("drawDeterministic() started");
  makeHairBack(HairBack);
  makeShirt();
  makeBody();
  makeEyes(Eyes);
  makeMouth(Mouth);
  makeHairFront(HairFront);
  makeFacialHair(FacialHair);
  makeGlasses(Glasses);
}

// --> HERE ARE THE BUTTONS <--


// DROPDOWN ACTIVITY 
function dropdownFace() {
    document.getElementById("face").classList.toggle("show");
}

function dropdownHair() {
    document.getElementById("hair").classList.toggle("show");
}

function dropdownWardrobe() {
    document.getElementById("wardrobe").classList.toggle("show");
}

function dropdownBG() {
    document.getElementById("BG").classList.toggle("show");
}

let dropdowns = document.getElementsByClassName("dropdownContent");
console.log ("dropdowns");
console.log (dropdowns);


// CHANGE BUTTONS
function eyesChange() {
  console.log("EyesChange",_eyelidRandom);
  if (_eyelidRandom < 2) {
    _eyelidType = _eyelidTypes[_eyelidRandom + 1]
    _eyelidRandom += 1;
  } else {
    _eyelidType = _eyelidTypes[0]
    _eyelidRandom = 0;
  }
  drawDeterministic(_hairBackRandom,_eyelidRandom,_mouthRandom,_hairFrontRandom,_facialHairRandom,_glassesRandom);
}

function mouthChange() {
  console.log("MouthChange",_mouthRandom);
  if (_mouthRandom < 3) {
    _mouthType = _mouthTypes[_mouthRandom + 1]
    _mouthRandom += 1;
  } else {
    _mouthType = _mouthTypes[0]
    _mouthRandom = 0;
  }
  drawDeterministic(_hairBackRandom,_eyelidRandom,_mouthRandom,_hairFrontRandom,_facialHairRandom,_glassesRandom);
}

function hairFrontChange() {
  console.log("HairFrontChange",_hairFrontRandom);
  if (_hairFrontRandom < 5) {
    _hairFrontType = _hairFrontTypes[_hairFrontRandom + 1]
    _hairFrontRandom += 1;
  } else {
    _hairFrontType = _hairFrontTypes[0]
    _hairFrontRandom = 0;
  }
  drawDeterministic(_hairBackRandom,_eyelidRandom,_mouthRandom,_hairFrontRandom,_facialHairRandom,_glassesRandom);
}

function hairBackChange() {
  console.log("HairBackChange",_hairBackRandom);
  if (_hairBackRandom < 6) {
    _hairBackType = _hairBackTypes[_hairBackRandom + 1]
    _hairBackRandom += 1;
  } else {
    _hairBackType = _hairBackTypes[0]
    _hairBackRandom = 0;
  }
  drawDeterministic(_hairBackRandom,_eyelidRandom,_mouthRandom,_hairFrontRandom,_facialHairRandom,_glassesRandom);
}

function facialHairChange() {
  console.log("FacialHairChange",_facialHairRandom);
  if (_facialHairRandom < 3) {
    _facialHairType = _facialHairTypes[_facialHairRandom + 1]
    _facialHairRandom += 1;
  } else {
    _facialHairType = _facialHairTypes[0]
    _facialHairRandom = 0;
  }
  drawDeterministic(_hairBackRandom,_eyelidRandom,_mouthRandom,_hairFrontRandom,_facialHairRandom,_glassesRandom);
}

function glassesChange() {
  console.log("GlassesChange",_glassesRandom);
  if (_glassesRandom < 4) {
    _glassesType = _glassesTypes[_glassesRandom + 1]
    _glassesRandom += 1;
  } else {
    _glassesType = _glassesTypes[0]
    _glassesRandom = 0;
  }
  drawDeterministic(_hairBackRandom,_eyelidRandom,_mouthRandom,_hairFrontRandom,_facialHairRandom,_glassesRandom);
}

function colorChange() {
  colorMake();
  drawDeterministic(_hairBackRandom,_eyelidRandom,_mouthRandom,_hairFrontRandom,_facialHairRandom,_glassesRandom);
}