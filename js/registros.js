
let menuAdmin = `
<ul class="navbar-nav me-auto mb-2 mb-lg-0">

<li class="nav-item dropdown">
    
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-gear-fill icon-lg"></i> Mantenimientos</a>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" href="./marcas.html"><i class="bi bi-bookmarks-fill"></i> Marcas</a></li>
    <li><a class="dropdown-item" href="./clasificacion.html"><i class="bi bi-microsoft"></i> Clasificaciones</a></li>
    <li><a class="dropdown-item" href="./articulo.html"> <i class="bi bi-archive-fill"></i> Artículos</a></li>
    <li><a class="dropdown-item" href="./ajuste_stock.html"> <i class="bi bi-pencil-square"></i> Ajustes Stock</a></li>
    <li><a class="dropdown-item" href="./servicios.html"> <i class="bi bi-scissors"></i> Servicios</a></li>
    <li><a class="dropdown-item" href="./clientes.html"> <i class="bi bi-people-fill"></i> Clientes</a></li>
    <li><a class="dropdown-item" href="./proveedor.html"> <i class="bi bi-box2-fill"></i> Proveedores</a></li>

</ul>
</li>

<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i class="bi bi-cart-plus-fill icon-lg"></i> Compras</a>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" href="./compras.html"> <i class="bi bi-card-text"></i> Registros</a></li>
    <li><a class="dropdown-item" href="./credito_proveedor.html"> <i class="bi bi-pencil-square"></i> Créditos</a></li>
    <li><a class="dropdown-item" href="./nueva_compra.html"> <i class="bi bi-cart-fill"></i> Nueva compra</a></li>

</ul>
</li>

<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i class="bi bi-card-text icon-lg"></i> Ventas</a>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" href="./ventas.html"> <i class="bi bi-card-text"></i> Registros</a></li>
    <li><a class="dropdown-item" href="./credito_cliente.html"> <i class="bi bi-pencil-square"></i> Créditos</a></li>
    <li><a class="dropdown-item" href="./nueva_venta.html"> <i class="bi bi-cart-fill"></i> Nueva venta</a></li>

</ul>
</li>

<li class="nav-item">
    <a class="nav-link" href="./usuario.html"> <i class="bi bi-people-fill icon-lg"></i> Usuarios</a>
</li>

<li class="nav-item">
    <a class="nav-link" href="./clave.html"> <i class="bi bi-key-fill icon-lg"></i> Contraseña</a>
</li>


<li class="nav-item">
    <a class="nav-link cerrarSesion" id="logout" href="#">-</a>
</li>
</ul>
`;



let menuCaja = `
<ul class="navbar-nav me-auto mb-2 mb-lg-0">

    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i class="bi bi-cart-plus-fill icon-lg"></i> Compra</a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="./credito_proveedor.html"> <i class="bi bi-pencil-square"></i> Créditos</a></li>
        <li><a class="dropdown-item" href="./nueva_compra.html"> <i class="bi bi-cart-fill"></i> Nueva compra</a></li>

    </ul>
    </li>

    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i class="bi bi-card-text icon-lg"></i> Ventas</a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="./credito_cliente.html"> <i class="bi bi-pencil-square"></i> Créditos</a></li>
        <li><a class="dropdown-item" href="./nueva_venta.html"> <i class="bi bi-cart-fill"></i> Nueva venta</a></li>

    </ul>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="./clave.html"> <i class="bi bi-key-fill icon-lg"></i> Contraseña</a>
    </li>


    <li class="nav-item">
        <a class="nav-link cerrarSesion" id="logout" href="#">-</a>
    </li>
</ul>
`;




function marcaModel(id, nombre) {
    return {
        id : id,
        nombre : nombre
    };    
}


let marcasArray = [
    marcaModel(1, "SEDAL"),
    marcaModel(2, "NIVEA"),
    marcaModel(3, "LOREAL"),
    marcaModel(4, "SILCARE"),
    marcaModel(5, "GENERAL")
];


