const result = document.querySelector('#result');
const secInput = document.querySelector('#secInput');
const firstInput = document.querySelector('#firstInput');
const btnAdd = document.querySelector('#add');
const btnSub = document.querySelector('#sub');
const btnMul = document.querySelector('#mul');
const btnDiv = document.querySelector('#div');
const btnNum = document.querySelectorAll('.number');
const btnEqual = document.querySelector('#equal');
const btnReset = document.querySelector('#reset');
const zeroDay = document.querySelector('#zero');

let TMP = [0];
let ALU = [];
result.innerHTML = 0;   

const add = function(a,b){return a+b};
const sub = function(a,b){return a-b};
const mul = function(a,b){return a*b};
const div = function(a,b){return a/b};

btnDiv.addEventListener('click', () => {ALU[0] = div;  if(TMP[1]){handleEqual(); ALU[0] = div;}});
btnMul.addEventListener('click', () => {ALU[0] = mul;  if(TMP[1]){handleEqual(); ALU[0] = mul;}});
btnSub.addEventListener('click', () => {ALU[0] = sub;  if(TMP[1]){handleEqual(); ALU[0] = sub;}});
btnAdd.addEventListener('click', () => {ALU[0] = add;  if(TMP[1]){handleEqual(); ALU[0] = add;}});

function handleEqual() {
    if(TMP[1] === undefined) {
        result.innerHTML = TMP[0];
        secInput.innerHTML = "";
        firstInput.innerHTML = "";
    } else{
        result.innerHTML = ALU[0](TMP[0], TMP[1]);
        TMP[0] = ALU[0](TMP[0], TMP[1]);
        TMP[1] = undefined;
        ALU[0] = undefined;  
        secInput.innerHTML = "";
        firstInput.innerHTML = "";
    }
}

btnEqual.addEventListener('click', handleEqual);

btnReset.addEventListener('click', ()=>{TMP[0]=0; ALU[0]=undefined; result.innerHTML=0;  secInput.innerHTML = ""; firstInput.innerHTML = "";});



function handleInputNumber(event) {
    const numText = event.target.innerHTML;
    console.log(numText, result.innerHTML)
    if(result.innerHTML==="0" && numText==="0"){
        firstInput.innerHTML = "";
        secInput.innerHTML = "";
    } else{
        if(ALU[0]){
            result.innerHTML = "";
            firstInput.innerHTML = "";
            secInput.innerHTML = secInput.innerHTML + numText;
            TMP[1] =  parseFloat(secInput.innerHTML, 10);   
        } else {
            result.innerHTML = "";
            secInput.innerHTML = "";
            firstInput.innerHTML = firstInput.innerHTML + numText;
            TMP[0] = parseFloat(firstInput.innerHTML, 10); 
        }   

    }
}

for(i=0; i<btnNum.length; i++) {
    btnNum[i].addEventListener('click', handleInputNumber);
    
}
