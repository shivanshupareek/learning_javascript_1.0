/*
Variables are the core of JavaScript.
There are three main keywords to declare a variable out of which only two types are still recommended to be used:
    1. "let"
    2. "const" (short for constant)

    3. "var" --> not recommended since 2015

⬆ the aforementioned types are called "DECLARATION KEYWORDS" since these are the names of declaration keyword.


A JavaScript variable expression statement is written as follows:
    => [declaration keyword(const/let)] [variable name] [equals] [variable value]
    => const[declaration keyword] name[variable name] =[equal sign] "Shivanshu"[variable value]

For a structured explanation of this file, see: src/content/1.DeclarationTypes.explained.md
*/

        // -------------

/*
    ==> Since this is the first time we are giving a value to a variable, it's called initialisation.

    ==> Since this is also where we are giving a value to a variable with its name, it is also a variable declaration.
        const fullName(this is declaration - declaring a variable with a given name) = "Shivanshu Pareek"(this is an initialisation
        by giving it some value)

    ==> This means that when we create a variable for the first time and assign a value to a name, we are declaring and
        initialising at the same time.
*/

//==> Now we will look at the first declaration keyword which is "const"

//const fullName = "Shivanshu Pareek";

/*
    ==> As the statement above uses the const 'declaration keyword' it means that it is constant, and we can no longer use
        the same variable name[fullName] in the entire project unless it is within a different block scope.
*/

//==> Now we will look at the second declaration keyword which is "let"

//let firstName = "Shivanshu";

/*
    ==> As the name of the variable suggests, JavaScript will "let" us re-use this variable name [firstname] again in the code,
        but we can also change the value of the variable as shown below
*/

//==> firstName = "John";

// ==> This shows that the new value of the variable name "firstName" has now been updated to "John," which previously was "Shivanshu"

/*
==> With "let" we can create a variable with just the name and do not always have to initialise with a value
    which can be assigned anytime in the future.

    The example is as follows:
 */

//let lastName;
//lastName = "Pareek";

// ==> As we can see, the lastName variable was created without initialising any value which was assigned later.

        // -------------

/*
    ==> Now we will look at the third declaration keyword which is "var"

    ==> Since ECMAScript 2015, when we got "let" and "const" for the first time, The JavaScript community recommended
        for developers to stop using "var" and replace it with "let" and "const"

    ==> The reason why "var" had been replaced was due to it being hoisted to the top of the script and
        its extreme flexibility and adaptability which resulted in unexpected behaviours and lots of bugs which
        were challenging to debug.
*/

//var middleName = "Kumar";

// ==> As we can see, the IDE is also showing a linting warning for using "var" instead of "let" or "const"
// ==> The biggest reason is that var is a declaration keyword without scope which means it is always hoisted at the top
//     irrespective of the function it is written in.

//----------------------------------------------------------------------------------------------------------------------

/*
Reassigning VS redeclaring

==> Reassigning is when we already have a statement, but we change its value without using a declaration keyword:
let a = 10;
a = 20 //This means that I have assigned a new value to the variable.

==> Redeclaring is when we write a new statement using a name which already exists.
let b = 100 //this is called declaring a variable
let b = 200 // This is called redeclaring a variable because even though the declaration keyword is the same, the name is being reused, which isn't allowed.

this means that in the case of "let" and "var", reassigning a value is possible,
but only in the case of "var", redeclaring a value is possible.

since we no longer use "var", nor is it encouraged, redeclaration of a variable is no longer possible
*/


//----------------------------------------------------------------------------------------------------------------------


