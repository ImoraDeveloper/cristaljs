alert("¡Bienvenido al lugar mas dulce del mundo!");

class Postres {
  articulo;
  precio;
  constructor(articulo, precio) {
    this.articulo = articulo;
    this.precio = parseInt(precio);
  }
  precioConIva() {
    return this.precio * 1.21;
  }
}

const producto1 = new Postres("factura", 80);

const producto2 = new Postres("12 facturas", 800);

const producto3 = new Postres("torta de oreo", 400);

const producto4 = new Postres("torta 3 leches", 400);

let artEnStock = [producto1, producto2, producto3, producto4];

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("ingrese su apellido");

let ingresado = prompt(
  `Hola ${nombre}, Bienvenido a Cristal Cake elige tus postres:
  Marque 1 para ${producto1.articulo} ${producto1.precio}
  Marque 2 para ${producto2.articulo} ${producto2.precio}
  Marque 3 para ${producto3.articulo} ${producto3.precio} 
  Marque 4 para ${producto4.articulo} ${producto4.precio}`
);

let total = 0;

function postreElegido() {
  while (ingresado != "NO") {
    console.log(`${nombre}, Elegiste ${artEnStock[ingresado - 1].articulo}`);
    total += artEnStock[ingresado - 1].precioConIva();

    ingresado = prompt(
      `${nombre}, ¿quieres seguir eligiendo postres?, elige que otro postre sumas de lo contrario escribe NO
      Marque 1 para ${producto1.articulo} ${producto1.precio}
      Marque 2 para ${producto2.articulo} ${producto2.precio}
      Marque 3 para ${producto3.articulo} ${producto3.precio}
      Marque 4 para ${producto4.articulo} ${producto4.precio}`
    );

    console.log(`El total de tu factura es ${total}`);
  }
}

postreElegido();

const articulo = artEnStock.map((el) => el.articulo);
console.log(articulo);

/* POP UP*/
var openPopup = document.getElementById("openpopup");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var btnClosePopup = document.getElementById("btn-close-popup");

setTimeout(() => {
  openPopup.addEventListener("mouseover", function () {
    overlay.classList.add("active");
    popup.classList.add("active");
  });
}, 1000);

btnClosePopup.addEventListener("click", function () {
  overlay.classList.remove("active");
  popup.classList.remove("active");
});
