let edad=parseInt(prompt("Ingresa tu edad"));

let Descuento=(edad<=35); 

if(Descuento){
    alert("Codigo de descuento: DECO20");
}else{
    alert("Codigo de descuento: DECO15");
}

let producto=prompt("Agrega al carrito (s-para salir)");
let precio=0;

while(producto!="s"){
    switch(producto){
        case "Bowls":
            console.log(" Por unidad $1005");
            precio=precio+1005;
            break;
        case "Sets Bowls":
            console.log(" Set por 6 unidades $5729");
            precio=precio+5729;
            break;
        case "Moldes de Helado":
            console.log("El te sale $1500");
            precio=precio+1500;
            break;
        case "Tablas para cortar":
            console.log("Por unidad $2455");
            precio=precio+2455;
            break;
        case "Set cubiertos":
            console.log("Cubiertos $5250");
            precio=precio+2455;
                break;
        case "Organizadores":
            console.log("Organizador $3544");
            precio=precio+3544;
            break;
        default:
            console.log("Sin stock");
            break;
    }
    producto=prompt("Agrega al carrito (s-para salir)");
}

console.log("Total a pagar $"+precio);



function PrecioTotalConDescuento(precio){
let precioConDescuento=precio * 0.85;
console.log("El precio con descuentos es: $"+precioConDescuento);
}

let PrecioDescu = parseFloat(prompt("Ingrese el precio"));
PrecioTotalConDescuento(PrecioDescu);