function clasificacionModel(id, nombre) {
    return {
        id : id,
        nombre : nombre
    };    
}


let clasificacionesArray = [
    clasificacionModel(1, "UÑAS"),
    clasificacionModel(2, "CABELLOS"),
    clasificacionModel(3, "GENERAL"),
];


function articulosModel(id, nombre, precio, stock, idmarca, idclasificacion, tipo) {
    return {
        id : id,
        nombre : nombre,
        precio : precio,
        stock : stock,
        idmarca : idmarca,
        idclasificacion : idclasificacion,
        tipo : tipo, // SI tipo = S entonces es un servicio, si tipo = A entonces es un articulo
    };    
}


let articulosArray = [
    articulosModel(1, "CORTE DE CABELLO CLÁSICO PARA HOMBRE", 15000, 0, 5, 2, "S"),
    articulosModel(2, "CORTE DE CABELLO MODERNO PARA HOMBRE", 15000, 0, 5, 2, "S"),
    articulosModel(3, "TINTE DE CABELLO", 10000, 0, 5, 2, "S"),
    articulosModel(4, "TINTE DE CABELLO LOREAL ", 10000, 10, 3, 2, "A"),
    articulosModel(5, "CREMA DE AFEITAR NIVEA", 20000, 10, 2, 2, "A"),
    articulosModel(6, "ESMALTE SILCARE", 5000, 20, 4, 1, "A"),
];



function ajustesModel(id, idarticulo, antes, cantidad, despues, fecha, desc, tipo) {
    return {
        id : id,
        idarticulo : idarticulo,
        antes : antes,
        cantidad : cantidad,
        despues : despues,
        fecha : fecha,
        desc : desc,
        tipo : tipo
    };
}


let ajustesArray = [
    ajustesModel(1, 1, 0, 10, 10, new Date(), 'PRUEBA', 'I'), 
    ajustesModel(2, 2, 0, 10, 10, new Date(), 'PRUEBA', 'I'), 
    ajustesModel(3, 3, 0, 10, 10, new Date(), 'PRUEBA', 'I'), 
    ajustesModel(4, 1, 10, 2, 8, new Date(), 'PRUEBA', 'S'), 
    ajustesModel(5, 2, 10, 3, 7, new Date(), 'PRUEBA', 'S'), 
    ajustesModel(6, 3, 10, 5, 5, new Date(), 'PRUEBA', 'S'), 
];


function rolModel(id, nombre) {
    return {
        id : id,
        nombre : nombre
    };
}


let rolArray = [
    rolModel(1, "ADMINISTRADOR"), 
    rolModel(2, "CAJA"), 
];


function usuariosModel(id, nombre, telefono, correo, usuario, password, idrol) {
    return {
        id : id,
        nombre : nombre,
        telefono : telefono,
        correo : correo,
        usuario : usuario,
        password : password,
        idrol : idrol
    };
}


let usuariosArray = [
    usuariosModel(1, "ADMIN", '0972XXXXXX', 'correo1@gmail.com', 'admin', '1234AAee', 1), 
    usuariosModel(2, "JUAN PEREZ", '0972XXXXXX', 'correo2@gmail.com', 'juanp', '654321', 2), 
    usuariosModel(3, "JUANA PEREZ", '0972XXXXXX', 'correo2@gmail.com', 'juana', 'juana123', 2), 
];


function clientesModel(id, ci, verif, nombre, telefono, direccion, correo) {
    return {
        id : id,
        verificador : verif,
        ci : ci,
        nombre : nombre,
        telefono : telefono,
        direccion : direccion,
        correo : correo,
    };
}


let clientesArray = [
    clientesModel(1, 1000000, '', "ADMIN", '0972XXXXXX', 'BARRIO LAS MERCEDES', 'admin@gmail.com'), 
    clientesModel(2, 2000000, '', "JUAN PEREZ", '0972XXXXXX', 'BARRIO LAS PALMAS', 'juanp@gmail.com'), 
    clientesModel(3, 3000000, '', "JUANA PEREZ", '0972XXXXXX', 'BARRIO LAS FÁTIMA', 'juana@gmail.com'), 
];


