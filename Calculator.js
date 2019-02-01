function calculate(expression) //ex. expression 2+5 or 9*6 or 10/5
{
    //Expression is a STRING of EVERYTHING in your calculatorWindow
    //Need to extract the first number from expression
    var firstNum = Number(expression.substr(0,1));
    //alert(firstNum);
    var operator = expression.substr(1,1);
    //alert(operator);
    var secondNum = Number(expression.substr(2,1));
    //alert(secondNum);

    if (expression.substr(2,1)=== '+')
    {
        firstNum = Number(expression.substr(0,2));
        operator = Number(expression.substr(3,1));
        secondNum = Number(expression.substr(4,2));
    }


    if (operator === '+')
    {
        return addNums(firstNum, secondNum)
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum)
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum)
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum)
    }
    else if (operator === '')
        {
            return noOperator(firstNum, secondNum)
        }
    else if (operator === '^')
    {
        return square(firstNum, secondNum)
    }
    else if (operator ==='√')
    {
        return sqroot(firstNum, secondNum)
    }
}

function addNums(p1,p2) //addNums expects 2 parameters...p1 and p2
{
    return p1 + p2;
}
function subtractNums(p1,p2)
{
    return p1 - p2;
}
function multiplyNums(p1,p2)
{
    return p1 * p2;
}
function divideNums(p1,p2)
{
    return p1 / p2;
}
function noOperator(p1,p2)
{
    return p1;
}
function square(p1,p2)
{
    return p1 * p1;
}
function sqroot(p1, p2)
{
    return Math.sqrt(p2);
}