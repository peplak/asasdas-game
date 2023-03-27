const wrapper = document.querySelector(".wrapper");
const difficultyConatainer = document.querySelector(".block-choose");
const difficultyBtns = document.querySelectorAll(".block-difficulty");

const insaneMode = document.querySelector(".block-insane");
const insaneChatField = document.querySelector(".block-chat-insane");
const insaneTextArea = document.querySelector("#text");
const insaneSubmitBtn = document.querySelector("#insaneSubmit");
const insaneGameOver = document.querySelector(".block-end-insane");
const insaneWin = document.querySelector(".block-win-insane");

const easyMode = document.querySelector(".block-easy");
const easyBtn = document.querySelector("#leave");
const easyWin = document.querySelector(".block-win-easy");

const mediumMode = document.querySelector(".block-medium");

let difficulty = 0;

difficultyBtns.forEach((difficultyBtn) => {
  difficultyBtn.addEventListener("click", () => {
    if (difficultyBtn.id == "easy") {
      difficulty = 1;
      difficultyConatainer.remove();
      easyMode.classList.toggle("hidden");
    }
    if (difficultyBtn.id == "medium") {
      difficulty = 2;
      difficultyConatainer.remove();
      mediumMode.classList.toggle("hidden");
    }
    if (difficultyBtn.id == "insane") {
      difficulty = 3;
      difficultyConatainer.remove();
      insaneMode.classList.toggle("hidden");
    }
  });
});

insaneSubmitBtn.addEventListener("click", () => {
  let insaneText = (insaneTextArea.value = insaneTextArea.value
    .trim()
    .toLowerCase());
  if (insaneText == "я завалю ебало") {
    insaneChatField.remove();
    insaneWin.classList.toggle("hidden");
  } else {
    insaneChatField.remove();
    insaneGameOver.classList.toggle("hidden");
  }
});

easyBtn.addEventListener("click", () => {
  easyBtn.classList.toggle("hidden");
  easyWin.classList.toggle("hidden");
});
