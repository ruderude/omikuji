// 連打で画面が拡大縮小するのを防止
document.addEventListener("dblclick", function (e) { e.preventDefault(); }, { passive: false });

const omikuji = [
  {result: "凶", image: "./img/omikuji_kyou-min.png"},
  {result: "大凶", image: "./img/omikuji_daikyou-min.png"},
  {result: "吉", image: "./img/omikuji_kichi-min.png"},
  {result: "末吉", image: "./img/omikuji_suekichi-min.png"},
  {result: "小吉", image: "./img/omikuji_syoukichi-min.png"},
  {result: "中吉", image: "./img/omikuji_chuukichi-min.png"},
  {result: "大吉", image: "./img/omikuji_daikichi-min.png"}
];

let result = "";
const main = document.getElementById('main');
const startOmikuji = document.getElementById('start_omikuji');
const preOmikuji = document.getElementById('pre_omikuji');
const underTitle = document.getElementById('under_title');
const resetBtnArea = document.getElementById('reset_btn_area');
const resetBtn = document.getElementById('reset_btn');
const twitterArea = document.getElementById('twitter_area');
const twitterShare = document.getElementById('twitter_share');

const init = () => {
  const omikujiImg = document.getElementsByClassName('omikuji_result');
  for (let i = 0; i < omikujiImg.length; i++) {
    omikujiImg[i].remove();
  }
  underTitle.classList.remove('hidden');
  startOmikuji.classList.remove('hidden');
  preOmikuji.classList.add('hidden');
  preOmikuji.classList.remove('pre_omikuji');
  resetBtnArea.classList.add('hidden');
  twitterArea.classList.add('hidden');
}


const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const startUp = () => {
  underTitle.classList.add('hidden');
  startOmikuji.classList.add('hidden');
  preOmikuji.classList.remove('hidden');
  preOmikuji.classList.add('pre_omikuji');
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      preOmikuji.classList.add('hidden');
      resolve();
    },3000);
  });
}

const choiceOmikuji = () => {
  const num = randRange(0, omikuji.length-1);
  const omikujiImg = document.createElement('img');
  omikujiImg.setAttribute('src', omikuji[num].image);
  result = omikuji[num].result;
  omikujiImg.classList.add('omikuji_result');
  main.appendChild(omikujiImg);
  omikujiImg.classList.add('fadein');
}

const endOmikuji = () => {
  const url = `https://twitter.com/share?url=https://game.rude7.com/omikuji/&via=rude_rockers&related=rude_rockers&hashtags=hashtag,hashtag2&text=今日の運勢は、${result}!!`;
  twitterShare.setAttribute('href', url);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resetBtnArea.classList.remove('hidden');
      twitterArea.classList.remove('hidden');
      resolve();
    },1200);
  });
}

const omikujiStart = async () => {
  await startUp();
  choiceOmikuji();
  endOmikuji();
  console.log(result);
}

// クリックイベント
startOmikuji.addEventListener('click', function() {
  omikujiStart();
});

resetBtn.addEventListener('click', function() {
  init();
});

window.onload = () => {
  init();
}



