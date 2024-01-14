/**
 *  Write a function that prints two random elements from an array of strings*/

var arr = ["Mona", "Ali", "Ahmed", "Alaa", "Hend"]
var outArr = []
var output = document.getElementById('output')

function rand(){
    var randomIndex1 = Math.floor(Math.random() * arr.length); 
    do{
        var randomIndex2 = Math.floor(Math.random() * arr.length); 
    }while(randomIndex1 === randomIndex2)


    return [ arr[randomIndex1] ,arr[randomIndex2]]
}

function check () {
    output.value = " "
    output.value = rand() 
}