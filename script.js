let minArea = document.getElementById("minArea");
let secArea = document.getElementById("secondArea");
let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let btnReset = document.getElementById("btnReset");
let secNum = 0;
let minNum = 0;
let interval;
function onLoad(params) {
  minArea.innerHTML = "00";
  secArea.innerHTML = "00";
}

function startimer() {}
btnStart.addEventListener("click", () => {
  interval = setInterval(() => {
    secNum++;
    if (secNum < 10) {
      secArea.innerHTML = "0" + secNum;
    } else {
      secArea.innerHTML = secNum;
      if (secNum >= 60) {
        secNum = 0;
        minNum++;
        if (minNum < 10) {
          minArea.innerHTML = "0" + minNum;
        } else {
          minArea.innerHTML = minNum;
        }
      }
    }
  }, 10);
});

btnStop.addEventListener("click", function () {
  clearInterval(interval);
});

btnReset.addEventListener("click", function () {
  clearInterval(interval);
  minArea.innerHTML = "00";
  secArea.innerHTML = "00";
  secNum = 0;
  minNum = 0;
});
