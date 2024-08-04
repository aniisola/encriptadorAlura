const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const imgMuneco = document.getElementById("imgMuneco");
const mensajeInfo = document.getElementById("mensajeInfo");
const derAjus = document.getElementById("derAjus");

// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

let reemplazarLetras = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

const reemplazarEstilos = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    imgMuneco.classList.add("oculto");
    imgMuneco.style.display = "none";

    ingresoTexto.value = "";
    mensajeInfo.style.display = "none";
    botonCopiar.style.display = "block";
    derAjus.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
};

const resetear = () => {
    mensajeFinal.innerHTML = "";

    imgMuneco.classList.remove("oculto");
    imgMuneco.style.display = "block";

    mensajeInfo.style.display = "block";
    botonCopiar.style.display = "none";

    derAjus.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");

    ingresoTexto.focus();

};

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if (texto != "") {
        function encriptar(nuevoTexto) {
            for (let i = 0; i < reemplazarLetras.length; i++) {
                if(nuevoTexto.includes(reemplazarLetras[i][0])){
                    nuevoTexto = nuevoTexto.replaceAll(reemplazarLetras[i][0], reemplazarLetras[i][1]);
                };
            };
            return nuevoTexto;
        };
    } else {
        alert("Ingrese el texto que desaea encriptar.");
        resetear();
    };
    reemplazarEstilos(encriptar(texto));
    
})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "") {
        function desencriptar(nuevoTexto) {
            for (let i = 0; i < reemplazarLetras.length; i++) {
                if (nuevoTexto.includes(reemplazarLetras[i][1])) {
                    nuevoTexto = nuevoTexto.replaceAll(reemplazarLetras[i][1], reemplazarLetras[i][0]);
                };
            };
            return nuevoTexto;
        };
    } else {
        alert("Ingrese el texto que desea desencriptar.");
        resetear();
    };
    reemplazarEstilos(desencriptar(texto));
})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("El texto se ha copiado con éxito");

    resetear();
})