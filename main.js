let soat = document.getElementById("soatHisob");
let daqiqa = document.getElementById("daqiqaHisob");
let sekund = document.getElementById("sekundHisob");

///////////////Buttonlar//////////////////////
let start = document.getElementById("start-btn");
let stop = document.getElementById("stop-btn");
let reset = document.getElementById("reset-btn");

/////////////funksiyalar//////////////////////////////
function sekundAylan() {
  let soatHisob = parseInt(soat.value);
  let daqiqaHisob = parseInt(daqiqa.value);
  let sekundHisob = parseInt(sekund.value);
  return soatHisob * 3600 + daqiqaHisob * 60 + sekundHisob;
}

function soatTahrirchi() {
  let soatHisob = Math.floor(sekundCount / 3600);
  let daqiqaHisob = Math.floor((sekundCount % 3600) / 60);
  let sekundHisob = sekundCount % 60;

  soat.value = soatHisob.toString().padStart(2, "0");
  daqiqa.value = daqiqaHisob.toString().padStart(2, "0");
  sekund.value = sekundHisob.toString().padStart(2, "0");
}
/////////////////////////////////////////////////////////
let interID;
let sekundCount = 0;

start.addEventListener("click", () => {
  sekundCount = sekundAylan();
  if (sekundCount > 0) {
    interID = setInterval(() => {
      sekundCount--;
      soatTahrirchi();

      if (sekundCount <= 0) {
        clearInterval(interID);
      }
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(interID);
});

reset.addEventListener("click", () => {
  clearInterval(interID);
  sekundCount = 0;
  soatTahrirchi();
});
