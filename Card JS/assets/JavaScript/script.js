    let b = document.querySelector('#calcular-total')
    
    b.addEventListener ("click", function() {
    let cantidad = document.querySelector ("#cantidad").value
    let precio = document.querySelector ("#precio").innerText

    let total = Number(cantidad) * Number(precio)

    document.querySelector("#precio-final").innerText = "$" + total
    document.querySelector("#cantidad-final").innerText = cantidad + " unidades"
    

})
    let negra = document.getElementById('#negra');
    let azul = document.getElementById('#azul');
    let blanca = document.getElementById('#blanca');
    let gris = document.getElementById('#gris');
    let selectColor = document.querySelector('#select-color')

    selectColor.addEventListener ("change", function(){
        if (selectColor.innerText == negra){
            document.querySelector("#color-final").style.background = "black";
        }
    })
    
    

    


