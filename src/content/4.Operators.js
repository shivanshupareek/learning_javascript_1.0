/*
    ARITHMETIC
    1. "+" add/plus/concatenate
       let a = 10 + 5; //15

    2. "-" subtract/minus
       let a = 10-5; //5

    3. "*" multiply
       let a = 10 * 5; //50

    4. "/" divide
       let a = 10 / 5; //2

    5. "%" mod/modulus
       let a = 10 % 5; //0
       This is because 10 is completely divisible by 5, if the first number(10) is not divisible by the second number(5) then
       it takes the closest previous number it is divisible by and then divides it and sees the left the over between the actual
       number and the closest divisible number. For example,
       let a = 10 % 4 //2
       This is because the second number(4) is completely divisible by 8 (closest divisible from 10 hence actual number - closest divisible number = modulus)
       which is why we had 10-8 = 2 (hence the modulus is 2)
       The same thing is tried with 3, the closest divisible number to 10 is 9, so modulus = 1 (10-9)

    6. "**" exponential
       let a = 10 ** 5; //100,000
       This is because the first number(10) is multiplied by itself 5 times (10*10*10*10*10=100,000)

--------------------------------------------------------------------------------------------------------------------------------------------------------------
    COMPARISON
    1. ">" greater than
    2. "<" less than
    3. ">=" greater than or equal to
    4. "<=" less than or equal to
    5. "==" equal to value (not type) -- not strict comparison
    6. "===" equal to value (including type) -- strict comparison
    7. "!=" not equal (not type)
    8. "!==" is not equal(including type)

--------------------------------------------------------------------------------------------------------------------------------------------------------------
    LOGICAL
    1. "&" and.
    2. "&&" and-and (if both conditions are true)
    3. "|" or.
    4. "||" or-or (if one of the conditions is true)
    5. "!" not
    6. "!!" not-not (if both the conditions are not true)

--------------------------------------------------------------------------------------------------------------------------------------------------------------
    Assignment
    1. "=" assigns a value/equal
    let x = 10;

    2. "+=" add and update it as the value of the variable
        let a = 10;
        a+=5 //15
        This is because JavaScript writes it as:
        a = a + 5 //15

    3. "-=," subtract and update it as the value of the variable
       let b = 10;
        a-=5 //5
        This is because JavaScript writes it as:
        a = a - 5 //5

    4. "*=" multiply and update it as the value of the variable
       let a = 10;
        a*=5 //50
        This is because JavaScript writes it as:
        a = a * 5 //50

    5. "/=" divide and update it as the value of the variable
       let a = 10;
        a/=5 //2
        This is because JavaScript writes it as:
        a = a / 5 //2

    6. "%=" find the remaining and update it as the value of the variable
       let a = 10;
        a%=5 //0
        This is because JavaScript writes it as:
        a = a % 5 //0

    7. "**=" ind the exponential and update it as the value of the variable
       let a = 10;
        a**=5 // 100,000
        This is because JavaScript writes it as:
        a = a ** 5 //100000

--------------------------------------------------------------------------------------------------------------------------------------------------------------
Unary
1. "+" converts a value into a number
2. "-" converts value into negative
3. "typeof" tells the type of data it holds
4. "++" if used before variable(preincrement), it will add 1 to the value before printing,
    let a = 1;
    ++a //2 (this is because it has added 1 to "a")

    if used after the variable (post-increment), it will add 1, but after printing the value
    let a = 1;
    a++ + a //2 (this is because we have to add it to the initialized value, which is why "+ a" was used after it).
    if we just do this:
    a++ //1 (it will not become 2 by adding 1 and incrementing the value since we did not print it by using the variable)

5. "--" if used before variable (preincrement), it will subtract 1 from the value before printing,
    let a = 2;
    --a // 1 (this is because it has removed 1 from the initialized value)

6. "!" used to check if a value is not false or not true.
    let a = 5
    // !a //false (because "a" has a value and !I will ask "not a" but since "a" exists, it will be false)
--------------------------------------------------------------------------------------------------------------------------------------------------------------
Ternary
?:
1. "?" if
2. ":" else


*/
// 10 > 5 ? console.log("Yes 10 is more than 5"): console.log("No 10 is not more than 5");


let a = 20;
let b = 50;

if (a > 10 && b < 100) {
    console.log("Yes, both the conditions are true");
} else {
    console.log("No, they are not true");
}
//----------
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log("Access Granted!")
} else {
    console.log("Access Denied!")
}
//----------
let temp = 30;

if (!(temp < 30)) {
    console.log("Yes it's hot")
} else {
    console.log("No, it's not that hot")
}

let c = null;
//----------
if (c) {
    console.log("it's truthy")
} else {
    console.log("it's falsy")
}
//----------
!c ? console.log("it's truthy") : console.log("it's falsy")
//----------
let score = 45;

let result = score >= 90 ? "Incredible" :
                        score >= 80 ? "Amazing" :
                            score >= 70 ? "Great" :
                                score >= 60 ? "Not bad" :
                                    score >= 50 ? "can do better" :
                                        score >= 40 ? "Super close" :
                                            score >= 30 ? "Barely passed" :
                                                "fail";

console.log(result);

let d = 5;
let e = d++;
console.log(d, e); // 6 5

let f = 10;
let g = ++f;
console.log (f, g); // 11 11

let h = 10;
let results = h++ + ++h;
console.log(h)//22

let count = 0;
for (let i = 0; i < 5; i++) {
    count += i++;


}
console.log(count);
