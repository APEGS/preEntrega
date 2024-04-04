const //---------------- sube
      saldo = document.getElementById('saldo'),
      subeNumero = document.getElementById('subeNumero'),
      btnRecarga = document.getElementById('btnRecarga'),
      btnListo = document.getElementById('btnListo'),
      subeAccount = document.getElementById('subeAccount'),
      buscaCuentaSube = document.getElementById('buscaCuentaSube'),
      cargaSube = document.getElementById('cargaSube'),
      btnCerrarSube = document.getElementById('btnCerrarSube'),
      acreditarSubeBtn = document.getElementById('acreditarSubeBtn'),
      inputRecarga = document.getElementById('inputRecarga'),
      saldoActual = document.getElementById('saldoActual'),
      mensajeErrorRecordar = document.getElementById('mensajeErrorRecordar'),
      abrirSube = document.getElementById('abrirSube'),
      subeCont = document.getElementById('subeCont'),
      inputSubeNumero = document.getElementById('inputSubeNumero'),
      x = document.getElementById('x'),
      
      //-------------- transportes
      buscaTramo = document.getElementById('inputTramos'),
      buscaAltura = document.getElementById('inputAltura'),
      buscarTransportesBtn = document.getElementById('buscarTransportesBtn'),
      lineas = document.getElementById('lineas'),
      buscaTransportes = document.getElementById('buscaTransportes'),
      abrirTransportes = document.getElementById('abrirTransportes'),
      transCont = document.getElementById('transCont'),
      atrasTransporte = document.getElementById('atrasTransporte'),
      resultadoLineas = document.getElementById('resultadoLineas'),
      xx = document.getElementById('xx');

//---------------------------------------------------------- botones (desplegar opciones)

let contador = 0;

function btnOC (cont){
        contador++ ? 1 : 2;
        if(contador == 1){
                cont.classList.remove('display')
        } else if (contador == 2){
                cont.classList.add('display')
                contador = 0;
        }
}

abrirSube.addEventListener("click", ()=>{
        btnOC(subeCont);
});

abrirTransportes.addEventListener("click", ()=>{
        btnOC(transCont);
});

function close (uno){
        uno.classList.add('display');
};

x.addEventListener("click", ()=>{
        contador = 0;
        if(contador == 0){
                close(subeCont);
        }
});

xx.addEventListener("click", ()=>{
        contador = 0;
        if(contador == 0){
                close(transCont);
        }
});

//--------------------------------------------------------------------------------- sube 

saldoInicial = 500;
saldo.innerHTML = `<p>Saldo: $${saldoInicial}</p>`;

btnListo.addEventListener("click", ()=>{
        const numeroCuentaSube = document.getElementById('inputSubeNumero').value;
        if(numeroCuentaSube.length <= 15 && numeroCuentaSube.length >= 17){
                buscaCuentaSube.style.display = 'block';
                inputSubeNumero.className = 'input errorINGRESO';
                subeAccount.style.display = 'none';
        } else if(numeroCuentaSube.length == 16) {
                localStorage.setItem('sube', numeroCuentaSube);

                subeAccount.style.display = 'block';
                buscaCuentaSube.style.display = 'none';
                cargaSube.style.display = 'none';
                saldoActual.style.display = 'none';
                mensajeErrorRecordar.style.display = 'none';
        }

        subeNumero.innerHTML = `<p>Cuenta número: ${numeroCuentaSube}</p>`;
});

btnRecordar.addEventListener("click", ()=>{ 
        const cuentaGuardada = JSON.parse(localStorage.getItem('sube'));
        subeAccount.style.display = 'block';
        buscaCuentaSube.style.display = 'none';
        mensajeErrorRecordar.style.display = 'none';

        subeNumero.innerHTML = `<p>Cuenta número: ${cuentaGuardada}</p>`;
});


btnRecarga.addEventListener("click", ()=>{
        subeAccount.style.display = 'none';
        buscaCuentaSube.style.display = 'none';
        cargaSube.style.display = 'block';
});

btnCerrarSube.addEventListener("click", ()=>{
        subeAccount.style.display = 'none';
        buscaCuentaSube.style.display = 'block';
        cargaSube.style.display = 'none';
        document.getElementById('inputSubeNumero').value = '';
});

acreditarSubeBtn.addEventListener("click", ()=>{
        subeAccount.style.display = 'block';
        buscaCuentaSube.style.display = 'none';
        cargaSube.style.display = 'none';
        saldoActual.style.display = 'block';

        const montoSube = document.getElementById('inputRecarga').value;
        const acreditarSube = parseInt(montoSube) + parseInt(saldoInicial);
        saldo.innerHTML = `<p>Saldo inicial: $${saldoInicial}</p>`;
        saldoActual.innerHTML = `<p>Saldo actual: $${acreditarSube}</p>`;
});

olvidarBtn.addEventListener('click', ()=>{
        subeAccount.style.display = 'block';
        buscaCuentaSube.style.display = 'none';
        cargaSube.style.display = 'none';
});


//------------------------------------------------------------------------------ transporte publico

fetch("json/recorridos.json")
.then(res => res.json())
.then(lineaRecorrido=> {
        buscarTransportesBtn.addEventListener('click', ()=>{

                for (let i = 0; i <= lineaRecorrido.length; i++){
                        lineaRecorrido.filter((ii)=>{
                          if(ii.tramos.includes(buscaTramo.value) && ii.altura.includes(buscaAltura.value)){
                                i = ii.tramos && ii.altura;
                                const resultado = ii.linea;
                                resultadoLineas.innerHTML += `<br>${resultado}<hr>`;
                           };
                        });
                        break;
                };
        
                buscaTransportes.style.display = 'none';
                lineas.style.display = 'block';
        
        });
});

atrasTransporte.addEventListener('click', ()=>{
        resultadoLineas.innerHTML = "";
        lineas.style.display = 'none';
        buscaTransportes.style.display = 'block';
        buscaTramo.value = '';
        buscaAltura.value = '';
});