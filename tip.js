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
const opcaoUsuario = document.querySelector(".opcao__user");
const caixaCustom = document.querySelector(".custom");
let resultTipPerPerson = document.querySelector(".per__person");
let resultTotalPerPerson = document.querySelector(".per__total");
let message = document.querySelector(".message");



// Loop e Listener para identificar opção do usuário e executar calculo ou alerta de informação incompleta
opcaoPorcentagem.forEach(botao => {
    botao.addEventListener("click", () => {
        naoDeixaMaisDeUmBotaoSelecionado();
        if(botao.textContent === "5%") {
            document.getElementById("five").checked = true;
            calculo();
            botao.classList.add("selected");
        }
        if(botao.textContent === "10%") {
            document.getElementById("ten").checked = true;
            calculo();
            botao.classList.add("selected");
        }
        if(botao.textContent === "15%") {
            document.getElementById("ft").checked = true;
            calculo();
            botao.classList.add("selected");
        }
        if(botao.textContent === "25%") {
            document.getElementById("tf").checked = true;
            calculo();
            botao.classList.add("selected");
        }
        if(botao.textContent === "50%") {
            document.getElementById("fift").checked = true;
            calculo();
            botao.classList.add("selected");
        }
        if(botao.textContent === "") {
            document.getElementById("cus").checked = true;
            calculo();
            botao.classList.add("selected");
        }
    });
})

// Listener para realizar reset da calculadora quando usuário der click no botão reset
botaoReset.addEventListener("click", () => resetCalculator());

// Função para realizar cálcula da gorjeta
function calculo() {
    message.textContent = "";
    bill.classList.remove("incorrect");
    numberPeople.classList.remove("incorrect");
    caixaCustom.classList.remove("incorrect");
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
    if(custom.checked && opcaoUsuario.value !== "0") {
        checkCaixaCustom();
        let calculoPorPessoa = ((valorConta*(Number(opcaoUsuario.value)/100))/qtyPessoas).toFixed(2); 
        let calculoTotal =  ((valorConta*((Number(opcaoUsuario.value)/100)) + valorConta)/qtyPessoas).toFixed(2);
        resultTipPerPerson.textContent = `$${calculoPorPessoa}`;
        resultTotalPerPerson.textContent = `$${calculoTotal}`;
    }
    if(numberPeople.value === "0" ||
        numberPeople.value === ""
    ) 
    {
        message.textContent = "can't be zero";
        resultTipPerPerson.textContent = "$0.00";
        resultTotalPerPerson.textContent = "$0.00";
        bill.classList.add("incorrect");
        numberPeople.classList.add("incorrect");
    }
    if(opcaoUsuario.value === "0" &&
        custom.checked === true ||
        opcaoUsuario.value ==="" &&
        custom.checked === true 
    ) 
    {
        message.textContent = "can't be zero";
        resultTipPerPerson.textContent = "$0.00";
        resultTotalPerPerson.textContent = "$0.00";
    }
}

// Função para limpar toda a calculadora
function resetCalculator() {
    naoDeixaMaisDeUmBotaoSelecionado();
    message.textContent = "";
    bill.classList.remove("incorrect");
    numberPeople.classList.remove("incorrect");
    caixaCustom.classList.remove("incorrect");
    bill.value = "";
    numberPeople.value = "";
    document.getElementById("five").checked = false;
    document.getElementById("ten").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("tf").checked = false;
    document.getElementById("fift").checked = false;
    document.getElementById("cus").checked = false;
    resultTipPerPerson.textContent = "$0.00";
    resultTotalPerPerson.textContent = "$0.00";
}

// Função para checar a opção manual feita pelo usuário
function checkCaixaCustom() {
    selecaoOpcao.forEach(botao => {
        if(botao.textContent === "") {
            if(botao.checked === true && opcaoUsuario.vallue ==="0"||botao.checked === true && opcaoUsuario.value ==="") {
            caixaCustom.classList.add("incorrect");
            }   
        } 
    })
}

//Função para não deixar mais de um botao ativo
function naoDeixaMaisDeUmBotaoSelecionado() {
    opcaoPorcentagem.forEach(botao => {
        if(botao.classList.contains("selected")) {
            botao.classList.remove("selected");
        }
    })
}