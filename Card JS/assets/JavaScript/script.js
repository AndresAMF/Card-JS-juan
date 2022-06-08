function calcular() {
    let cantidad = document.querySelector ("#cantidad").value
    let elegirColor = document.querySelector ("#color").value
    let precio = document.querySelector ("#precio").value

    let total = number(cantidad) * number(precio)
    let color = string(elegirColor)

    document.querySelector(".precio-final").textContent = "$" + total
    document.querySelector(".cantidad-final").textContent = cantidad + "unidades"
    document.querySelector(".color-final").textContent = color

}


