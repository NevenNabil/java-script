/**
 *  Write a function that take a number ad check if the given number is divided by 3 only, 5 only or both
and print the suitable sentence. Follow the below Rule. 
Rule :
divided by 3 only —"fizz", divided by 5 only —"buzz". divided by 3 & "fizz buzz" ,
Neither divided by 3 nor 5 "none" */

var input = document.getElementById('input')
var output = document.getElementById('output')


function check () {
    output.value = " "
    if (input.value % 3 == 0 && input.value % 5 == 0)
    output.value = 'fizz buzz'
    else if (input.value % 3 == 0)
    output.value = 'fizz'
    else if (input.value % 5 == 0)
    output.value = 'buzz'
    else
    output.value = 'none'
}