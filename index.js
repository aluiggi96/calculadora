const digitos = document.querySelector(".digitos")
const botones = document.querySelectorAll(".botones")


botones.forEach(boton => {
    boton.addEventListener("click", function () {
        if (boton.id == 'clear') {
            document.querySelector(".max").style.color = 'transparent'
            digitos.textContent = "0"
            return
        }
        if (boton.id == 'borrar') {
            if (digitos.textContent.length === 1 || digitos.textContent == 'Error!') {
                digitos.textContent = "0"
            } else {
                document.querySelector(".max").style.color = 'transparent'
                digitos.textContent = digitos.textContent.slice(0, -1)
            }
            return
        }
        if (boton.id == 'igual') {
            try {
                digitos.textContent = eval(digitos.textContent)
            } catch {
                digitos.textContent = 'Error!'
            }
            return
        }

        const botonApretado = boton.textContent

        if (digitos.textContent === "0" || digitos.textContent == 'Error!') {
            digitos.textContent = botonApretado
        } else {
            if (digitos.textContent.length >= 16) {
                document.querySelector(".max").style.color = 'black'
                return
            }
            digitos.textContent += botonApretado
        }
    })
})
