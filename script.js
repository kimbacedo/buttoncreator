const controles = document.querySelector("#controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  showCSS();
  saveValues(name, value);
}

function showCSS() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((item) => {
    controles.elements[item].value = localStorage[item];
    handleStyle[item](localStorage[item]);
  });
  showCSS();
}
setValues();

controles.addEventListener("change", handleChange);

console.log(localStorage);
