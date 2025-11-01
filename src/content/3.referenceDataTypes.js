/*

Any variable which has brackets after the assignment types is a reference value type.

If you reassign a new value to any reference data type, it will reference it to the original variable. The change made
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

JavaScript allows dynamic typing, which means that, unlike other languages which use static typing, JavaScript will allow
 typing dynamically, which means that the value of a variable can be changed dynamically.

As studied before, there are 7 data types; in static typing, once we declare and initialise a variable with a data type,
the data type cannot be changed even if it is reassigned, for example:

in static typing, if:

let a = 12 //this is a number, if we reassign another value to "a", it has to be a number, it cannot be any other data type
a = true //this is a boolean, this is not allowed in a language which does not have dynamic typing.

but in dynamic typing, the value of a variable which is reassigned can be any data type, for example:

let x = 10 // "x" has been initialised with a number
x = "Shivanshu"        //it has now been reassigned with a string
x = true //it has now been reassigned with a boolean
x = null //it has now been reassigned with null
x = Symbol("hi")      //it has now been reassigned with a string
etc...

this is a JavaScript feature which most developers do not like since most prefer static typing as it allows control
over the data type and in huge projects, it can lead to bugs as we could mistakenly reassign any other data type where
we are not supposed to and that could lead to bugs and unexpected behaviours, which is why we have typescript.

----------------------
typeof quirks

1. typeof null // it is an object
2. typeof NaN(Not a Number) // it is a number
3. NaN === NaN // false
3. 1 + "1" = "11"           // it becomes a string (concatenation)
4. [] + []  = ""            // adding two arrays will give you an empty string
5.  NaN == NaM              // true
6.  [] + {}                 // it will return an array with [object Object]

and there are many more like this in JavaScript, but mostly few of them are worth remembering as they influence real-life coding issues

------------------------

type coercion
(== vs ====)
truthy vs falsy values


the arithmetic value of adding (+) has two features:
1. it can add
2. it can concatenate

when there is a string, the "+" sign will always. by default, choose to concatenate rather than add, and this is because
of type coercion.  it can mix two different types.
to concatenate, JavaScript will monitor for two things, and if both these are fulfilled, it will choose concatenating, and
the two categories are:
1. it has to be a string
2. it needs to have addition.

if both the aforementioned conditions are met, JavaScript will command the plus sign to concatenate rather than add.
foe example:

"5" + 5 = "55" //this is because it fulfills both conditions of sting and add and hence it will join both 5 into
                          a string

but since this feature is only available with the added sign, it doesn't work with other others,
for example

"5" - 2 = 3 // this is now a number even though there is a string, since the subtracted sign does not have the
                           ability to concatenate, it will turn the string into a number and then subtract.

--------------------------------------------------

truthy vs falsy

there are a lot of places where we need boolean values to implement logic, there are boolean values which are:
1. true
2. false

but these two boolean values limit the potential of many JavaScript features such as statements, loops, functions, etc...
which is why JavaScript has allocated true or false to keywords, data types and objects, and hence they can
either be associated with being true, i,e, truthy
or associated with being false, i.e. falsy.

but since there could be a massive number of types, keywords, etc... how do we know what value is being assigned to them,
to simplify this concept and make it easy for developers to remember, there are very few objects and data types which
have falsy values, the rest all have truthy values. so all we have to remember are a few values which are falsy:
1. 0 // the number zero "0" is a falsy value
2. false // the boolean false is obviously a falsy value
3. null // the primitive data type "null" is also a falsy value
4. undefined // the primitive data type "undefined" is also a falsy value
// 5. NaN // the number "NaN" (not a number) is a falsy value
6. document.all // this global object with "all" method is a falsy value.

where ever a boolean is required, the aforementioned values will be converted to false.
there are only 6 falsy values, and the rest all are truthy values in JavaScript
if you wish to check this or verify the value and know if it is truthy or falsy, we can use "!!" before the value.
For example, in the console, if you type !!0, it will show the value of zero as falsy.


in addition to this, true and false also have other values which means that
true always has a value of 1
false always has a value of 0

so if you try true and false, it will be converted to ==> 1 + 0 and this will result in 1
console.log(true + false)

null also has a value of 0

------------------------------
Why is NaN a number?

NaN refers to a failed number operation which means that any number which does not complete its arithmetic calculation
or does not compute the answer in the number data type will be considered a failed number operator and
a failed number operator is in itself a number which is why, even though it has failed, it has failed as number and hence
NaN is a number.
For example:

 console.log(2 * "hi") // NaN
 as we multiply the number with a string, the response will be in a number but since the result of the multiplication
 cannot result in a complete number due to being multiplied with a string, it fails the operation as a number because a
 string cannot be multiplied nor concatenated with a number hence it is termed as NaN
*/
