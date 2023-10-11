let Nombre;
Nombre = prompt("Introduce tu nombre");

alert ("Bienvenido a nuestro ecommerce "+Nombre)


let Producto;
Producto = prompt("¿Desea comprar nuesta indumentaria? si/no")
{

if ( Producto === "no") {
    alert ("Muchas gracias por tu visita " +Nombre)}
else if (Producto === "si") {
   alert ("Tenemos en stock remeras y pantalones");
 let Ropa;
 Ropa = prompt ("Que desea comprar, remeras o pantalones?")
    if (Ropa === "remeras") {
       let valorConfirm;
       valorConfirm= confirm ("Usted eligió remera, su precio es de $15000, Desea comprar este artículo?")
         if (valorConfirm){
            let direccion;
            direccion = prompt("ingrese su direccion para poder realizar el envio del pedido")
            alert("Su remera será enviado a " +direccion)
            alert("Muchas Gracias por su compra "+Nombre)
            }    
        else {
            alert ("Muchas gracias por tu visita " +Nombre)
        }
        }
    else if (Ropa === "pantalones") {
        let valorConfirm;
       valorConfirm= confirm ("Usted eligió pantalon, su precio es de $30000, Desea comprar este artículo?")
         if (valorConfirm){
            let direccion;
            direccion = prompt("ingrese su direccion para poder realizar el envio del pedido")
            alert("Su pantalon será enviado a " +direccion)
            alert("Muchas Gracias por su compra "+Nombre)
            }    
        else {
            alert ("Muchas gracias por tu visita " +Nombre)
        }
    }
}
else (alert("Usted no esta poniendo una opcion correcta. Vuelva a intentarlo actualizando la paguina y coloque si o no."))

}