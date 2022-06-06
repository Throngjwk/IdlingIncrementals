let number = 3;
let logratrim = 0;
let double_logratim = 0;
let mulit = 1;
let tickspeed = 1;
let cost1number = 2;
let cost1log = 0;
let cost1dlog = 0;

function alwaysTick(wait) {
    setInterval(() => {
        number = number * mulit
        document.getElementById("zeros").innerHTML = ConvertTheNormal(number, logratrim, double_logratim) + " Zeros";
        document.getElementById("cost1").innerHTML = "Increase by 0.01 \nCost:" + ConvertTheNormal(cost1number, cost1log, cost1dlog) + " zeros";
        if (double_logratim > 3 && logratrim > 5) {
            document.getElementById("trans").innerHTML = "Coming soon..."
        }
    }, wait * 1000);
}

function updateLogratrim() {
    setInterval(() => {
        if (number > 10) {
            number = 1.2;
            if (double_logratim == -Infinity) {
                logratrim = logratrim + Math.pow(10, 0)
            } else {
                logratrim = logratrim + Math.pow(10, 0 - double_logratim)
            }
        }
        if (logratrim > 10) {
            logratrim = 1;
            if (double_logratim == -Infinity) {
                double_logratim = 1;
            } else {
                double_logratim = double_logratim + 1
            }
        }
        if (cost1number > 10) {
            cost1number = 1.2;
            if (cost1dlog == -Infinity) {
                cost1log = cost1log + Math.pow(10, 0)
            } else {
                cost1log = cost1log + Math.pow(10, 0 - cost1dlog)
            }
        }
        if (cost1log > 10) {
            cost1log = 1;
            if (cost1dlog == -Infinity) {
                cost1dlog = 1;
            } else {
                cost1dlog = cost1dlog + 1
            }
        }
    }, 1000);
}

function ConvertTheNormal(num, log, dlog) {
    if (double_logratim > 19) {
        if (double_logratim > 1e20) {
            return "eee" + Math.log10(dlog);
        } else {
            return "ee" + dlog + Math.log10(log);
        }
    } else {
        return num + "e" + log * Math.pow(10, dlog);
    }
}

document.getElementById("cost1").onclick = () => {
    number = number / cost1number;
    cost1number = cost1number * 2;
    mulit = mulit * 1.2;
}

alwaysTick(tickspeed)
updateLogratrim()