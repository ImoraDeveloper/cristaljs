// guardar mensaje de contacto

const MENSAJERECIBIDO = []

document.getElementById("contactAction").addEventListener("submit", (e)=> {
    e.preventDefault();

    let formName = document.getElementById("formName").value;
    let formEmail = document.getElementById("formEmail").value;
    let formMsg = document.getElementById("formMsg").value;


    if(formName == "" || formEmail == "" || formMsg == ""){
        alert ("Por favor rellena todos los campos")
    }else{
        alert("Se envio tu mensaje")

        const mensajeEnviado = {
            nombre: formName,
            email: formEmail,
            mensaje: formMsg
        };

        MENSAJERECIBIDO.push(mensajeEnviado)
        console.log(MENSAJERECIBIDO);

        document.getElementById("contactAction").reset();

        localStorage.setItem("mensaje recibido", JSON.stringify(mensajeEnviado))

    }
} )
