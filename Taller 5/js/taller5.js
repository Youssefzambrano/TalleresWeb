function calcularAños(fecha) {
    const años = 0;
    var today = new Date();
    //Restamos los años
    años = today.getFullYear() - año;
    // Si no ha llegado su cumpleaños le restamos el año por cumplir
    if (fecha.getMonth() > (today.getMonth()) || fecha.getDay() > today.getDay())
        años--;
    return años;
}           
function validarPassword() {
        var p1 = document.getElementById('Contraseña').value;
        var p2 = document.getElementById('Ccpassword').value;
        if (p1 != p2) {
            alert("Las contraseñas no coinciden");
            return false;
          } else {
            alert("Todo esta correcto");
            return true; 
          }
}