"use strict";

document.querySelector(".tweet__btn").addEventListener("click", function () {
  console.log("fucked up");
  document.querySelector(".tweet__here").style.display = "block";
  document.querySelector("main").style.display = "none";
});

document.querySelector(".close").addEventListener("click", function () {
  console.log("fucked up");

  document.querySelector(".tweet__here").style.display = "none";
  document.querySelector(".main").style.display = "flex";
});

document
  .querySelector(".tweet__btn__second")
  .addEventListener("click", function () {
    console.log("fucked up");

    document.querySelector(".tweet__here").style.display = "none";
    document.querySelector(".main").style.display = "flex";
  });
