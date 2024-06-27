

    if(getCookie('idrol') == '2'){
        window.location.href = "./index.html";
    }

let registrosArray = [];
let marcaArray = [];
let clasificacionArray = [];

$(document).ready(function () {
    marcaArray = getRegistros(1);
    clasificacionArray = getRegistros(2);
    registrosArray = getRegistros(3); 
    cargarMarca();   
    cargarClasificacion();  
    mostrarDatos();       
    dataTable();   
});

function cargarMarca() {
    $('#idmarca').find('option').remove();
    $('#idmarca').append('<option value="0">Seleccione una Marca*</option>');
    marcaArray.forEach(v => {
        $('#idmarca').append('<option value="' + v.id + '">' + v.nombre + '</option>');
    });
}

function cargarClasificacion() {
    $('#idclasificacion').find('option').remove();
    $('#idclasificacion').append('<option value="0">Seleccione una Clasificaciòn*</option>');
    clasificacionArray.forEach(v => {
        $('#idclasificacion').append('<option value="' + v.id + '">' + v.nombre + '</option>');
    });
}


$('#btn_nuevo').click(function (e) {
    e.preventDefault();
    $('#id_registro').val('');
    $('#nombre').val('');
    $('#precio').val('');
    $('#stock').val('');
    $('#idmarca').val('0');
    $('#idclasificacion').val('0');
    $('#titulo').text('Nuevo Articulo');
    $('#miModal').modal('show');
    $('#nombre').focus();
});


$(document).on("click", "#btn_editar", function(){		
    let fila = $(this).closest("tr");	        
    let id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID	
    
    let registro = getArticulo(id);

    $('#id_registro').val(id);
    $('#nombre').val(registro.nombre);
    $('#precio').val(registro.precio);
    $('#stock').val(registro.stock);
    $('#idmarca').val(registro.idmarca);
    $('#idclasificacion').val(registro.idclasificacion);
    $('#titulo').text('Actualizar Articulo');
    $('#miModal').modal('show');
    $('#nombre').focus();	   
});




$(document).on("click", "#btn_eliminar", function(){		
    let fila = $(this).closest("tr");	        
    let id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID	
    
    Swal.fire({
        title: 'Esta seguro de borrar este registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
            let pos = -1;
            for (let i = 0; i < registrosArray.length; i++) {
                const element = registrosArray[i];
                if(id == element.id){
                    pos = i; break;
                }
            }
            if(pos > -1){
                registrosArray.splice(pos, 1);
                alertify.success('Registro eliminado');
                mostrarDatos();
            }  
        }         
      });
});



$('#btn_guardar').click(function (e) {
    let guardar = true;
    e.preventDefault();
    if($('#nombre').val() == ''){
        alertify.error('Falta el nombre del articulo');
        guardar = false;
        $('#nombre').focus();
    }else if($('#precio').val() == ''){
        alertify.error('Falta el precio del articulo');
        guardar = false;
        $('#precio').focus();
    }else if($('#stock').val() == ''){
        alertify.error('Falta el stock del articulo');
        guardar = false;
        $('#stock').focus();
    }else if($('#idmarca').val() == ''){
        alertify.error('Falta el stock del articulo');
        guardar = false;
        $('#idmarca').focus();
    }else if($('#idclasificacion').val() == ''){
        alertify.error('Falta la categoria del articulo');
        guardar = false;
        $('#idclasificacion').focus();
    }
    
    if(guardar == true){
        let nombre = $('#nombre').val().toUpperCase();
        let precio = $('#precio').val();
        let stock = $('#stock').val();
        let idmarca = $('#idmarca').val();
        let idclasificacion = $('#idclasificacion').val();

        if(validarNombre(nombre, $('#id_registro').val())) {
            let registro = {
                id : $('#id_registro').val(),
                nombre : nombre,
                precio : precio,
                stock : stock,
                idmarca : idmarca,
                idclasificacion : idclasificacion,
                tipo : "A"
            };

            if($('#id_registro').val() == ''){
                //Nuevo Registro
                registro.id = getId()+1;
                console.log(registro);
                registrosArray.push(registro);    
                mostrarDatos();
                alertify.success('Registro guardado.');
                $('#miModal').modal('hide');
            }else{
                //actualizar registro                
                if(actualizarRegistro(registro)){
                    mostrarDatos();
                    alertify.success('Registro actualizado.');
                }else{
                    alertify.error('Hubo un error inesperado.');
                }
                $('#miModal').modal('hide');
            }
        }else{
            alertify.error('El nombre de la marca ya existe.');
        }
    }
});


function getArticulo(id) {
    for (let i = 0; i < registrosArray.length; i++) {
        const e = registrosArray[i];
        if(e.id == id){
            return e;
        }
    }    
    return null;
}


function validarNombre(nombre, id) {
    for (let i = 0; i < registrosArray.length; i++) {
        const e = registrosArray[i];
        if(e.nombre == nombre && e.id != id){
            return false;
        }
    }    
    return true;
}


function getId() {
    let id = 0;
    registrosArray.forEach(element => {
        id = element.id;
    });
    return id;
}



function actualizarRegistro(registro) {
    for (let i = 0; i < registrosArray.length; i++) {
        const element = registrosArray[i];
        if(element.id == registro.id){
            element.nombre = registro.nombre;
            element.precio = registro.precio;
            element.stock = registro.stock; 
            element.idmarca = registro.idmarca;
            element.idclasificacion = registro.idclasificacion; 
            return true;
        }
    }
    return false;
}


function mostrarDatos() {
    let etiqueta = '';
    registrosArray.forEach(registro => {
        if(registro.tipo == 'A'){
            etiqueta = etiqueta + `
            <tr>
                <td>${registro.id}</td>
                <td>${registro.nombre}</td>
                <td>${separador_Mil(registro.precio.toString())}</td>
                <td>${registro.stock}</td>
                <td>
                    <button type="button" id="btn_editar" class="btn btn-primary">Editar</button>
                    <button type="button" id="btn_eliminar" class="btn btn-danger">Eliminar</button>                
                </td>
            </tr>
        `;   
        }          
    });

    $('#cuerpo_tabla').html(etiqueta); 
}

function dataTable() {
    $('#example').dataTable().fnDestroy();
    $('#example').DataTable( {
        "language": {
            "decimal": "",
            "emptyTable": "No existen datos en la tabla",
            "info": "Se encontraron _TOTAL_ registro/s",
            "infoEmpty": "No existen registros!",
            "infoFiltered": "(Filtrado de un total de _MAX_ registros)",
            "infoPostFix": "",
            "thousands": ".",
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se ha encontrado ningún registro!",
            "paginate": {
                "first":      ">|",
                "last":       "|<",
                "next":       ">>",
                "previous":   "<<"
            },
            "aria": {
            "sortAscending":  ": activar para ordenar la columna ascendente",
            "sortDescending": ": activar para ordenar la columna descendente",
            "sort": "descending"
            },
            "responsive":       true,
        },
        "lengthMenu":       [[5, 10, 20, 50, -1], [5, 10, 20, 50, "Todos"]],
        "iDisplayLength":     5,
        "responsive":       true,
        "order": [[ 0, "desc" ]],
        columnDefs: [
            { "sClass": "text-end", "aTargets": [ 0, 2, 3 ] },
        ]
    }); 
}

