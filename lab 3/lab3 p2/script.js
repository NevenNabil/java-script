/**
 *  Write a function that take a sentence and a letter to search for it in the given sentence and return its
locations in that sentence.*/

var inputString = document.getElementById('inputString')
var inputLetter = document.getElementById('inputLetter')
var output = document.getElementById('output')


function check () {
    var arr = []
    var splitted = inputString.value.split("")
    for(var i=0; i<inputString.value.length; i++)
    {
        if (splitted[i] == inputLetter.value)
        {
            arr.push(i)
        }
        
    }
    output.value = " "
    output.value = arr
}