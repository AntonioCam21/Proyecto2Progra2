// script.js

var usuariosRegistrados = {};

var usuarioActual = null;

function login() {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;
    
    if (!usuariosRegistrados.hasOwnProperty(usuario)) {
        usuariosRegistrados[usuario] = { contrasena: contrasena, correos: [] };
        usuarioActual = usuario;
        showSubmenu();
    } else if (usuariosRegistrados[usuario].contrasena === contrasena) {
        usuarioActual = usuario;
        showSubmenu();
    } else {
        alert("Credenciales incorrectas. Intente nuevamente.");
    }
}

function showSubmenu() {
    var submenu = document.getElementById('submenu');
    var loginForm = document.getElementById('loginForm');
    
    loginForm.style.display = 'none';
    submenu.style.display = 'block';
}

function ingresar() {
    if (usuarioActual !== null) {
        var nuevoCorreo = prompt("Ingrese el correo electrónico del usuario:");
        usuariosRegistrados[usuarioActual].correos.push(nuevoCorreo);
        mostrarUsuarios();
    }
}

function borrar() {
    if (usuarioActual !== null) {
        var correoABorrar = prompt("Ingrese el correo a borrar:");
        var correosUsuario = usuariosRegistrados[usuarioActual].correos;
        var index = correosUsuario.indexOf(correoABorrar);
        if (index !== -1) {
            correosUsuario.splice(index, 1);
            mostrarUsuarios();
        } else {
            alert("El correo no existe.");
        }
    }
}

function modificar() {
    if (usuarioActual !== null) {
        var correoAModificar = prompt("Ingrese el correo a modificar:");
        var nuevoCorreo = prompt("Ingrese el nuevo correo:");
        var correosUsuario = usuariosRegistrados[usuarioActual].correos;
        var index = correosUsuario.indexOf(correoAModificar);
        if (index !== -1) {
            correosUsuario[index] = nuevoCorreo;
            mostrarUsuarios();
        } else {
            alert("El correo no existe.");
        }
    }
}

function consultar() {
    if (usuarioActual !== null) {
        var correoAConsultar = prompt("Ingrese el correo a consultar:");
        var correosUsuario = usuariosRegistrados[usuarioActual].correos;
        var index = correosUsuario.indexOf(correoAConsultar);
        if (index !== -1) {
            document.getElementById('usuarios').innerHTML = "<p>" + correoAConsultar + "</p>";
        } else {
            alert("El correo no existe.");
        }
    }
}

function catalogo() {
    if (usuarioActual !== null) {
        var correosUsuario = usuariosRegistrados[usuarioActual].correos;
        var catalogoHTML = "<h3>Catálogo de Correos Electrónicos:</h3><ul>";
        for (var i = 0; i < correosUsuario.length; i++) {
            catalogoHTML += "<li>" + correosUsuario[i] + "</li>";
        }
        catalogoHTML += "</ul>";
        document.getElementById('usuarios').innerHTML = catalogoHTML;
    }
}

function cerrarSesion() {
    usuarioActual = null;
    var submenu = document.getElementById('submenu');
    var loginForm = document.getElementById('loginForm');
    var usuariosDiv = document.getElementById('usuarios');
    
    loginForm.style.display = 'block';
    submenu.style.display = 'none';
    usuariosDiv.innerHTML = "";
}

function mostrarUsuarios() {
    if (usuarioActual !== null) {
        var correosUsuario = usuariosRegistrados[usuarioActual].correos;
        var usuariosDiv = document.getElementById('usuarios');
        var usuariosHTML = "<h3>Correos Electrónicos Registrados:</h3><ul>";
        for (var i = 0; i < correosUsuario.length; i++) {
            usuariosHTML += "<li>" + correosUsuario[i] + "</li>";
        }
        usuariosHTML += "</ul>";
        usuariosDiv.innerHTML = usuariosHTML;
    }
}

