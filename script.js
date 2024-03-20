const inputs = document.querySelector(".input-area");
const result = document.createElement("p");
const classification = document.createElement("p");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const btn = document.querySelector("button");
const classBMI = {
  underweight: "Magreza",
  "normal-weight": "Peso ideal",
  overweight: "Sobrepeso",
  obese2: "Obesidade",
  obese3: "Obesidade grave",
};

result.style.cssText = `
  visibility: hidden; color: white; text-align; center; font-size: 22px; 
  margin: 0 auto; background-color: #00246b; backdrop-filter: blur(3px); 
  border-radius: 5px; padding: 10px; margin: 10px 0
  `;
classification.style.cssText = `
  visibility: hidden; color: white; text-align: center; font-size: 20px;
  font-weight: 800; 
`;

btn.addEventListener("click", () => {
  const weightInput = weight.value;
  const heightInput = height.value;
  console.log(weightInput + " " + heightInput);
  if (weightInput && heightInput) {
    let resultBMI = weightInput / (heightInput * heightInput);
    result.innerHTML = `Seu IMC é de ${resultBMI.toFixed(1)}`;
    result.style.visibility = "visible";
    inputs.appendChild(result);
    if (resultBMI < 18.5) {
      classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI.underweight}`;
      classification.style.visibility = "visible";
      result.appendChild(classification);
    } else if (resultBMI >= 18.5 && resultBMI < 25) {
      classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI["normal-weight"]}`;
      classification.style.visibility = "visible";
      result.appendChild(classification);
    } else if (resultBMI >= 25 && resultBMI < 30) {
      classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI.overweight}`;
      classification.style.visibility = "visible";
      result.appendChild(classification);
    } else if (resultBMI >= 30 && resultBMI < 40) {
      classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI.obese2}`;
      classification.style.visibility = "visible";
      result.appendChild(classification);
    } else {
      classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI.obese3}`;
      classification.style.visibility = "visible";
      result.appendChild(classification);
    }
  } else {
    alert("Insira dados válidos");
  }
});
