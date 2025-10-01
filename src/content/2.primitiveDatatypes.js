

const string = "hello";                           // a text in JavaScript is called a string.

const number  = 10;                             // a number in JS is called a number

const boolean = true;                           // only true or false values are called booleans

const bigInt = 12939n;                           // any number with "n" at the end is a bigInt

const nullValue = null;                            // purposefully writing null as an initial value is called null

const SymbolValue = Symbol("hello");  // a unique value is called a symbol

let undefinedValue;                                      // declaring a variable without initialising is called undefined


/*
// The difference between primitive data types and reference data types is essentially in itself.
The data in either primitive or referenced. These are the only two types.

==>When you copy a primitive data type, the copy has its own data, and after copying the actual data, the original and copy
   are separate.
   This means that if a change is made in the original data, the data will not change in the copied version as they are
   both separate entities.

==> When you copy a reference data type, the copy does not have its own data, it only references to the actual data and
    it is not truly copied but is still connected to the original data.
    This means that if there is a change in the original data, the copied version will also reflect that change since it
    only references and doesn't create a separate copy like primitive data types.
    To do that, we can use the SPREAD OPERATOR, which we will learn later in the future


*/
