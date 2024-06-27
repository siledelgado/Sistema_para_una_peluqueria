
var id = 0;

   
let registroArray = usuariosArray;


// Listar registros
$(document).ready(function() {
    $('#id_user').val(getCookie("idusuario"));
});




//Guardar nuevo registro
$('#form').submit(function(e) {
    let postData = {
        id : id,
        nombre : $('#nombre-marca').val().toUpperCase()
    };
    
    if($('#nombre-marca').val().length === 0){
        alertify.error('Campo vacio, complete los campos principales.');
        $('#nombre-marca').focus();
    }else{
        if(validarMarca(postData.nombre)){
            if(id < 1){
                console.log(obtenerId());
                postData.id = obtenerId();
                registroArray.push(postData);
                alertify.success('Registro insertado satisfactoriamente.');
            }else{
                actualizarRegistro(postData);   
                alertify.success('Registro actualizado satisfactoriamente.');
            }
            $('#newModal').modal('hide');
            $('#form').trigger('reset');
            cargarTabla();    
        }else{
            alertify.error('El nombre de la marca ya esta registrado.'); 
        }        
    }
    e.preventDefault();
});


function validarMarca(nombre) {
    for (let i = 0; i < registroArray.length; i++) {
        const e = registroArray[i];
        if(e.nombre == nombre && e.id != id){
            return false;
        }
    }
    return true;
}


function obtenerId() {
    let id = 0;
    registroArray.forEach(e => {
        id = e.id;
    });
    return (id+1);
}


function actualizarRegistro(data) {
    for (let i = 0; i < registroArray.length; i++) {
        const e = registroArray[i];
        if(data.id == e.id){
            e.nombre = data.nombre;
            cargarTabla();
            return 1;
        }
    }
    return 0;
}




//Botón Nuevo
$(document).on("click", "#btn-form", function(){
    id = 0;
    if($('#id_user').val().length === 0){
        alertify.error('No se encuentra el identificador del usuario');
        $('#pass').focus();
    }else if($('#pass').val().length === 0){
        alertify.error('Ingrese su contraseña actual');
        $('#pass').focus();
    }else if($('#new_pass').val().length === 0){
        alertify.error('Ingrese su nueva contraseña');
        $('#new_pass').focus();
    }else if($('#new_pass').val().length < 8){
        alertify.error('Contraseña corta, mínimo 8 caracter.');
        $('#new_pass').focus();
    }else if(alfanumerico($('#new_pass').val()) == false){
        alertify.error('Contraseña debil, mínimo 8 caracteres con 2 numéricos.');
        $('#new_pass').focus();
    }else if($('#new_pass').val() != $('#new_pass2').val()){
        alertify.error('Las contraseñas no coinciden.');
        $('#new_pass2').focus();
    }else{
        Swal.fire({
            //title: title,
            text: "¿Está seguro de actualizar su contraseña?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '##024897',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, actualizar!',
            cancelButtonText : 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                actualizar($('#id_user').val(), $('#pass').val(), $('#new_pass').val());
            }
        });   
    }
    
});



function actualizar(id, pass, new_pass) {
    for (let i = 0; i < registroArray.length; i++) {
        const e = registroArray[i];
        if(e.id == id){
            if(e.password == pass){
                e.password = new_pass;
                alertify.success('La contraseña fue actualizada.');
                setTimeout(() => {
                    window.location.href = "./index.html";
                }, 1500);
            }else{
                alertify.error('La contraseña no es correcta.');
                $('#pass').val('');
                setTimeout(() => {
                    $('#pass').focus();
                }, 500);
            }
        }
    }
}


function alfanumerico(pass) {
    let array = pass.split('');
    let numero = false;
    let contN = 0;
    let caracter = false;
    let contC = 0;
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        if(isNaN(array[i])){
            if(caracter == false){
                caracter = true;
            }
            contC ++;
        }

        if(isNaN(array[i]) == false){
            if(numero == false){
                numero = true;
            }
            contN ++;
        }
    }

    console.log(contC);
    console.log(contN);

    if(contC > 1 && contN > 1){
        return true;
    }else{
        return false;
    }
}


//Botón cancelar
$(document).on("click", "#btn-cancel", function(){			        
    Swal.fire({
        //title: title,
        text: "¿Está seguro de volver a la página principal?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '##024897',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, volver!',
        cancelButtonText : 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {                
            window.location.href = "./index.html";
        }
    });   
});
