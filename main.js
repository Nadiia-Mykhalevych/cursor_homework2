let usdSell = 28.3;
let usdBuy = 29.1;
let eurSell = 32.2;
let eurBuy = 33.1;
let plnSell = 6.90;
let plnBuy = 7.3;

document.getElementById('usdSell').innerText = usdSell;
document.getElementById('usdBuy').innerText = usdBuy;
document.getElementById('eurSell').innerText = eurSell;
document.getElementById('eurBuy').innerText = eurBuy;
document.getElementById('plnSell').innerText = plnSell;
document.getElementById('plnBuy').innerText = plnBuy;

let btnBuy = document.getElementById('btnBuy');
let btnSell = document.getElementById('btnSell');
let resultOperation = document.getElementById('result');

btnBuy.onclick = () => {
    const n = document.getElementById('curSelect').options.selectedIndex;
    const curSelect = document.getElementById('curSelect').options[n].text;
    const sum = document.getElementById('sum').value;
    calcResultBuy(curSelect, sum);
}

btnSell.onclick = () => {
    const n = document.getElementById('curSelect').options.selectedIndex;
    const curSelect = document.getElementById('curSelect').options[n].text;
    const sum = document.getElementById('sum').value;
    calcResultSell(curSelect, sum);
}

calcResultBuy = (curSelect, sum) => {
    let result;
    switch (curSelect) {
        case "USD":
            result = usdBuy * sum;
            break;
        case "EUR":
            result = eurBuy * sum;
            break;
        case "PLN":
            result = plnBuy * sum;
            break;
    }
    resultOperation.innerText = `Для купівлі ${sum} ${curSelect} вам потрібно ${result.toFixed(2)} грн`;
}

calcResultSell = (curSelect, sum) => {
    let result;
    switch (curSelect) {
        case "USD":
            result = usdSell * sum;
            break;
        case "EUR":
            result = eurSell * sum;
            break;
        case "PLN":
            result = plnSell * sum;
            break;
    }
    resultOperation.innerText = `За продаж ${sum} ${curSelect} ви отримаєте ${result.toFixed(2)} грн`;
}