/*

SCOPING

Scope refers to where and to what extent we can access a declared variable. The reachability and accessibility of a variable
is what it defined, which is almost self-explanatory by the term scope i.e. it has scope of maximum accessibility which means the variable
is accessible from anywhere in the code file. (Which sounds cool but is dev's nightmare.)

There are three different types of scopes:
1. Global Scope
2. Block Scope
3. Lexical Scope

1. GLOBAL SCOPE
A global scope means that we can access a variable irrespective of where it is located in the code.
This is only possible in the case of "var" since it is always hoisted at the top of the file

2. BLOCK SCOPE
This means that the variable is only accessible inside a block of code.
A block of code can be anything inside curly braces => {}
{ anything inside this is inside a block of code and is not accessible outside these curly braces }

example:
{ let a = 10 }
console.log(a) //this will show has a referenceError since we are trying to access "a" outside the code block
and the console cannot do that, so it has no reference to the "a" we are trying to call outside

3. LEXICAL SCOPE
This is a little advanced for this stage, but it essentially means that an inner block of code/function can access the
variables of its outer function and vice versa
*/

/*
Variables are the core of JavaScript.
There are three main types of variables out of which only two types are still recommended to be used:
    1. "let"
    2. "const" (short for constant)

    3. "var" --> not recommended since 2015

⬆ the aforementioned types are called "DECLARATION KEYWORDS" since these are the names of variable types.


A JavaScript variable expression statement is written as follows:
    => [declaration keyword(const/let)] [variable name] [equals] [variable value]
    => const[variable type] name[variable name] =[equal sign] "Shivanshu"[variable value]

For a structured explanation of this file, see: src/content/1.DeclarationTypes.explained.md
*/

// -------------

/*
    ==> Since this is the first time we are giving a value to a variable, it's called initialisation.

    ==> Since this is also where we are giving a value to a variable with its name, it is also a variable declaration.
        const fullName(this is declaration - declaring a variable with a given name) = "Shivanshu Pareek"(this is an initialisation
        by giving it some value)

    ==> This means that when we create a variable for the first time and assign a value to a name, we are declaring and
        initialising at the same time.
*/

//==> Now we will look at the first variable type which is "const"

//==>const fullName = "Shivanshu Pareek";

/*
    ==> As the statement above uses the const 'variable type' it means that it is constant, and we can no longer use
        the same variable name[fullName] in the entire project unless it is within a different block scope.
*/

//==> Now we will look at the second variable type which is "let"

//==>let firstName = "Shivanshu";

/*
    ==> As the name of the variable suggests, JavaScript will "let" us re-use this variable name [firstname] again in the code,
        but we can also change the value of the variable as shown below
*/

//firstName = "John";

// ==> This shows that the new value of the variable name "firstName" has now been updated to "John," which previously was "Shivanshu"

/*
==> With "let" we can create a variable with just the name and do not always have to initialise with a value
    which can be assigned anytime in the future.

    The example is as follows:
 */

//let lastName;
//lastName = "Pareek";

// ==> As we can see, the lastName variable was created without initialising any value which was assigned later.

// -------------

/*
    ==> Now we will look at the third variable type which is "var"

    ==> Since ECMAScript 2015, when we got "let" and "const" for the first time, The JavaScript community recommended
        for developers to stop using "var" and replace it with "let" and "const"

    ==> The reason why "var" had been replaced was due to it being hoisted to the top of the script and
        its extreme flexibility and adaptability which resulted in unexpected behaviours and lots of bugs which
        were challenging to debug.
*/

//var middleName = "Kumar";

// ==> As we can see, the IDE is also showing a linting warning for using "var" instead of "let" or "const"
// ==> The biggest reason is that var is a declaration type without scope which means it is always hoisted at the top
//     irrespective of the function it is written in.

//----------------------------------------------------------------------------------------------------------------------

/*
Reassigning VS redeclaring

==> Reassigning is when we already have a statement, but we change its value without using a declaration type:
let a = 10;
a = 20 //This means that I have assigned a new value to the variable.

==> Redeclaring is when we write a new statement using a name which already exists.
let b = 100 //this is called declaring a variable
let b = 200 // This is called redeclaring a variable because even though the declaration type is the same, the name is being reused, which isn't allowed.

this means that in the case of "let" and "var", reassigning a value is possible,
but only in the case of "var", redeclaring a value is possible.

since we no longer use "var", nor is it encouraged, redeclaration of a variable is no longer possible
*/


//----------------------------------------------------------------------------------------------------------------------


