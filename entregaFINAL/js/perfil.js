const //-------------- perfil
      perfil = document.getElementById('perfil'),
      nombreUsuario = document.getElementById('nombreUsuario'),
      userHandler = document.getElementById('userHandler'),
      regsBtn = document.getElementById('regsBtn');

//------------------- perfil creado

function crearPerfil(usu){
    const {name, last} = usu;
    return `${name} ${last}`;
};

const cuenta = JSON.parse(localStorage.getItem('registrado'));
nombreUsuario.innerHTML = crearPerfil(cuenta);

//------------------- nombre de usuario

function crearPerfil(usu){
    const {name, last} = usu;
    return `${name} ${last}`;
};

function userName(usu){
    const {name, last} = usu;

    let nombreUser = `${name}${last}1`;
    userHandler.innerHTML = `<b>@${nombreUser}</b>`
    localStorage.setItem('user', nombreUser);
};

userName(cuenta);

//------------------ librería

let toast = JSON.parse(localStorage.getItem('toast'));
if(toast == true){
    Toastify({
        text: `Perfil creado exitosamente`,
        duration: 7000,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {background: "#20777a"},
    }).showToast();
    localStorage.removeItem('toast');
};