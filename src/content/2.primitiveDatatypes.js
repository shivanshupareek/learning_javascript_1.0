
const string = "hello";                           // a text in JavaScript is called a string.

const number  = 10n;                             // a number in JS is called a number

const boolean = true;                           // only true or false values are called booleans

const bigInt = 12939;                           // any number with "n" at the end is a bigInt

const nullValue = null;                            // purposefully writing null as an initial value is called null

const SymbolValue = Symbol("hello");    // a unique value is called a symbol
const SymbolNewValue = Symbol("hello"); // a unique value is called a symbol

let undefinedValue;                                      // declaring a variable without initialising is called undefined

/*
// The difference between primitive data types and reference data types is essentially in itself.
The data in either primitive or referenced. These are the only two types.

==>When you copy a primitive data type, the copy has its own data, and after copying the actual data, the original and copy
   are separate.
   This means that if a change is made in the original data, the data will not change in the copied version as they are
   both separate entities.

   let a = 10; //a has a value of 10
   let b = a //b also has a value of 10

   a = a + 2 //a's value is now 12 and b's value is still 10


==> When you copy a reference data type, the copy does not have its own data, it only references to the actual data, and
    it is not truly copied but is still connected to the original data.
    This means that if there is a change in the original data, the copied version will also reflect that change since it
    only references and doesn't create a separate copy like primitive data types.
    To do that, we can use the SPREAD OPERATOR, which we will learn later in the future

There are three types of quotes, which are as follows:
1. single quotes
2. double quotes
3. backticks


mutable vs immutable
--------------------------
Mutable
this means that the value assigned to the variable can be changed or altered later in the future.
let a = 10;
a = 20;
Since let is a mutable keyword, we have changed and assigned a new value to it.

Immutable
This means that the value assigned to the variable can never be changed/replaced/altered once it has been initialised.

const b = 10;
b = 20;
Since const is an immutable variable the value of b = 10, once initialised, cannot be changed by any means.

--------------


data can be written in any of these three quotes types but backticks have added benefits which will be discussed later.

NULL
-----------

If you do not want to allot any value to your variable, then you can assign the value as null which can also be a placeholder
for a value which you want to add later.
if you forget to initialise a variable and forget to assign any value to it then it gets a default value of undefined
which is why if you purposefully do not assign any value to a variable, you can use null.
i.e. null is on purpose, undefined is a mistake

let a;  //this variable statement has not been initialised and assigned any value so by default it is undefined.
let a = null; this means that you have purposely decided not to assign any value to the variable.


Symbol
-----------------
Symbol is an immutable value which means that once a value has been initialised to Symbol, it can't be changed.

As you can see in the symbol example above, even though the values of both symbols are the same, the declaration of the
variable has made it so that they are not the same and their values are individual.
as another extensive example use of symbol is given below:

let obj = {
    name: "Shivanshu",
    age: 25,
    occupation: "software developer",
    id: 2851720
}
console.log(obj.id)  // this will return the value of the id which is 2851720

let newAge  = Symbol("age")
obj[newAge] = 25
console.log(typeof newAge); //newAge is a symbol

now as per the example shown above, even thought we have two key value pairs with the name of "age", they are both
completely different as one is a symbol which makes itself completely unique and irrespective of any other variable or key
with the same name which allows us to reuse multiple names without any collision or confusion between them.


BigInt
----------------
When a number becomes too big in Javascript, it is not able to handle it accurately and can create errors as that
number is too big to handle, to check that, we can do two things,

let a =  Number.MAX_SAFE_VALUE //this will show the largest number we can use which can safely control(9007199254740991)
                                 and we can expect errors or bugs in any value bigger than this as javascript cannot
                                 handle it.

the biggest number possible in Javascript is as follows
let b = Number.MAX_VALUE    //this will show you the largest possible value (1.7976931348623157e+308) regardless of
                              it's safety or controllability.


anything we add to the max value will not reflect anything since we are already at the max possible value.

So in order to control the value which are bigger than the max safe value, we can use BigInt which simply means that
we can add an "n" at the end of the number, and it will work as any regular number does without going out of control
or creating any unexpected bugs in the code.

if you want to add anything to the bigint value, the addition value must also have an "n" at the end of it to work
with a bigint, for example:

let a = 123456789n

a + 5n  //
console.log(a) //this will log the value of 123456794 since we added 5 to it but "n" made it recognisable as a bigint to
                 the variable "a"
 */
