import "../scss/main.scss";

const textarea = document.querySelector(".textarea--js");
const save = document.querySelector(".save--js");
const load = document.querySelector(".load--js");

const currentVAlue = localStorage.getItem("entry");

if (currentVAlue) {
  document.querySelector(".info--js").innerHTML = "👾";
}

save.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("entry", textarea.value);
  if (textarea.value) {
    document.querySelector(".info--js").innerHTML = "👾";
  } else {
    document.querySelector(".info--js").innerHTML = "";
  }
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("entry");
});
