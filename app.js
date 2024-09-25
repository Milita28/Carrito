let Carrito = [];

/**
 function mostrarMenu(){
    return parseInt(prompt(`
        "Selecciona una opción: "
        1.- Agregar al carrito
        2.- Ver carrito
        3.- Eliminar del carrito
        4.- Salir
        `));
}
 */

do{
    seleccion = parseInt(prompt(`Seleccione un producto para agregar al carrito:
                1.Camisa    -$300.
                2.Pantalon  -$500.
                3.Zapatos   -$800.
                4.Sombrero  -$200.
                5.Ver carrito y total.
                6.Salir.
            `));
    
    switch(seleccion){
        case 1:
            producto = "Camisa";
            precio = 300;
            break;
        case 2:
            producto = "Pantalon";
            precio = 500;
            break;
        case 3:
            producto = "Zapatos";
            precio = 800;
            break;
        case 4:
            producto = "Sombrero";
            precio = 200;
            break;
    }

}while(seleccion != 6);



// Agregar al carrito
function agregarCarrito(){
    let nombre = prompt("Agrega el producto al carrito");
    
}

// Ver carrito
function verCarrito(){

}

// Eliminar del carrito
function BorrarCarrito(){

}

// funcion para manejar el flujo del programa
function IniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opción = mostrarMenu();
        switch(opción){
            case 1:
                agregarCarrito();
                break;
            case 2:
                verCarrito();
                break;
            case 3:
                BorrarCarrito();
                break;
            case 4:
                alert("Se cerrará el programa . . . ");
                continuar = false;
                break;
            default:
                alert("Opcion no valida, intenta nuevamente");
        }
    }
    alert("finalizando programa");
}
IniciarPrograma();

// hey
