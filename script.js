function cplus(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var nswer = num1 + num2;
    document.getElementById('results').innerHTML = 'The sum of ' +num1+ ' and ' +num2+ ' is ' +nswer+ '.';
}
function cminus(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var nswer = num1 - num2;
    document.getElementById('results').innerHTML = 'The difference of ' +num1+ ' and ' +num2+ ' is ' +nswer+ '.';
}
function cmultiply(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var nswer = num1 * num2;
    document.getElementById('results').innerHTML = 'The product of ' +num1+ ' and ' +num2+ ' is ' +nswer+ '.';
}
function cdivide(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var nswer = num1 / num2;
    document.getElementById('results').innerHTML = 'The quotient of ' +num1+ ' and ' +num2+ ' is ' +nswer+ '.' ;
}
function cmodulus(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var nswer = num1 % num2;
    document.getElementById('results').innerHTML = 'The remainder when you divide ' +num1+ ' with ' +num2+ ' is ' +nswer+ '.';
}