/*

SCOPING

Scope refers to where and to what extent we can access a declared variable. The reachability and accessibility of a variable
is what it defined, which is almost self-explanatory by the term scope i.e. it has scope of maximum accessibility which means the variable
is accessible from anywhere in the code file. (Which sounds cool but is dev's nightmare.)

There are three different types of scopes:
1. Global Scope
2. Block Scope
3. Lexical Scope

1. GLOBAL SCOPE
A global scope means that we can access a variable irrespective of where it is located in the code.
This is only possible in the case of "var" since it is always hoisted at the top of the file

2. BLOCK SCOPE
This means that the variable is only accessible inside a block of code.
A block of code can be anything inside curly braces => {}
{ anything inside this is inside a block of code and is not accessible outside these curly braces }

example:
{ let a = 10 }
console.log(a) //this will show has a referenceError since we are trying to access "a" outside the code block
and the console cannot do that, so it has no reference to the "a" we are trying to call outside

3. LEXICAL SCOPE
This is a little advanced for this stage, but it essentially means that an inner block of code/function can access the
variables of its outer function and vice versa
*/

/*
Variables are the core of JavaScript.
There are three main types of variables out of which only two types are still recommended to be used:
    1. "let"
    2. "const" (short for constant)

    3. "var" --> not recommended since 2015

⬆ the aforementioned types are called "DECLARATION KEYWORDS" since these are the names of variable types.


A JavaScript variable expression statement is written as follows:
    => [declaration keyword(const/let)] [variable name] [equals] [variable value]
    => const[variable type] name[variable name] =[equal sign] "Shivanshu"[variable value]

For a structured explanation of this file, see: src/content/1.DeclarationTypes.explained.md
*/

// -------------

/*
    ==> Since this is the first time we are giving a value to a variable, it's called initialisation.

    ==> Since this is also where we are giving a value to a variable with its name, it is also a variable declaration.
        const fullName(this is declaration - declaring a variable with a given name) = "Shivanshu Pareek"(this is an initialisation
        by giving it some value)

    ==> This means that when we create a variable for the first time and assign a value to a name, we are declaring and
        initialising at the same time.
*/

//==> Now we will look at the first variable type which is "const"

//const fullName = "Shivanshu Pareek";

/*
    ==> As the statement above uses the const 'variable type' it means that it is constant, and we can no longer use
        the same variable name[fullName] in the entire project unless it is within a different block scope.
*/

//==> Now we will look at the second variable type which is "let"

//let firstName = "Shivanshu";

/*
    ==> As the name of the variable suggests, JavaScript will "let" us re-use this variable name [firstname] again in the code,
        but we can also change the value of the variable as shown below
*/

//firstName = "John";

// ==> This shows that the new value of the variable name "firstName" has now been updated to "John," which previously was "Shivanshu"

/*
==> With "let" we can create a variable with just the name and do not always have to initialise with a value
    which can be assigned anytime in the future.

    The example is as follows:
 */

//let lastName;
//lastName = "Pareek";

// ==> As we can see, the lastName variable was created without initialising any value which was assigned later.

// -------------

/*
    ==> Now we will look at the third variable type which is "var"

    ==> Since ECMAScript 2015, when we got "let" and "const" for the first time, The JavaScript community recommended
        for developers to stop using "var" and replace it with "let" and "const"

    ==> The reason why "var" had been replaced was due to it being hoisted to the top of the script and
        its extreme flexibility and adaptability which resulted in unexpected behaviours and lots of bugs which
        were challenging to debug.
*/

//var middleName = "Kumar";

// ==> As we can see, the IDE is also showing a linting warning for using "var" instead of "let" or "const"
// ==> The biggest reason is that var is a declaration type without scope which means it is always hoisted at the top
//     irrespective of the function it is written in.

//----------------------------------------------------------------------------------------------------------------------

