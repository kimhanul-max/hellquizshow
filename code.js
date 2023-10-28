const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const open = document.querySelector(".open");
const dialog = document.querySelector("dialog");

open.addEventListener("click", () => {
    dialog.showModal();
});
function showBtn() {
    open.style.display = 'inline';
}
var arr = [];
let i = 0;
let j = 0;

function Uni(min, max, count) {
    if (max - min + 1 < count) {
      // 범위 내에 요청된 난수 개수를 생성할 수 없습니다.
      return null;
    }
  
    const uniqueIntegers = new Set();
    while (uniqueIntegers.size < count) {
      const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueIntegers.add(randomInt);
    }
  
    arr =  Array.from(uniqueIntegers);
  }
  Uni(0, container.children.length - 1, container.children.length);
function createQuiz() {
    container.children[arr[j]].classList.add("inv");
    if (j < container.children.length - 1) {
        j++;
    }
    container.children[arr[j]].classList.remove("inv");
}
function init() {
    container.children[arr[j]].classList.remove("inv");
}
init();
btn.addEventListener("click", createQuiz);
