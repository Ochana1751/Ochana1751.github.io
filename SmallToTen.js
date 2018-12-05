function tenToSmall(num, base)
{
    var base2 = (document.toBinary.num1.value);
    num = base2; //number to convert
    base = 2;
    smallNum ="";

    while (num > 0)//continue looping while num isn't zero
    {
        smallNum = num%base + smallNum;
        num = Math.floor(num/2);
    }
    return smallNum;
}

function smallToTen(num, base) //convert a small base number to base 10
{
    var base10 = (document.Binaryto.num2.value);
    num = base10;
    base = 2;
    tenNum = 0;
    numLength = num.toString().length;

    if (base10 > "2")
    {
        return error
    }


    while(numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1));

        var currentDigit = Math.floor(num/denominator);

        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);

        num = num%denominator;
        numLength--;

    }
    return tenNum;
}