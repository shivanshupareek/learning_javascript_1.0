/*
function bankAccount (owner) {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
            console.log(`${owner} has a total balance of ₹${balance}`)
        },
        withdraw(amount) {
            if (amount > balance) {
                const remaining = amount - balance
                console.log(`insufficient funds! lacking ₹${remaining}`)
            } else {
                balance -= amount
                console.log(`${owner} has a total balance of ₹${balance}`)
            }
        }
    }
}

const currentOwner = bankAccount("Shivanshu")
console.log(currentOwner.deposit(1000))
console.log(currentOwner.deposit(1000))
console.log(currentOwner.withdraw(1000))
console.log(currentOwner.withdraw(1500))
*/

/*

Case Study: “Smart Checkout Quantity Tracker”

You’re building a small feature for an e-commerce site’s shopping cart.
Each item in the cart has:
	•	a name
	•	a price per unit
	•	a quantity

When a user clicks “+”, the quantity increases by 1.
When they click, “−”, it decreases by 1 (but can’t go below 1).
The total price should automatically update each time.

Your tasks:
	1.	Create a small program (no HTML needed — just JS simulation) where:
	•	You start with one product:
{ name: "Wireless Mouse", price: 799, quantity: 1 }
	2.	Add two functions:
	•	increment() — increases the quantity and updates total.
	•	decrement() — decreases the quantity (not below 1) and updates total.
	3.	Log each step to the console like:
	        Quantity: 2 | Total: ₹1598
            Quantity: 1 | Total: ₹799
    4.	Bonus: If quantity reaches 5, log a message "Bulk discount unlocked"!
*/

let itemName = "Wireless mouse";
let pricePerUnit = 799;
let quantity = 1;
let total = pricePerUnit * quantity;

console.log(`Quantity: ${quantity} | Total: ₹${total}`);

function increment () {
    if (quantity >= 1 && quantity !== 5) {
        ++quantity
        let total = quantity * 799;
        return console.log(`Quantity: ${quantity} | Total: ₹${total}`)
    } else {
        return console.log("Bulk discount unlocked")
    }
}

function decrement () {
    if (quantity >= 1 ) {
        --quantity
        let total = quantity * 799;
        return console.log(`Quantity: ${quantity} | Total: ₹${total}`)
    } else if (quantity < 1) {
        return console.log("You have reached minimum order quantity")
    }
}

document.getElementById("addBtn").addEventListener("click", increment)
document.getElementById("minusBtn").addEventListener("click", decrement)
