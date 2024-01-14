/**
 *  Write a script that ask the user to
 Enter the value of a circle’s radius in order to calculate its area as 
shown in fig.
 Enter another value to calculate its square root and alert the result 
as shown in fig.
 Enter an angle to calculate its cos value then display the output as 
shown in Fig */

var input = prompt("what is the value of your circle radius", "type radius here")
var output = Math.PI*Math.pow(input,2)
alert("Total area of the circle is "+ output)
var input = prompt("what is the value you want to calculate its square root", "type your value here")
var output = Math.sqrt(input)
alert("square root of "+ input + " is " + output)
var input = prompt("what is the value you want to calculate its cos value", "type your value here")
var output = Math.cos(input*(Math.PI/180))
alert("cos of "+ input + "° is " + output)