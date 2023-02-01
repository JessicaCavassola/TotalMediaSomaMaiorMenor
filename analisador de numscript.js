/**
 * adicionar valores ao array e verificaçoes
 */

let num = document.querySelector("input#fnum") /**manipulando o dom para capturar e armazenar o valor dado pelo usuario ja criando a variavel que o armazenara */
let lista = document.querySelector ("select#flista")  /**manipulando o dom para capturar e armazenar os valores do selst ja criando a variavel que os armazenara */
let res = document.querySelector ("div#res") /**manipulando o dom para capturar e armazenar o valor do resultado ja criando a variavel que o armazenara */
let valores = []

/**função que verifica se o numero é valido */
function isNumero (n){
if (Number (n) >= 1 && Number(n) <=100){
    return true
    } else {
    return false   
    }
}

/** funcao que verifica se o valor ja existe */
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
/**funcao que adiciona valores validos ao array */
function adicionar(){
   if (isNumero (num.value) && !inLista (num.value, valores)) {
        valores.push(Number(num.value)) /**neste ponto o valor ja esta sendo adicionado a lita porem nao esta sendo exibida ainda */
         /**neste ponto iniciamos a inclusao visual na lista */
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
   } else {
    window.alert ("valor invalido ou ja encontrado na lista")
   }
   /**limpando  o input */
   num.value = ""
   num.focus()
}

function finalizar(){
    if  (valores.length == 0 ){ /**se o comprimenro do vetor for vazio */
        window.alert("adicione os  valores ante se finalizar")
    } else{
        let tot =  valores.length
        let maior = valores [0]
        let menor =  valores [0]
        let soma = 0
        let media = 0
        
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores [pos]
            if (valores[pos] < menor)
               menor = valores[pos]
        

        }
        media =  soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo temos  ${tot} numero cadastrados.</p> `
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>` 
        res.innerHTML += ` <p>O menor valor informado foi ${menor}</p>` 
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>` 
        res.innerHTML += `<p>a media dos valores é: ${media}</p>` 
    }

}







