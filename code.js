const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const opens = document.querySelectorAll(".open");
const dialog = document.querySelector("dialog");
const choice = document.querySelectorAll(".choice");
const initBtn = document.querySelector(".initBtn");
var score = 0;
const socreBoard = document.querySelector(".score-board");
const ending = document.querySelector(".ending");

var audio = new Audio("timer.mp3");
let timer; // 타이머 변수
let timerDisplay = document.querySelector("#timer"); // 타이머 표시에 사용할 HTML 요소

function showModal(event) {
  event.parentNode.querySelector('dialog').showModal();
}
function txtChose(target) {
  target.style.color = "#00A9FF";
  for (let i = 0; i < choice.length; i++) {
      choice[i].classList.add("disabled");
  }
  audio.currentTime = 0; 
  audio.pause();
  timerDisplay.textContent = "1:00";
  clearInterval(timer); // 타이머를 정지합니다.
}
function chose(target) {
    target.style.backgroundColor = "#00A9FF";
    for (let i = 0; i < choice.length; i++) {
        choice[i].classList.add("disabled");
    }
    audio.currentTime = 0; 
    audio.pause();
    timerDisplay.textContent = "1:00";
    clearInterval(timer); // 타이머를 정지합니다.
}
function imgChose(target) {
  target.style.border = "solid 5px #00A9FF"
  for (let i = 0; i < choice.length; i++) {
      choice[i].classList.add("disabled");
  }
  audio.currentTime = 0; 
  audio.pause();
  timerDisplay.textContent = "1:00";
  clearInterval(timer); // 타이머를 정지합니다.
}
function showBtn(t) {
    t.querySelector(".open").style.display = 'inline';
}

var arr = [];
let i = 0;
let j = 0;

function Uni(min, max, count) {
    if (max - min + 1 < count) {
        return null;
    }

    const uniqueIntegers = new Set();
    while (uniqueIntegers.size < count) {
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueIntegers.add(randomInt);
    }

    arr = Array.from(uniqueIntegers);
}

Uni(0, container.children.length - 1, container.children.length);

function createQuiz() {          
      // 새로운 질문이 생성될 때 타이머를 시작합니다.
      audio.currentTime = 0; 
      timerDisplay.textContent = "1:00";
      clearInterval(timer); // 타이머를 정지합니다.
      startTimer();
  document.body.style.backgroundColor = "#272829";
    for (let i = 0; i < choice.length; i++) {
        choice[i].classList.remove("disabled");
    }
    container.children[arr[j]].classList.add("inv");
    if (j < 5) {
        j++;
    }
    container.children[arr[j]].classList.remove("inv");
    if (j === 5) {
      audio.pause();
      timerDisplay.textContent = " ";
      clearInterval(timer); // 타이머를 정지합니다.
      container.children[arr[j]].classList.add("inv");
      ending.style.display = "inline";
      socreBoard.innerText = `${(score/5) * 100}점`
      setTimeout(function() {
        location.href = "index.html";
      }, 10000);
    }
}
function playAudio() {
  audio.play();
}
function startTimer() {
  timerDisplay.style.color = "white";
    let seconds = 60;
    timer = setInterval(function() {
      if (seconds > 0) {
        seconds--;
      }
      if (seconds <= 0) {
        document.body.style.backgroundColor = "#ED2B2A";
        clearInterval(timer); 
        audio.currentTime = 0; 
        audio.pause();
      }
        // 타이머 표시를 업데이트합니다.
        timerDisplay.textContent = formatTime(seconds);
        playAudio();
        if (seconds < 20) {
          timerDisplay.style.color = "red";
        }
    }, 1000); // 1초마다 타이머를 업데이트합니다.
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function init() {
    startTimer();
    container.children[arr[j]].classList.remove("inv");
}
init();

btn.addEventListener("click", createQuiz);
