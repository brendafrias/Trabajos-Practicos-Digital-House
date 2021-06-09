const sumar = require("./Sumar");
const restar = require("./Restar");
const dividir = require("./Dividir");
const multiplicar = require("./Multiplicar");

function calculadora(operacion,a,b){
    if(operacion =="sumar"){
        return sumar(a,b)
    }else if(operacion =="restar"){
        return restar(a,b)
    }else if(operacion=="multiplicar"){
        return multiplicar(a,b)
    }else if(operacion=="dividir"){
        return dividir(a,b)
    }else{
        return "no es una operacion valida"
    }
}

console.log(calculadora("sumar",4,5));
console.log(calculadora("restar",4,5));
console.log(calculadora("multiplicar",4,5));
console.log(calculadora("multiplicar",0,5));
console.log(calculadora("dividir",4,5));
console.log(calculadora("dividir",0,5));
