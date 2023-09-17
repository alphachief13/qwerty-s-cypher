let inputPrincipal = document.querySelector("#input1");
let statusElement = document.querySelector("#status");

let alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
let alfabetoAlternativo = "snvfrghjoklzqmpawtdyibecux".split("");

function criptografar(){
    let valorInputPrincipal = inputPrincipal.value;
    let arr = [];
    for(let i = 0; i < valorInputPrincipal.length; i++){
        if(!(valorInputPrincipal[i] === " ")){
            let indiceLetraAtual = alfabeto.indexOf(valorInputPrincipal[i]);
            arr.push(alfabetoAlternativo[indiceLetraAtual]);
        } else{
            arr.push(" ");
        }

    }
    arr = arr.join("")
    statusElement.textContent = arr;
    
}

function descriptografar(){
    let valorInputPrincipal = inputPrincipal.value;
    let arr = [];
    for(let i = 0; i < valorInputPrincipal.length; i++){
        if(!(valorInputPrincipal[i] === " ")){
            let indiceLetraAtual = alfabetoAlternativo.indexOf(valorInputPrincipal[i]);
            arr.push(alfabeto[indiceLetraAtual]);
        } else{
            arr.push(" ");
        }

    }
    arr = arr.join("")
    statusElement.textContent = arr;

}

inputPrincipal.addEventListener("input", ()=>{
    let valorInputPrincipal = inputPrincipal.value;

    if(valorInputPrincipal.length > 0){
        statusElement.textContent = "Something is being typed"        
    } else if(valorInputPrincipal.length === 0){
        statusElement.textContent = "Nothing is being typed"
    }

})
