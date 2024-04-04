const //-------------- registro
      regsForm = document.getElementById('regsForm'),
      form = document.getElementById('form'),
      registrarBtn = document.getElementById('registrarBtn'),
      nombre = document.getElementById('nombre'),
      apellido = document.getElementById('apellido'),
      passInput = document.getElementById('passInput'),
      conInput = document.getElementById('conInput'),
      regsBtn = document.getElementById('regsBtn'),
      errA = document.getElementById('errA'),
      errB = document.getElementById('errB'),
      errC = document.getElementById('errC'),
      errD = document.getElementById('errD'),
      llena = document.getElementById('llena'),
      cargando = document.getElementById('cargando'),

      //-------------- sesión
      iniciaBtn = document.getElementById('iniciaBtn'),
      inicioForm = document.getElementById('inicioForm'),
      usuario = document.getElementById('usuario'),
      contrasena = document.getElementById('contrasena'),
      errE = document.getElementById('errE'),
      errF = document.getElementById('errF'),
      formUser = document.getElementById('formUser'),
      cargaSesion = document.getElementById('cargaSesion'),
      completa = document.getElementById('completa'); 

//------------------ botones de cambio (registro y sesión)

iniciaBtn.addEventListener('click', ()=>{
    regsForm.style.display = 'none';
    inicioForm.style.display = 'block';
});

registrarBtn.addEventListener('click', ()=>{
    regsForm.style.display = 'block';
    inicioForm.style.display = 'none';
});

//------------------- validaciones registro

const expresionPass = /^.{4,12}$/;
      expresionName = /^[a-zA-ZÀ-ÿ\s]{2,15}$/,
      expresionAp = /^[a-zA-ZÀ-ÿ\s]{3,15}$/;

function valExp(expresion, input, id, err){
    if(expresion.test(input)){
        id.classList.add('inputRIGHT');
        id.classList.remove('inputERROR');
        err.classList.remove('err');
    } else {
        id.classList.remove('inputRIGHT');
        id.classList.add('inputERROR');
        err.classList.add('err');
    };
};

nombre.addEventListener('keyup', ()=>{
    valExp(expresionName, nombre.value, nombre, errA);
});

apellido.addEventListener('keyup', ()=>{
    valExp(expresionAp, apellido.value, apellido, errB);
});

passInput.addEventListener('keyup', ()=>{
    const pass = passInput.value;
    valExp(expresionPass, pass, passInput, errC);
});

conInput.addEventListener('keyup', ()=>{
    const passConf = conInput.value,
          pass = passInput.value;
    if(expresionPass.test(passConf) && passConf === pass){
        conInput.classList.add('inputRIGHT');
        conInput.classList.remove('inputERROR');
        errD.classList.remove('err');
    } else {
        conInput.classList.remove('inputRIGHT');
        conInput.classList.add('inputERROR');
        errD.classList.add('err');
    };
});

function s (input, inpu, inp, inn){
    if (input.value == "" || inpu.value == "" || inp.value == "" || inn.value == ""){
        a = false;
        input.classList.add('inputERROR');
        inpu.classList.add('inputERROR');
        inp.classList.add('inputERROR');
        inn.classList.add('inputERROR');
    } else if (expresionName.test(input.value) && expresionAp.test(inpu.value) && expresionPass.test(inp.value) && inn.value === inp.value){
        a = true;
    };
};

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    s(nombre, apellido, passInput, conInput);
    if(a == false){
           llena.innerHTML = `<b>Llena los campos para poder avanzar</b>`;
    } else if (a == true){
           const registro = {name: nombre.value, last: apellido.value, word: passInput.value};
           localStorage.setItem('registrado', JSON.stringify(registro));
           localStorage.setItem('toast', JSON.stringify(true));
           cargando.innerHTML = "Cargando perfil...";
           setTimeout(()=>{
               location.href='./perfil.html';
           }, 2000);
    };
});

//------------------- inicio sesión

usuario.addEventListener('keyup', ()=>{
    const userSaved = localStorage.getItem('user');
    if(usuario.value == userSaved){
        usuario.classList.add('inputRIGHT');
        usuario.classList.remove('inputERROR');
        errE.classList.remove('err');
    } else {
        usuario.classList.remove('inputRIGHT');
        usuario.classList.add('inputERROR');
        errE.classList.add('err');
    };
});

function d (input){
    const userSaved = localStorage.getItem('user');
    if (input.value == ""){
        b = false;
        input.classList.add('inputERROR');
    } else if (input.value === userSaved){
        b = true;
    };
};

formUser.addEventListener('submit', (e)=>{
    e.preventDefault();
    d(usuario);
    if(b == false){
           completa.innerHTML = `<b>Llena los campos para poder ingresar</b>`;
    } else if (b == true){
           cargaSesion.innerHTML = "Ingresando...";
           setTimeout(()=>{
               location.href='./perfil.html';
           }, 2000);
    };
});