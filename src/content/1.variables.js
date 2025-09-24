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

const fullName = "Shivanshu Pareek";

/*
    ==> As the statement above uses the const 'variable type' it means that it is constant, and we can no longer use
        the same variable name[fullName] in the entire project unless it is within a different block scope.
*/

//==> Now we will look at the second variable type which is "let"

let firstName = "Shivanshu";

/*
    ==> As the name of the variable suggests, JavaScript will "let" us re-use this variable name [firstname] again in the code,
        but we can also change the value of the variable as shown below
*/

firstName = "John";

// ==> This shows that the new value of the variable name "firstName" has now been updated to "John," which previously was "Shivanshu"

/*
==> With "let" we can create a variable with just the name and do not always have to initialise with a value
    which can be assigned anytime in the future.

    The example is as follows:
 */

let lastName;
lastName = "Pareek";

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

var middleName = "Kumar";

// ==> As we can see, the IDE is also showing a linting warning for using "var" instead of "let" or "const"
