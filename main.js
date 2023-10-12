
let Nombre;
Nombre = prompt("Introduce tu nombre");
if (Nombre != null) {
alert ("Bienvenido a nuestro ecommerce "+Nombre)

    let Producto;
    do {
        Producto  = prompt("¿Desea comprar nuesta indumentaria? si/no") 
    } while ( Producto != "si" && Producto != "no")
    {
    if ( Producto === "no") {
        alert ("Muchas gracias por tu visita " +Nombre)}
    else if (Producto === "si") {
    alert ("Tenemos en stock remeras y pantalones");
    let Ropa;
    do {
        Ropa = prompt ("¿Que desea comprar? 1 remera / 2 pantalon. Por favor, seleccione 1 o 2")
    } while ( Ropa != "1" && Ropa != "2")

        if (Ropa === "1") {
        let valorConfirm;
        valorConfirm= confirm ("Usted eligió remera, su precio es de $15000 ¿Desea comprar este artículo?")
            if (valorConfirm){
                let direccion;
                direccion = prompt("Ingrese su direccion para poder realizar el envio del pedido")
                alert("Su remera será enviado a " +direccion)
                alert("Muchas Gracias por su compra "+Nombre)
                }    
            else {
                alert ("Muchas gracias por tu visita " +Nombre)
            }
            }
        else if (Ropa === "2") {
            let valorConfirm;
            valorConfirm= confirm ("Usted eligió pantalon, su precio es de $30000 ¿Desea comprar este artículo?")
            if (valorConfirm){
                let direccion;
                direccion = prompt("Ingrese su direccion para poder realizar el envio del pedido")
                alert("Su pantalon será enviado a " +direccion)
                alert("Muchas Gracias por su compra "+Nombre)
                }    
            else {
                alert ("Muchas gracias por tu visita " +Nombre)
            }
        }
        else {
            alert ("Muchas gracias por tu visita " +Nombre)
    } 
    }
    else (alert("Usted no esta poniendo una opcion correcta. Vuelva a intentarlo actualizando la pagina y coloque si o no."))
    } 
} 
else    {alert ("Muchas gracias por tu visita ")}