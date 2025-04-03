const processors = {
  camelCase: (str) =>
    str
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .map((word, i) => (i > 0 ? word[0]?.toUpperCase() + word.slice(1) : word))
      .join(""),

  reverse: (str) => [...str].reverse().join(""),
};

// DOM elements
const inputEl = document.getElementById("input-string");
const outputEl = document.getElementById("output-string");
const buttons = document.querySelectorAll("[data-action]");

// Event handlers
const handleButtonClick = (e) => {
  const action = e.target.dataset.action;
  outputEl.value = processors[action](inputEl.value);
};

// Event listeners
buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
