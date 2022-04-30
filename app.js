// guardar mensaje de contacto

const MENSAJERECIBIDO = [];

document.getElementById("contactAction").addEventListener("submit", (e) => {
  e.preventDefault();

  let formName = document.getElementById("formName").value;
  let formEmail = document.getElementById("formEmail").value;
  let formMsg = document.getElementById("formMsg").value;

  if (formName == "" || formEmail == "" || formMsg == "") {
    Swal.fire({
      position: "top",
      icon: "warning",
      title: "Por favor rellena todos los campos",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    const mensajeEnviado = {
      nombre: formName,
      email: formEmail,
      mensaje: formMsg,
    };

    MENSAJERECIBIDO.push(mensajeEnviado);
    console.log(MENSAJERECIBIDO);

    document.getElementById("contactAction").reset();

    localStorage.setItem("mensaje enviado", JSON.stringify(mensajeEnviado));
  }
});

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function () {
  Swal.fire({
    position: "top",
    icon: "success",
    title: "Tu mensaje a sido enviado",
    showConfirmButton: false,
    timer: 1500,
  });
});
