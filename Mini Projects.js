function TemperatureBug()
{
    var temp = Number(document.project5.input1.value);
    if (temp > 79)
    {
        document.getElementById('weather').src = "img.Summer.jpg";
        return "Summer";
    }
    else if (temp > 69)
    {
        document.getElementById('weather').src = "img.Spring.jpg";
        return "Spring";
    }
    else if (temp >= 59)
    {
        document.getElementById('weather').src = "img.Fall.jpg";
        return 'Fall';
    }
    else if (temp < 58)
    {
        document.getElementById('weather').src = "img.Winter.jpg";
        return 'Winter';
    }
}
function assignGrade()
{
    var grade = Number(document.project3.input1.value);
    if (grade > 89)
    {
        return "A";
    }
    else if (grade > 79)
    {
        return 'B';
    }
    else if (grade > 69)
    {
        return 'C';
    }
    else if (grade > 59)
    {
        return 'D';
    }
    else if (grade <= 59)
    {
        return 'F';
    }
}
function CalorieCounter()
{
    var Min = Number(document.project6.word1.value);
    var Activity =

    if (Activity == 'football')
    {
        return Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min
    }
    if (Activity == 'basketball')
    {
        return + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min
    }
    if (Activity == 'soccer')
    {
        return Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min
    }
    if (Activity == 'running')
    {
        return Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min
    }
    if (Activity == 'baseball')
    {
        return Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min + Min
    }
    if (Activity == 'walking')
    {
        return Min + Min + Min + Min + Min + Min + Min + Min + Min + Min
    }
}


