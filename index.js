// 連打で画面が拡大縮小するのを防止
document.addEventListener("dblclick", function (e) { e.preventDefault(); }, { passive: false });


const main = document.getElementById('main');
const start_omikuji = document.getElementById('start_omikuji');
const pre_omikuji = document.getElementById('pre_omikuji');
const under_title = document.getElementById('under_title');


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
    under_title.classList.add('hidden');
    start_omikuji.classList.add('hidden');
    pre_omikuji.classList.remove('hidden');
    pre_omikuji.classList.add('pre_omikuji');
    setTimeout(() => {
      pre_omikuji.classList.add('hidden');
      resolve();
    },3000);
  });
}

const choiceOmikuji = () => {
  const num = randRange(0, omikuji.length-1);
  const omikuji_img = document.createElement('img');
  omikuji_img.setAttribute('src', omikuji[num]);
  omikuji_img.classList.add('omikuji_result');
  main.appendChild(omikuji_img);
  omikuji_img.classList.add('fadein');
}

const omikujiStart = async () => {
  await startUp();
  choiceOmikuji();
}


start_omikuji.addEventListener('click', function() {
  omikujiStart();
});




