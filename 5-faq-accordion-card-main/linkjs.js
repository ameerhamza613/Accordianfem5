"use strict";

const btns = document.querySelectorAll(".icon1");
//const tbox = document.querySelectorAll(".text-box");
console.log(btns);

btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const parent = e.target.parentNode.parentNode.parentNode;
    const headingColor = e.target.parentNode.parentNode;
    headingColor.style.color = "black";
    headingColor.style.fontWeight = "bold";
    parent.querySelector(".text-box").classList.toggle("hide");
  });
});
