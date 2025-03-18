function confirmarPresenca() {
    alert("Sua presença foi confirmada! 🎉 Nos vemos lá!");
}

function atualizarContador() {
    const dataAniversario = new Date("December 01, 2025 00:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = dataAniversario - agora;

    if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    } else {
        document.getElementById("contador").innerHTML = "🎉 A festa começou! 🎉";
    }
}

setInterval(atualizarContador, 1000);

document.addEventListener("DOMContentLoaded", atualizarContador);