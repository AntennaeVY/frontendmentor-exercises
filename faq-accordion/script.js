const ICON_PLUS_SRC = "./assets/images/icon-plus.svg";
const ICON_MINUS_SRC = "./assets/images/icon-minus.svg";

const details = document.querySelectorAll("details");

details.forEach((detail) => {
  detail.addEventListener("click", (event) => {
    event.preventDefault();
    closeDetails(event.currentTarget);
  });
});

function closeDetails(target) {
  details.forEach((detail) => {
    const icon = detail.querySelector("img");

    if (detail != target) {
      detail.open = false;
      icon.src = ICON_PLUS_SRC;
    } else {
      detail.open = !detail.open;
      icon.src = detail.open ? ICON_MINUS_SRC : ICON_PLUS_SRC;
    }
  });
}
