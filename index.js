// 連打で画面が拡大縮小するのを防止
document.addEventListener("dblclick", function (e) { e.preventDefault(); }, { passive: false });

const omikuji = [
  "./img/omikuji_daikyou-min.png",
  "./img/omikuji_kyou-min.png",
  "./img/omikuji_kichi-min.png",
  "./img/omikuji_suekichi-min.png",
  "./img/omikuji_syoukichi-min.png",
  "./img/omikuji_chuukichi-min.png",
  "./img/omikuji_daikichi-min.png",
];


const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const startUp = () => {
  return new Promise((resolve, reject) => {
    underTitle.classList.add('hidden');
    startOmikuji.classList.add('hidden');
    preOmikuji.classList.remove('hidden');
    preOmikuji.classList.add('pre_omikuji');
    setTimeout(() => {
      preOmikuji.classList.add('hidden');
      resolve();
    },3000);
  });
}

const choiceOmikuji = () => {
  const num = randRange(0, omikuji.length-1);
  const omikujiImg = document.createElement('img');
  omikujiImg.setAttribute('src', omikuji[num]);
  omikujiImg.classList.add('omikuji_result');
  main.appendChild(omikujiImg);
  omikujiImg.classList.add('fadein');
}

const omikujiStart = async () => {
  await startUp();
  choiceOmikuji();
}

const main = document.getElementById('main');
const startOmikuji = document.getElementById('start_omikuji');
const preOmikuji = document.getElementById('pre_omikuji');
const underTitle = document.getElementById('under_title');

// クリックイベント
startOmikuji.addEventListener('click', function() {
  omikujiStart();
});




