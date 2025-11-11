document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  if (form) {
    const tabla = document.querySelector("#tabla-datos tbody");

   
    function actualizarTabla() {
      tabla.rows[0].cells[1].textContent = form.nombre.value;
      tabla.rows[1].cells[1].textContent = form.apellido.value;
      tabla.rows[2].cells[1].textContent = form.edad.value;
      tabla.rows[3].cells[1].textContent = form.email.value;
      tabla.rows[4].cells[1].textContent = form.telefono.value;
      tabla.rows[5].cells[1].textContent = form.direccion.value;
      tabla.rows[6].cells[1].textContent = form.provincia.value;
      tabla.rows[7].cells[1].textContent = form.codigo_postal.value;

      const metodo = form.querySelector("input[name='metodo_contacto']:checked");
      tabla.rows[8].cells[1].textContent = metodo ? metodo.nextElementSibling.textContent : "";

      const suscripciones = Array.from(form.querySelectorAll("input[name='suscripcion[]']:checked"))
                                 .map(op => op.value)
                                 .join(", ");
      tabla.rows[9].cells[1].textContent = suscripciones;
    }

    form.addEventListener("input", actualizarTabla);
    form.addEventListener("change", actualizarTabla);
  }

  //--Leer Maás//
  const boton = document.getElementById("btn-leer-mas");
  const extra = document.getElementById("texto-extra");

  if (boton && extra) {
    boton.addEventListener("click", () => {
      if (extra.style.display === "block") {
        extra.style.display = "none";
        boton.textContent = "Leer más";
      } else {
        extra.style.display = "block";
        boton.textContent = "Leer menos";
      }
    });
  }
});
