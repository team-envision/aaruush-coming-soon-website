/**
 * Toggle stuff... 🕹
 */

var container = document.getElementById("container");
var cursor = document.getElementById("cursor");
var bsod = document.getElementById("bsod");
var noiseScreen = document.getElementById("noise-screen");
var aaruushUpgradingWrapper = document.getElementById(
  "aaruush-upgrading-wrapper"
);

document.addEventListener("DOMContentLoaded", () => {
  initPart1();
});

function initPart1() {
  cursor.style.display = "block";

  setTimeout(() => {
    cursor.style.display = "none";
    initPart2();
  }, 2500);
}

function initPart2() {
  bsod.style.display = "block";

  setTimeout(() => {
    bsod.style.display = "none";
    initPart3();
  }, 1500);
}

function initPart3() {
  container.classList.toggle("white");
  noiseScreen.style.display = "block";

  setTimeout(() => {
    noiseScreen.style.display = "none";
    container.classList.toggle("white");
    initPart4();
  }, 1000);
}

function initPart4() {
  aaruushUpgradingWrapper.classList.toggle("flex");
}

/**
 * TV Grey Noise Screen 📺
 */
var canvas = document.getElementById("noise-screen"),
  ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise(ctx) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    idata = ctx.createImageData(w, h),
    buffer32 = new Uint32Array(idata.data.buffer),
    len = buffer32.length,
    i = 0;

  for (; i < len; ) buffer32[i++] = ((255 * Math.random()) | 0) << 24;

  ctx.putImageData(idata, 0, 0);
}

var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
  toggle = !toggle;
  if (toggle) {
    requestAnimationFrame(loop);
    return;
  }
  noise(ctx);
  requestAnimationFrame(loop);
})();
