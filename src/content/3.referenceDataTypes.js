/*

Any variable which has brackets after the assignment types, is a reference value type.

If you reassign a new value to any reference data type, it will reference it to the original variable and the change made
in the reassigned statement will also be impacted in the original statement since they are both referencing to the same
original memory.

for example:
let a = {
    name: "Shivanshu"
}

let b = a

b = "Pareek" // so the value of "a" and "b" have both been changed to "Pareek" from "Shivanshu" since they are both
                referencing to the same "name" key value pairs
----------------------------

Dynamic typing

Javascript allows dynamic typing which means that, unlike other languages which use static typing, javascript will allow
to type dynamically which means that the value of a variable can be changed dynamically.

As studied before, there are 7 data types, in static typing, once we declare and initialise a variable with a data type,
the data type cannot be changed even if it is reassigned, for example:

in static typing, if:

let a = 12 //this is a number, if we reassign another value to "a" it has to be a number, it cannot be any other data type
a = true //this is a boolean, this is not allowed in a language which does not have dynamic typing.

but in dynamic typing, the value of a variable which is reassigned can be any data type, for example:

let x = 10             // "x" has been initialised with a number
x = "Shivanshu"        //it has now been reassigned with a string
x = true              //it has now been reassigned with a boolean
x = null              //it has now been reassigned with null
x = Symbol("hi")      //it has now been reassigned with a string
etc...

this is a javascript feature which most developers do not like since most prefer static typing as it allows control
over the data type and in huge projects, it can lead to bugs as we could mistakenly reassign any other data type where
we are not supposed to and that could lead to bugs and unexpected behaviours which is why we have typescript.

----------------------
typeof quirks

1. typeof null               // it is an object
2. typeof NaN(Not a Number) // it is a number
3. NaN === NaN              // false
3. 1 + "1" = "11"           // it becomes a string (concatenation)
4. [] + []  = ""            // adding two arrays will give you an empty string
5.  NaN == NaM              // true
6.  [] + {}                 // it will return an array with [object Object]

and there are many more like this in javascript but mostly few of them are worth remembering as they influence real
life coding issues

------------------------

type coercion
(== vs ====)
truthy vs falsy values


the arithmetic value of add (+) has two features:
1. it can add
2. it can concatenate

when there a string, the "+" sign will always. by default, choose to concatenate rather than add, and this is because
of type coercion.  it can mix two different types.
to concatenate, javascript will monitor for two things and if both these are fulfilled, it will choose concatenate, and
the two categories are:
1. it has to be a string
2. it needs to have addition.

if both the aforementioned conditions are met, javascript will command the plus sign to concatenate rather than add.
foe example:

"5" + 5 =  "55"         //this is because it fulfills both condition of sting and add and hence it will join both 5 into
                          a string

but since this feature is only available with the add sign, it doesn't work with other others,
for example

"5" - 2 = 3             // this is now a number even though there is a string, since the subtract sign does not have the
                           ability to concatenate, it will turn the string into a number and then subtract.
*/
