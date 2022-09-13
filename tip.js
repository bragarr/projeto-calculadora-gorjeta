let opcaoPorcentagem = document.querySelectorAll(".opcao__porcentagem");
let selecaoOpcao = document.querySelectorAll(".percent");
let bill = document.querySelector(".bill__field");
let numberPeople = document.querySelector(".people__field");
let botaoReset = document.querySelector(".button__reset");
const fivePercent = document.getElementById("five");
const tenPercent = document.getElementById("ten");
const fifteenPercent = document.getElementById("ft");
const twentyFivePercent = document.getElementById("tf");
const fiftyPercent = document.getElementById("fift");
const custom = document.getElementById("cus");
let resultTipPerPerson = document.querySelector(".per__person");
let resultTotalPerPerson = document.querySelector(".per__total");

opcaoPorcentagem.forEach(botao => {
    botao.addEventListener("click", () => {
        if(botao.textContent === "5%") {
            document.getElementById("five").checked = true;
            botao.classList.toggle("selected");
        }
        if(botao.textContent === "10%") {
            document.getElementById("ten").checked = true;
            botao.classList.toggle("selected");
        }
        if(botao.textContent === "15%") {
            document.getElementById("ft").checked = true;
            botao.classList.toggle("selected");
        }
        if(botao.textContent === "25%") {
            document.getElementById("tf").checked = true;
            botao.classList.toggle("selected");
        }
        if(botao.textContent === "50%") {
            document.getElementById("fift").checked = true;
            botao.classList.toggle("selected");
        }
        if(botao.textContent === "") {
            document.getElementById("cus").checked = true;
        }
    });
})

function calculo() {
    let valorConta = +bill.value;
    let qtyPessoas = +numberPeople.value;
    if(fivePercent.checked) {    
        let calculoPorPessoa = ((valorConta*(fivePercent.dataset.value))/qtyPessoas).toFixed(2); 
        let calculoTotal =  ((valorConta*(fivePercent.dataset.value) + valorConta)/qtyPessoas).toFixed(2);
        resultTipPerPerson.textContent = `$${calculoPorPessoa}`;
        resultTotalPerPerson.textContent = `$${calculoTotal}`;
    }
    if(tenPercent.checked) {
        let calculoPorPessoa = ((valorConta*(tenPercent.dataset.value))/qtyPessoas).toFixed(2); 
        let calculoTotal =  ((valorConta*(tenPercent.dataset.value) + valorConta)/qtyPessoas).toFixed(2);
        resultTipPerPerson.textContent = `$${calculoPorPessoa}`;
        resultTotalPerPerson.textContent = `$${calculoTotal}`;
    }
    if(fifteenPercent.checked) {
        let calculoPorPessoa = ((valorConta*(fifteenPercent.dataset.value))/qtyPessoas).toFixed(2); 
        let calculoTotal =  ((valorConta*(fifteenPercent.dataset.value) + valorConta)/qtyPessoas).toFixed(2);
        resultTipPerPerson.textContent = `$${calculoPorPessoa}`;
        resultTotalPerPerson.textContent = `$${calculoTotal}`;
    }
    if(twentyFivePercent.checked) {
        let calculoPorPessoa = ((valorConta*(twentyFivePercent.dataset.value))/qtyPessoas).toFixed(2); 
        let calculoTotal =  ((valorConta*(twentyFivePercent.dataset.value) + valorConta)/qtyPessoas).toFixed(2);
        resultTipPerPerson.textContent = `$${calculoPorPessoa}`;
        resultTotalPerPerson.textContent = `$${calculoTotal}`;
    }
    if(fiftyPercent.checked) {
        let calculoPorPessoa = ((valorConta*(fiftyPercent.dataset.value))/qtyPessoas).toFixed(2); 
        let calculoTotal =  ((valorConta*(fiftyPercent.dataset.value) + valorConta)/qtyPessoas).toFixed(2);
        resultTipPerPerson.textContent = `$${calculoPorPessoa}`;
        resultTotalPerPerson.textContent = `$${calculoTotal}`;
    }
    if(custom.checked) {
        let calculoPorPessoa = ((valorConta*(custom.dataset.value))/qtyPessoas).toFixed(2); 
        let calculoTotal =  ((valorConta*(custom.dataset.value) + valorConta)/qtyPessoas).toFixed(2);
        resultTipPerPerson.textContent = `$${calculoPorPessoa}`;
        resultTotalPerPerson.textContent = `$${calculoTotal}`;
    }
}

function resetCalculator() {
    bill.value = "";
    numberPeople.value = "";
    document.getElementById("five").checked = false;
    document.getElementById("ten").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("tf").checked = false;
    document.getElementById("fift").checked = false;
    document.getElementById("cus").checked = false;
}

botaoReset.addEventListener("click", () => resetCalculator());

