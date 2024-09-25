let Carrito = [];
let total = 0;

function comprar() {
    let seleccion;
    
    do {
        seleccion = parseInt(prompt(`Seleccione un producto para agregar al carrito:
                1. Camisa    - $300
                2. Pantalon  - $500
                3. Zapatos   - $800
                4. Sombrero  - $200
                5. Volver al menú principal
            `));
        
        let producto;
        let precio;

        switch(seleccion) {
            case 1:
                producto = "Camisa";
                precio = 300;
                Carrito.push({producto, precio});
                total += precio;
                alert(`${producto} agregado al carrito.`);
                break;
            case 2:
                producto = "Pantalon";
                precio = 500;
                Carrito.push({producto, precio});
                total += precio;
                alert(`${producto} agregado al carrito.`);
                break;
            case 3:
                producto = "Zapatos";
                precio = 800;
                Carrito.push({producto, precio});
                total += precio;
                alert(`${producto} agregado al carrito.`);
                break;
            case 4:
                producto = "Sombrero";
                precio = 200;
                Carrito.push({producto, precio});
                total += precio;
                alert(`${producto} agregado al carrito.`);
                break;
            case 5:
                alert("Volviendo al menú principal...");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
                break;
        }
    } while (seleccion !== 5);
}

function verCarrito() {
    if (Carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Carrito:\n";
        Carrito.forEach(item => {
            mensaje += `${item.producto} - $${item.precio}\n`;
        });
        mensaje += `\nTotal: $${total}`;
        alert(mensaje);
    }
}

// Menú principal
let opcion;
do {
    opcion = parseInt(prompt(`Seleccione una opción:
                1. Comprar
                2. Ver carrito y total
                3. Salir
            `));
    
    switch(opcion) {
        case 1:
            comprar();
            break;
        case 2:
            verCarrito();
            break;
        case 3:
            alert("Gracias por su visita.");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción del 1 al 3.");
            break;
    }
} while (opcion !== 3);
