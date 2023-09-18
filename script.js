let inputPrincipal = document.querySelector("#input1");
let statusElement = document.querySelector("#status");

let alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
let alfabetoAlternativo = "snvfrghjoklzqmpawtdyibecux".split("");
let numeros = "1234567890".split("");
let numerosAlternativo = "2345678901".split("");

function criptografar(){
    let valorInputPrincipal = inputPrincipal.value.toLowerCase();
    let arr = [];
    for(let i = 0; i < valorInputPrincipal.length; i++){
        let indiceLetraAtual = alfabeto.indexOf(valorInputPrincipal[i]);
        let indiceNumeroAtual = numeros.indexOf(valorInputPrincipal[i]);
        if(indiceLetraAtual >=0 && indiceLetraAtual <=25){
            arr.push(alfabetoAlternativo[indiceLetraAtual]);
        } else if(indiceNumeroAtual >= 0 && indiceNumeroAtual <= 10){
            arr.push(numerosAlternativo[indiceNumeroAtual])
        }
        else{
            arr.push(valorInputPrincipal[i]);
        }
    }
    arr = arr.join("")
    statusElement.textContent = arr;
    
}

function descriptografar(){
    let valorInputPrincipal = inputPrincipal.value.toLowerCase();
    let arr = [];
    for(let i = 0; i < valorInputPrincipal.length; i++){
        let indiceLetraAtual = alfabetoAlternativo.indexOf(valorInputPrincipal[i]);
        let indiceNumeroAtual = numerosAlternativo.indexOf(valorInputPrincipal[i]);
        if(indiceLetraAtual >=0 && indiceLetraAtual <=25){
            arr.push(alfabeto[indiceLetraAtual]);
        } else if(indiceNumeroAtual >= 0 && indiceNumeroAtual <= 10){
            arr.push(numeros[indiceNumeroAtual])
        }
        else{
            arr.push(valorInputPrincipal[i]);
        }
    }
    arr = arr.join("")
    statusElement.textContent = arr;
    

}

inputPrincipal.addEventListener("input", ()=>{
    let valorInputPrincipal = inputPrincipal.value.toLowerCase();

    if(valorInputPrincipal.length > 0){
        statusElement.textContent = "Something is being typed"        
    } else if(valorInputPrincipal.length === 0){
        statusElement.textContent = "Nothing is being typed"
    }

})
