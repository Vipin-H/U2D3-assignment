const expenses  = [
    { name: "Food", amount: 50},
    { name: "Transportation", amount: 30},
    { name: "Internet", amount: 45},
    { name: "Groceries", amount: 80}
];  

// Function to calculate the total amount of all expenses
function total(expenses){
    // Use reduce to sum the 'amount' field of each object in the array
    var out = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return out;
}

var totalexpenses = total(expenses);

// Output the total expenses
console.log(totalexpenses);
