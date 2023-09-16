const OPTIONS = ["Internship", "Pabau", "Employment", "Career"];

let optionsState = OPTIONS.map((option) => ({ name: option, checked: false }));

function mountOption(option) {
  const { name, checked } = option;
  const checkboxContainer = document.getElementById("checkboxContainer");
  const divWrapper = document.createElement("div");
  divWrapper.setAttribute("id", `div-${name}`);
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `input-${name}`);
  input.setAttribute("value", name);
  input.checked = checked;
  const label = document.createElement("label");
  label.innerText = name;

  divWrapper.appendChild(input);
  divWrapper.appendChild(label);
  checkboxContainer.appendChild(divWrapper);
}

function mountOptions(opsState) {
  for (const option of opsState) {
    mountOption(option);
  }
}

function clearOptions() {
  const checkboxContainer = document.getElementById("checkboxContainer");
  let child = checkboxContainer.lastElementChild;
  while (child) {
    checkboxContainer.removeChild(child);
    child = checkboxContainer.lastElementChild;
  }
}

function shuffleOptions() {
  let shuffledOptions = optionsState
    .map((value) => ({
      ...value,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ name, checked }) => ({ name, checked }));

  shuffledOptions = shuffledOptions.map((option) => {
    const { name, checked } = option;
    const input = document.getElementById(`input-${name}`);
    const isChecked = input?.checked;
    return {
      name,
      checked: isChecked,
    };
  });
  optionsState = shuffledOptions;
  const checkboxContainer = document.getElementById("checkboxContainer");
  clearOptions();
  mountOptions(optionsState);
}

function changeValues() {
  const checkboxContainer = document.getElementById("checkboxContainer");
  checkboxContainer.childNodes;
  for (const node of checkboxContainer.childNodes) {
    const input = node.childNodes[0];
    input.checked = Math.random() > 0.5;
  }
}

function showSelectedValues() {
  const selectedValues = document.getElementById("selectedValues");
  const checkboxContainer = document.getElementById("checkboxContainer");
  const nodes = checkboxContainer.childNodes;
  let textToShow = "Selected values: ";
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const input = node.childNodes[0];
    const label = node.childNodes[1].innerText;
    if (input.checked) {
      textToShow += `${label}, `;
    }
  }
  if (textToShow) {
    textToShow = textToShow.slice(0, -2);
  }
  selectedValues.innerText = textToShow;
}

document.addEventListener("DOMContentLoaded", function () {
  mountOptions(optionsState);
  shuffleBtn.addEventListener("click", shuffleOptions);
  changeBtn.addEventListener("click", changeValues);
  showBtn.addEventListener("click", showSelectedValues);
});
