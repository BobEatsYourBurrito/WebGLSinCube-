let xoff = 1;
let w, r, g, b, wi, bh;
let maxD;
let densitySlider, speedSlider, rSlider, gSlider, bSlider, offsetSlider, lights, bhSlider;

function setup() {
  createCanvas(1000,1000,WEBGL);
  maxD = dist(0,0, 250, 250);
  callSliders();

}

function draw() {
  background(175);
  assignSliders();
  ortho(-400, 400, -400, 400, -500, 2000);
  ambientLight(light, light, light, 0, -1, 0);

  translate(0, -150, -500);
  rotateX(-PI / 8);
  rotateY(PI / 4);

  let mousex = mouseX - width / 2;
  let mousey = mouseY - height / 2;

  // fill(255);
  rectMode(CENTER);
  for(let j = 0; j < 500; j += w) {
    for(let i = 0; i < 500; i += w) {
      push();
//       r = map(sin(xoff),-1,1,0,255);
//       g = 0;
//       b = map(sin(xoff+1),-1,1,0,255);
      //let d = dist(i - mousex, j - mousey ,250,250); //origin to mouse
      let d = dist(i, j,250,250);
      let d1 = dist(i ,j ,250,250);
      let offset = map(d, 0, maxD, -wi , wi);
      let bright = map(d1, 0, maxD, 255, 0);
      let bright1 = map(d1, 0, maxD,100, 255);
      //let bright1 = map(d1, 0, maxD, 100, 0);
      translate((-width /2 + 13) + i,0,j);
      let h = floor(map(sin(-xoff * 2 + offset),-1,1,25,bh));
      ambientMaterial((bright + r)/2, (bright + g)/2, (bright + b)/2, 255);
      box(w, h, w);
      pop();
    }
  }

  xoff += speedSlider.value();
}
