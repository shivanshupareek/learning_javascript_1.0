
function bankAccount (owner) {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
            console.log(`${owner} has a total balance of ${balance}`)
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("insufficient funds")
            } else {
                balance -= amount
                console.log(`${owner} has a total balance of ${balance}`)
            }
        }
    }
}

const currentOwner = bankAccount("Shivanshu")
console.log(currentOwner.deposit(1000))
console.log(currentOwner.deposit(1000))
console.log(currentOwner.withdraw(1000))
console.log(currentOwner.withdraw(1500))
