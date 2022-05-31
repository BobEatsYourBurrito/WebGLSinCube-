function callSliders() {
  densitySlider = createSlider(5, 75, 25, 5);
  speedSlider = createSlider(0.01, 0.1, 0.03, 0.01);
  rSlider = createSlider(0,255,255,5);
  gSlider = createSlider(0,255,255,5);
  bSlider = createSlider(0,255,255,5);
  offsetSlider = createSlider(1,5,1,0.5);
  lightSlider = createSlider(0,255,255,5);
  bhSlider = createSlider(25, 300, 175,5);

  densitySlider.position(1000, 99);
  speedSlider.position(1000, 119);
  rSlider.position(1000, 139);
  gSlider.position(1000, 159);
  bSlider.position(1000, 179);
  lightSlider.position(1000, 199);
  offsetSlider.position(1000, 219);
  bhSlider.position(1000, 239);

}

function assignSliders() {
    w = densitySlider.value();
//     r = rSlider.value();
//     g = gSlider.value();
//     b = bSlider.value();
    wi = offsetSlider.value();
    //light = lightSlider.value();
    bh = bhSlider.value();
  }