/*
Reassigning VS redeclaring

==> Reassigning is when we already have a statement, but we change its value without using a declaration type:
let a = 10;
a = 20 //This means that I have assigned a new value to the variable.

==> Redeclaring is when we write a new statement using a name which already exists.
let b = 100 //this is called declaring a variable
let b = 200 // This is called redeclaring a variable because even though the declaration type is the same, the name is being reused, which isn't allowed.

this means that in the case of "let" and "var", reassigning a value is possible,
but only in the case of "var", redeclaring a value is possible.

since we no longer use "var", nor is it encouraged, redeclaration of a variable is no longer possible
*/


//----------------------------------------------------------------------------------------------------------------------


/*

SCOPING

Scope refers to where and to what extent we can access a declared variable. The reachability and accessibility of a variable
is what it defined, which is almost self-explanatory by the term scope i.e. it has scope of maximum accessibility which means the variable
is accessible from anywhere in the code file. (Which sounds cool but is dev's nightmare.)

There are three different types of scopes:
1. Global Scope
2. Block Scope
3. Lexical Scope

1. GLOBAL SCOPE
A global scope means that we can access a variable irrespective of where it is located in the code.
This is only possible in the case of "var" since it is always hoisted at the top of the file

2. BLOCK SCOPE
This means that the variable is only accessible inside a block of code.
A block of code can be anything inside curly braces => {}
{ anything inside this is inside a block of code and is not accessible outside these curly braces }

example:
{ let a = 10 }
console.log(a) //this will show has a referenceError since we are trying to access "a" outside the code block
and the console cannot do that, so it has no reference to the "a" we are trying to call outside

3. LEXICAL SCOPE
This is a little advanced for this stage, but it essentially means that an inner block of code/function can access the
variables of its outer function and vice versa
*/

//----------------------------------------------------------------------------------------------------------------------

/*
Creating a statement
1. describe a declaration keyword

2. give it a name - "declare"
   ==> it has a name but not a value which means it is declared and given a name but no initial/starting/first value, and
       hence JS will fill it with the value of undefined as default until we do not replace it with an actual
       reference data type

3. give it a value - "initialise"

4. change its value - "reassign"

*/

//----------------------------------------------------------------------------------------------------------------------

/*
Temporal dead zone

this is when we declare a variable, but we log/ call it before it is initialised, the engine knows that a variable with
that name has been declared, but it cannot access it since it hasn't been initialised.

console.log(x) ==> javascript knows that x exists in the file but not what its value is as it is designed in a way to
                   prevent errors and bugs faced in such situations with var. It cannot read the value since the
                   value comes after being called for, which means that JS doesn't know the value yet because it cannot
                   access it.
let x = 10; ==> when JavaScript comes down, it will know that value because it now has access to it, but since it is
                designed to do so and fix a mistake they made with var, it cannot go back up and give the console the value of "x"

The only way to fix this issue is by initialising the variable for calling it, as mentioned below:
let x = 10; ==> here JS knows the value of x and carries it down with it
console.log(x) ==> when JS reaches the place where "x" is needed, it will give it the value

when a variable is in the temporal dead zone, it doesn't matter if it has been initialised or not, for example

console.log(a)
let a; will give the error as ==> Cannot access 'a' before initialisation
let a = 10; will also give the error as ==> Cannot access 'a' before initialisation

It is the same thing with const too.

ANYTHING ABOVE A DECLARED VARIABLE WITHOUT INITIALISATION IS A TEMPORAL DEAD ZONE

==> this entire area before and above "const z = 100" is considered as a TDZ
const z = 100;

This does not apply to "var" as it is globally scoped, and it is, by default, hoisted at the very top.
when "var" is hoisted at the top, it is hoisted with declaration but without initialisation, which is why when you
look at the TDZ for "var", it will show you undefined rather than a ReferenceError for initialisation like it does with
"let" and "const"

example:

var a = 10; ==> this is split into two parts:
part 1: var a = undefined
part 2: a = 10;

when we write the following:
console.log(a)
var a = 10;

the console will show undefined, not initialisation error because it actually reads the aforementioned as such:
var a = undefined
console.log(a) //declared var but not initialised
a = 10; //above this is TDZ

the same is true for "let" and "const" too, but JS keeps it uninitialised rather than undefined, which it does for "var"
*/
