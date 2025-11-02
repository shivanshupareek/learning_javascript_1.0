/*
IF  STATEMENT
    ==> If;
    If comes with a parenthesis "()" and then the curly braces "{}".
    The parenthesis will have the condition or multiple conditions using logical operators
    The curly braces will have the logic which is performed if the condition in the parenthesis is true.

    ==> Else if;
    Else If also comes with a parenthesis "()" and then the curly braces "{}".
    The parenthesis will have the condition or multiple conditions using logical operators
    The curly braces will have the logic which is performed if the condition in the parenthesis is not true for the
    first condition which is written in if.

    ==> Else;
    Else also comes only with the curly braces "{}".
    The parenthesis will have the condition or multiple conditions using logical operators
    The curly braces will have the logic which is performed if the condition in the parenthesis is not true for the
    first condition which is written in if and also the condition which is written in the else if condition.

    For example:
    if (1 > 0) {
        return console.log("One is bigger than zero")
    } else if (1 < 0) {
        return console.log("That's a lie")
    } else {
        return console.log("if both the conditions above this are not true, then this will be displayed")
    }
*/

/*
SWITCH STATEMENT

switch (1) {
    case 1:
        return console.log("case 1")
        break;
    case 2:
        return console.log("case 2")
        break;
    case 3:
        return console.log("case 3")
        break;
    default;
}

The switch statement is for the same if statement but if you want the logic to pass through multiple conditions
and decide which condition to match with. In this type of control structure, we use the conditions as cases, and we can
match which case will be true for the condition in the parenthesis.
Always add "break" after each case so that as soon as the condition matches with a case, it will stop running, but if we
forget "break", then even if the condition is fulfilled, it will move to the next case until there is a case.


Practice Example:
write a function which takes the student's marks and returns their grades accordingly
*/

function getGrade (marks) {

}
