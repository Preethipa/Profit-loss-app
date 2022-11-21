const initialPrice = document.querySelector("#initial-price");
const stackQty = document.querySelector("#stack-qty");
const currentPrice = document.querySelector("#current-price");

const tellmeBtn = document.querySelector("#tellme-btn");
const outputShown = document.querySelector("#output-shown");

tellmeBtn.addEventListener("click", submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stackQty.value);
    var cp = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, cp);
}


function calculateProfitAndLoss(initialprice, stackqty, currentprice){
    if(initialprice > currentprice){
        var loss = (initialprice - currentprice)*stackqty;
        var lossPercentage = (loss/initialprice)*100;

       showOutput(`Hey!😔 you got the loss is ${loss} and the percentage is ${lossPercentage}%`)
    }

    else if(currentprice > initialprice){
        var profit = (currentprice - initialprice)*stackqty;
        var profitPercentage = (profit/currentprice)*100;

       showOutput(`Yay!🤩 you got the profit is ${profit} and the percentage is ${profitPercentage}%`)
    }

    else{
        showOutput("No pain no gain and No gain no pain🙃"); 
    }

}

function showOutput(msg){
    
    outputShown.innerText = msg;
}
