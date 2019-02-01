function checkAnswers()
{
    var score = 0;
    var feedback = [];
    var Q1Answer = document.quiz.a1.value.toLowerCase();
    if (Q1Answer === 'cloud') {
        score++;
        feedback.push("Question 1 is Correct! ");
    }
    else{
        feedback.push("Question 1 is Incorrect! ");
    }
    var Q2Answer = document.quiz.a2.value.toLowerCase();
    if (Q2Answer === 'tifa')
    {
        score++;
        feedback.push("Question 2 is Correct! ");
    }
    else
    {
        feedback.push("Question 2 is Incorrect! ");
    }
    if (document.quiz.a3.value === 'Aeris')
    {
        score++;
        feedback.push("Question 3 is Correct! ");
    }
    else
    {
        feedback.push("Question 3 is Incorrect! ")
    }
    if (document.quiz.a4.value === 'Barret')
    {
        score++;
        feedback.push("Question 4 is Correct! ");
    }
    else
    {
        feedback.push("Question 4 is Incorrect! ")
    }
    if (document.quiz.a5.value === 'Cid')
    {
        score++;
        feedback.push("Question 5 is Correct! ");
    }
    else
    {
        feedback.push("Question 5 is Incorrect! ");
    }
    if (document.quiz.a6.value === 'Cait Sith')
    {
        score++;
        feedback.push("Question 6 is Correct! ");
    }
    if (document.quiz.a6.value === 'Marshmallow')
    {
        feedback.push("Good guess on question 6...but no incorrect. ")
    }
    else
    {
        feedback.push("Question 6 is Incorrect! ");
    }
    if (document.quiz.a7.value === 'Red XIII')
    {
        score++;
        feedback.push("Question 7 is Correct! ");
    }
    else
    {
        feedback.push("Question 7 is Incorrect! ");
    }
    if (document.quiz.a8.value === 'Vincent')
    {
        score++;
        feedback.push("Question 8 is Correct! ");
    }
    else
    {
        feedback.push("Question 8 is Incorrect! ");
    }
    if (document.quiz.a9.value === 'Yuffie')
    {
        score++;
        feedback.push("Question 9 is Correct! ");
    }
    else
    {
        feedback.push("Question 9 is Incorrect! ");
    }
    if (document.quiz.a10.value === 'Zack')
    {
        score++;
        feedback.push("Question 10 is Correct! ");
    }
    else
    {
        feedback.push("Question 10 is Incorrect! ");
    }
    if (document.quiz.a11E.checked === true && document.quiz.a11B.checked === true && document.quiz.a11D.checked === true && document.quiz.a11C.checked === false && document.quiz.a11A.checked === false)
    {
        score++;
        feedback.push("Question 11 is Correct! ");
    }
    else
    {
        feedback.push("Question 11 is Incorrect! ")
    }
    if (document.quiz.a12E.checked === true && document.quiz.a12B.checked === true && document.quiz.a12D.checked === false && document.quiz.a12C.checked === false && document.quiz.a12A.checked === false)
    {
        score++;
        feedback.push("Question 12 is Correct! ");
    }
    else
    {
        feedback.push("Question 12 is Incorrect! ")
    }
    var Q13Answer = document.quiz.a13.value.toLowerCase();
    if (Q13Answer === 'sephiroth')
    {
        score++;
        feedback.push("Question 13 is Correct!");
    }
    else
    {
        feedback.push("Question 13 is Incorrect!");
    }
        alert(score);
       document.getElementById('Feedback').innerHTML = feedback;
}