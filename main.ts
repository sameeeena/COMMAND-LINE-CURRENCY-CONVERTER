import inquirer from "inquirer"

const currency :any = {
    USD: 1, // BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let userAnswer = await inquirer.prompt([{
    name: "From",
    message: "enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP","INR","PKR"]
},{
    name: "to",
    message: "enter to currency",
    type: "list",
    choices:["USD", "EUR", "GBP","INR","PKR"]
},
{
    name: "amount",
    message: "Enter your amount",
    type: "number"
}
]
)
let fromAmount = currency[userAnswer.From]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount

let baseAmount = amount/fromAmount; // 5000/280 exchange rate
let convertedAmount = baseAmount * toAmount;

console.log(Math.round(convertedAmount));
