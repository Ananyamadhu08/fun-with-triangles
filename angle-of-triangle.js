const formTriangle = document.querySelector("#form-triangle");
const inputAngles = document.querySelectorAll(".input-angle");
const outputDiv = document.querySelector("#is-triangle");

let angles = [];

formTriangle.addEventListener("submit", formTriangleHandler);

const formTriangleHandler = e => {
  e.preventDefault();

  //add the angles input
  for (i = 0; i < inputAngles.length; i++) {
    angles[i] = Number(inputAngles[i].value);
  }

  let sum = 0;
  angles.map((angle) => {
    sum = sum + angle;
  });

  if (sum === 180) {
    outputDiv.innerText = "Yuhuaaa! these angles can make a triangle";
  } else {
    outputDiv.innerText = "Oopsss! these angles cannot make a triangle";
  }
}
