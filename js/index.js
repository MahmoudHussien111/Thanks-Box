let att = document.querySelector(".attribution");
let select = document.querySelector(".Thank-you .Value span");
let form = document.querySelector(".attribution form");
let submit = document.querySelector(".attribution form input");
let spans = document.querySelectorAll(".attribution span");
let thankYou = document.querySelector(".Thank-you");

spans.forEach(function (ele) {
  ele.onclick = function () {
    spans.forEach(function (ele) {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
    select.innerHTML = ele.innerHTML;
  };
});
form.onsubmit = function (e) {
  e.preventDefault();
  att.style.display = "none";
  thankYou.style.cssText =
    "display: block; height: 405px; width: 374px; padding: 15px;transition: 0.3s";
};