function proveedorModel(id, ci, verif, nombre, telefono, direccion, correo, funcionario) {
    return {
        id : id,
        ci : ci,
        verificador : verif,
        nombre : nombre,
        telefono : telefono,
        direccion : direccion,
        correo : correo,
        funcionario : funcionario,
    };
}


let proveedorArray = [
    proveedorModel(1, 1000000, '', "ADMIN", '0972XXXXXX', 'BARRIO LAS MERCEDES', 'admin@gmail.com', 'JUAN PEREZ'), 
    proveedorModel(2, 2000000, '0', "JUAN PEREZ", '0972XXXXXX', 'BARRIO LAS PALMAS', 'juanp@gmail.com', 'JUAN PEREZ'), 
    proveedorModel(3, 3000000, '', "JUANA PEREZ", '0972XXXXXX', 'BARRIO LAS FÁTIMA', 'juana@gmail.com', 'JUAN PEREZ'), 
];


function comprasModel(id, idproveedor, tipo_doc, num_doc, fecha, condicion, total, detalles) {
    return {
        id : id,
        idproveedor : idproveedor,
        tipo_doc : tipo_doc,
        num_doc : num_doc,
        fecha : fecha,
        condicion : condicion,
        total : total,
        detalles : detalles,
    };
}


let comprasArray = [
    comprasModel(1, 1, 'F', '001-001-0005684', new Date(), 'E', 100000, [{idarticulo: 1, cantidad: 10, precio: 10000, subtotal : 100000}]), 
    comprasModel(2, 1, 'F', '001-001-0005684', new Date('2022-02-01 00:00:00'), 'E', 100000, 
    [
        {idarticulo: 1, cantidad: 10, precio: 10000, subtotal : 100000},
        {idarticulo: 2, cantidad: 10, precio: 10000, subtotal : 100000},
    ]),
];


function creditoCompraModel(id, idcompra, idproveedor, total, vence, pagado, faltante) {
    return {
        id : id,
        idcompra : idcompra,
        idproveedor : idproveedor,
        total : total,
        vence : vence,
        pagado : pagado,
        faltante : faltante,
    };
}


let creditoCompraArray = [
    creditoCompraModel(1, 1, 1, 30000, new Date(), 10000, 20000), 
    creditoCompraModel(1, 1, 1, 30000, new Date(), 20000, 10000), 
];


function ventasModel(id, idcliente, num_ticket, total, fecha, condicion, estado, detalles) {
    return {
        id : id,
        idcliente : idcliente,
        num_ticket : num_ticket,
        total : total,
        fecha : fecha,
        condicion : condicion,
        estado : estado,
        detalles : detalles,
    };
}


let ventasArray = [
    ventasModel(1, 1, 102, 30000, new Date(), 'C', 'ACTIVO', [{idarticulo: 1, cantidad: 2, precio: 15000, subtotal : 30000}]), 
    ventasModel(2, 3, 105, 1500000, new Date(), 'E', 'ACTIVO', [{idarticulo: 1, cantidad: 20, precio: 30000, subtotal : 600000},{idarticulo: 2, cantidad: 3, precio: 300000, subtotal : 900000}]), 
];


function creditoVentaModel(id, idventa, idcliente, total, vence, pagado, faltante) {
    return {
        id : id,
        idventa : idventa,
        idcliente : idcliente,
        total : total,
        vence : vence,
        pagado : pagado,
        faltante : faltante,
    };
}


let creditoVentaArray = [
    creditoVentaModel(1, 1, 1, 30000, new Date(), 10000, 20000), 
    creditoVentaModel(2, 1, 3, 1500000, new Date(), 100000, 1400000), 
];


function getRegistros(tipo) {
    switch (tipo) {
        case 1: return marcasArray;
        case 2: return clasificacionesArray;
        case 3: return articulosArray;
    
        default:
            break;
    }
}