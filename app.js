const btnsMsg = document.querySelectorAll(".btn__msg");
const btnsClose = document.querySelectorAll(".btn__close");
const btnViewAll = document.querySelector(".box__btn");
const viewMsgs = document.querySelectorAll(".active");
const personsView = document.querySelectorAll("li");
const allView = document.querySelector(".box__wrpaper");
const all10 = document.querySelector(".all-10");
const all15 = document.querySelector(".all-15");
const allBox = document.querySelector(".box");

const closeAllViews = () => {
  viewMsgs.forEach((viewMsg, index) => {
    viewMsg.classList.add("hiden");
    btnsClose[index].classList.remove("show");
    btnsMsg[index].classList.remove("hiden");
    personsView[index].classList.remove("activeView");
  });
};
const openViewMsg = (index) => {
  closeAllViews();

  if (viewMsgs[index]) {
    viewMsgs[index].classList.remove("hiden");
  }

  if (btnsMsg[index]) {
    btnsMsg[index].classList.add("hiden");
  }

  if (btnsClose[index]) {
    btnsClose[index].classList.add("show");
  }

  personsView.forEach((personView, idx) => {
    if (btnsClose[idx] && btnsClose[idx].classList.contains("show")) {
      personView.classList.add("activeView");
    }
  });
};

const closeView = (index) => {
  viewMsgs[index].classList.add("hiden");
  btnsClose[index].classList.remove("show");
  btnsMsg[index].classList.remove("hiden");
  personsView[index].classList.remove("activeView");
};

btnsMsg.forEach((btnMsg, index) => {
  btnMsg.addEventListener("click", () => openViewMsg(index));
});

btnsClose.forEach((btnClose, index) => {
  btnClose.addEventListener("click", () => closeView(index));
});

const closeViewAll = () => {
  if (
    !all10.classList.contains("hiden") &&
    !all15.classList.contains("hiden")
  ) {
    allView.classList.remove("show1");
    all10.classList.add("hiden");
    all15.classList.add("hiden");
  }
};

const showAll = () => {
  allView.classList.add("show1");

  if (!all10.classList.contains("hiden")) {
    all15.classList.remove("hiden");
  }
  if (allView.classList.contains("show1")) {
    all10.classList.remove("hiden");
  }

  if (!all15.classList.contains("hiden")) {
    btnViewAll.innerHTML = "VIEW LESS";
  } else {
  }
};

btnViewAll.addEventListener("click", () => {
  const orginalText = "VIEW ALL";

  if (
    !all10.classList.contains("hiden") &&
    !all15.classList.contains("hiden")
  ) {
    closeViewAll();
    btnViewAll.innerHTML = orginalText;
  } else {
    showAll();
  }
});
