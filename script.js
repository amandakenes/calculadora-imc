const inputs = document.querySelector(".input-area");
const knowMore = document.querySelector(".know-more");
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
  background-color: #00246b; backdrop-filter: blur(5px); 
  border-radius: 5px; padding: 10px; margin: 10px 0
  `;
classification.style.cssText = `
  visibility: hidden; color: white; text-align: center; font-size: 20px;
  font-weight: 800; 
`;

function displayKnowMore() {
	knowMore.style.cssText = `
  text-align: center; font-size: 20px; 
  color: white; margin: 30px 0 0 0;
  `;
	knowMore.innerHTML = `
  <p>Quer saber mais sobre IMC?
  <a style="color: #00246b; cursor: pointer; text-shadow: none;"
   href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal" target="_blank">
  clique aqui
  </a></p>
  `;
}

function displayUnderweight() {
	classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI.underweight}`;
	classification.style.visibility = "visible";
	result.appendChild(classification);
}

function displayNormalWeight() {
	classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI["normal-weight"]}`;
	classification.style.visibility = "visible";
	result.appendChild(classification);
}
function displayOverweight() {
	classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI.overweight}`;
	classification.style.visibility = "visible";
	result.appendChild(classification);
}
function displayObese2() {
	classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI.obese2}`;
	classification.style.visibility = "visible";
	result.appendChild(classification);
}
function displayObese3() {
	classification.innerHTML = `CLASSIFICAÇÃO: ${classBMI.obese3}`;
	classification.style.visibility = "visible";
	result.appendChild(classification);
}

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
			displayUnderweight();
			displayKnowMore();
		} else if (resultBMI >= 18.5 && resultBMI < 25) {
			displayNormalWeight();
			displayKnowMore();
			result.appendChild(classification);
		} else if (resultBMI >= 25 && resultBMI < 30) {
			displayOverweight();
			displayKnowMore();
			result.appendChild(classification);
		} else if (resultBMI >= 30 && resultBMI < 40) {
			displayObese2();
			displayKnowMore();
			result.appendChild(classification);
		} else {
			displayObese3();
			displayKnowMore();
		}
	} else {
		alert("Insira dados válidos");
	}
});
