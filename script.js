document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreço)
document.querySelector("#js").addEventListener("change", atualizarPreço)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreço)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreço)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreço()
    })

function atualizarPreço(){    
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100;
    if (temJS) preco *= 1.1 /* valor de 10% calculado ( valor total X 1.1) */
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1; /* taxa para urgencia sendo o inverso se tenho mais tempo nao se cobra taxa, se tem menos tempo se aplica a taxa de urgencia*/ 
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}