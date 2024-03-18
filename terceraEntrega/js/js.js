const saldo = document.getElementById('saldo'),
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
      
      buscaTramo = document.getElementById('inputTramos'),
      buscaAltura = document.getElementById('inputAltura'),
      buscarTransportesBtn = document.getElementById('buscarTransportesBtn'),
      lineas = document.getElementById('lineas'),
      buscaTransportes = document.getElementById('buscaTransportes');
  
 
//--------------------------------------------------------------------------------- sube 

saldoInicial = 500;
saldo.innerHTML = `<p>Saldo: $${saldoInicial}</p>`;


const numeroCuentaSube = document.getElementById('inputSubeNumero').value;


btnListo.addEventListener("click", ()=>{
        subeAccount.style.display = 'block';
        buscaCuentaSube.style.display = 'none';
        cargaSube.style.display = 'none';
        saldoActual.style.display = 'none';
        mensajeErrorRecordar.style.display = 'none';

        const numeroCuentaSube = document.getElementById('inputSubeNumero').value;
        subeNumero.innerHTML = `<p>Cuenta número: ${numeroCuentaSube}</p>`;

        localStorage.setItem('sube', numeroCuentaSube);

});

btnRecordar.addEventListener("click", ()=>{
                subeAccount.style.display = 'block';
                buscaCuentaSube.style.display = 'none';
                mensajeErrorRecordar.style.display = 'none';

                const cuentaGuardada = JSON.parse(localStorage.getItem('sube'));
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

const lineaRecorrido = [
        {linea: "1",
         puntas:"Moron - Primera Junta",
         tramos:[],
         altura:[]
        },
        {linea: "2",
         puntas:"Lomas del Mirador - Liniers - Aduana - Costanera Sur",
         tramos:[],
         altura:[]
        },
        {linea: "4",
         puntas:"Costanera Sur - Liniers - Lomas del Mirador - Correo Central",
         tramos:[],
         altura:[]
        },
        {linea: "5",
         puntas:"Barrio Piedrabuena - Lacarra y Av. Rivadavia (Floresta) - Tribunales - Retiro",
         tramos:[],
         altura:[]
        },
        {linea: "6",
         puntas:"Hospital Ferroviario - Retiro - Pompeya - Villa Soldati",
         tramos:[],
         altura:[]
        },
        {linea: "7",
         puntas:"Retiro - Once - Parque Avellaneda - Barrio Samore",
         tramos:[],
         altura:[]
        },
        {linea: "8",
         puntas:"La Boca - Plaza de Mayo - Retiro - Aeroparque - Liniers - Barrio Piedrabuena - Mercado Central - Aeropuerto de Ezeiza",
         tramos:[],
         altura:[]
        },
        {linea: "9",
         puntas:"Retiro - Obelisco - Constitucion - Villa Caraza",
         tramos:[],
         altura:[]
        },
        {linea: "10",
         puntas:"Puente Pacifico - Palermo - Villa Dominico - Sarandi",
         tramos:[],
         altura:[]
        },
        {linea: "12",
         puntas:"Puente Pueyrredon - Plaza Constitucion - Puente Pacifico - Palermo - Plaza Falucho",
         tramos:[],
         altura:[]
        },
        {linea: "15",
         puntas:"Puente Uriburu - Barrancas de Belgrano - Benavidez - General Pacheco",
         tramos:[],
         altura:[]
        },
        {linea: "17",
         puntas:"Facultad de Derecho - Wilde",
         tramos:[],
         altura:[]
        },
        {linea: "19",
         puntas:"Plaza Miserere - Carapachay",
         tramos:[],
         altura:[]
        },
        {linea: "20",
         puntas:"Retiro - Esteban Echeverria",
         tramos:[],
         altura:[]
        },
        {linea: "21",
         puntas:"Puente La Noria - Liniers - Puente Saavedra - Vicente Lopez - Florida - Fabrica Ford - Tigre",
         tramos:[],
         altura:[]
        },
        {linea: "22",
         puntas:"Retiro - Quilmes",
         tramos:[],
         altura:[]
        },
        {linea: "23",
         puntas:"Retiro - Villa Soldati",
         tramos:[],
         altura:[]
        },
        {linea: "24",
         puntas:"Villa del Parque - Cementario de Avellaneda - Wilde - Avellaneda",
         tramos:[],
         altura:[]
        },
        {linea: "25",
         puntas:"Estacion Saenz Peña - La Boca",
         tramos:[],
         altura:[]
        },
        {linea: "26",
         puntas:"Retiro - Barrio Rivadavia",
         tramos:[],
         altura:[]
        },
        {linea: "28",
         puntas:"Retiro - Puente de La Noria - Puente Uriburu - Liniers - Puente Saavedra - Ciudad Universitaria",
         tramos:[],
         altura:[]
        },
        {linea: "29",
         puntas:"La Boca - Estacion Rivadavia - Olivos - Parque Sarmiento",
         tramos:[],
         altura:[]
        },
        {linea: "31",
         puntas:"Plaza Miserere - Nueva Pompeya - Ingeniero Budge - Av. Olimpo y Camino de Cintura",
         tramos:[],
         altura:[]
        },
        {linea: "32",
         puntas:"Plaza Miserere - Lanus - Nueva Pompeya - Remedios de Escalada",
         tramos:[],
         altura:[]
        },
        {linea: "33",
         puntas:"Ciudad Universitaria - Retiro - Monte Chingolo - Remedios de Escalada",
         tramos:[],
         altura:[]
        },
        {linea: "34",
         puntas:"Liniers - Palermo - Hipodromo Argentino de Palermo - Aeroparque Jorge Newbery - Ciudad Universitaria",
         tramos:[],
         altura:[]
        },
        {linea: "36",
         puntas:"Villa Celina - Puente de La Noria - Flores - Plaza Italia",
         tramos:[],
         altura:[]
        },
        {linea: "37",
         puntas:"Lanus - Congreso - Palermo - Ciudad Universitaria",
         tramos:[],
         altura:[]
        },
        {linea: "39",
         puntas:"Obelisco - Plaza Italia - Palermo - Chacarita - Constitucion - Barracas",
         tramos:[],
         altura:[]
        },
        {linea: "41",
         puntas:"Plaza Martin Fierro - Plaza Miserere - Plaza Italia - Munro",
         tramos:[],
         altura:[]
        },
        {linea: "42",
         puntas:"Nueva Pompeya - Ciudad Universitaria",
         tramos:[],
         altura:[]
        },
        {linea: "44",
         puntas:"Barrancas de Belgrano - Puente Uriburu",
         tramos:[],
         altura:[]
        },
        {linea: "45",
         puntas:"Ciudad Universitaria - Retiro - Constitucion - Lanus - Remedios de Escalada",
         tramos:[],
         altura:[]
        },
        {linea: "46",
         puntas:"San Justo - Liniers - La Boca - Universidad Nacional de La Matanza",
         tramos:[],
         altura:[]
        },
        {linea: "47",
         puntas:"Autodromo Oscar A. Galvez - Liniers - Chacarita",
         tramos:[],
         altura:[]
        },
        {linea: "49",
         puntas:"Primera Junta - La Tablada - Isidro Casanova",
         tramos:[],
         altura:[]
        },
        {linea: "50",
         puntas:"Terminal de Omnibus de Retiro - Barrio Luis Piedrabuena - Avenida Eva Perón y Avenida General Paz - Hospital Piñero",
         tramos:[],
         altura:[]
        },
        {linea: "51",
         puntas:"Constitucion - Cañuelas - Lanus - Coronel Brandsen",
         tramos:[],
         altura:[]
        },
        {linea: "53",
         puntas:"La Boca - Constitucion - Flores - Jose C. Paz",
         tramos:[],
         altura:[]
        },
        {linea: "55",
         puntas:"Barrancas de Belgrano - San Justo - Don Bosco - Flores - Palermo - Barrancas de Belgrano",
         tramos:[],
         altura:[]
        },
        {linea: "56",
         puntas:"Retiro - Ciudad Evita",
         tramos:[],
         altura:[]
        },
        {linea: "57",
         puntas:"Palermo - Plaza Italia - Moreno - Lujan - Pilar - Capilla del Señor - Plaza Miserere - Puente Saavedra",
         tramos:[],
         altura:[]
        },
        {linea: "59",
         puntas:"Estacion Buenos Aires - Constitucion - Obelisco - Plaza Italia - Puente Saavedra - Panamericana y San Lorenzo",
         tramos:[],
         altura:[]
        },
        {linea: "60",
         puntas:"Barrancas de Belgrano - Puente Saavedra - San Isidro - Tigre - Escobar - Plaza Italia - Constitucion",
         tramos:["terminal de escobar", "av 25 de mayo", "25 de mayo", "panamericana", "colectora oeste", "puente garin", "fabrica ford", "san isidro labrador", "ruiz huidobro", "congreso", "monroe", "av juramento", "estacion belgrano c", "luis maria campos", "hospital militar", "uriarte"],
         altura:["colectora este", "san juan", "lacroze"]
        },
        {linea: "61",
         puntas:"Constitucion - Plaza Miserere - Facultad de Derecho - Retiro",
         tramos:[],
         altura:[]
        },
        {linea: "62",
         puntas:"Constitucion - Retiro - Facultad de Derecho - Plaza Miserere",
         tramos:[],
         altura:[]
        },
        {linea: "63",
         puntas:"Barrancas de Belgrano - Villa Madero",
         tramos:[],
         altura:[]
        },
        {linea: "64",
         puntas:"Barrancas de Belgrano - Plaza Italia - Once - Plaza de Mayo - La Boca",
         tramos:[],
         altura:[]
        },
        {linea: "65",
         puntas:"Constitucion - Barrancas de Belgrano",
         tramos:[],
         altura:[]
        },
        {linea: "67",
         puntas:"Hospital Rawson - Constitucion - Plaza Italia - Villa Martelli - Munro",
         tramos:[],
         altura:[]
        },
        {linea: "68",
         puntas:"Puente Saavedra - Puente Pacifico - Plaza Italia - Plaza Miserere",
         tramos:[],
         altura:[]
        },
        {linea: "70",
         puntas:"Retiro - Valentin Alsina",
         tramos:[],
         altura:[]
        },
        {linea: "71",
         puntas:"Villa Adelina - Villa Urquiza - Chacarita - Plaza Miserere",
         tramos:[],
         altura:[]
        },
        {linea: "74",
         puntas:"Correo Central - Burzaco",
         tramos:[],
         altura:[]
        },
        {linea: "75",
         puntas:"Retiro - Tribunales - Plaza Miserere - Nueva Pompeya - Lanus - Remedios de Escalada",
         tramos:[],
         altura:[]
        },
        {linea: "76",
         puntas:"Nueva Pompeya - Villa Soldati - Chacarita - Saavedra",
         tramos:[],
         altura:[]
        },
        {linea: "78",
         puntas:"Chacarita - Villa Adelina",
         tramos:[],
         altura:[]
        },
        {linea: "79",
         puntas:"Constitucion - Lomas de Zamora - Remedios de Escalada - Aeropuerto de Ezeiza - Cañuelas - San Vicente",
         tramos:["eva peron"],
         altura:["monteverde"]
        },
        {linea: "80",
         puntas:"Barrio Sarmiento - Villa Lugano - Liniers - Barrancas de Belgrano",
         tramos:[],
         altura:[]
        },
        {linea: "84",
         puntas:"Villa del Parque - Constitucion",
         tramos:[],
         altura:[]
        },
        {linea: "85",
         puntas:"Ciudadela Norte - Villa Devoto - Nueva Pompeya - Quilmes",
         tramos:[],
         altura:[]
        },
        {linea: "86",
         puntas:"La Boca - Congreso - Primera Junta - Flores - Mercado Central - Gonzalez Catan",
         tramos:[],
         altura:[]
        },
        {linea: "87",
         puntas:"Chacarita - Jose Leon Suarez - Boulogne - Fabrica Ford",
         tramos:[],
         altura:[]
        },
        {linea: "88",
         puntas:"Plaza Miserere - Flores - Liniers - San Justo - Lobos - Cañuelas - General Belgrano",
         tramos:[],
         altura:[]
        },
        {linea: "90",
         puntas:"Constitucion - Congreso - Chacarita - Villa Devoto",
         tramos:[],
         altura:[]
        },
        {linea: "91",
         puntas:"Retiro - Constitucion - Aldo Bonzi - Villegas",
         tramos:[],
         altura:[]
        },
        {linea: "92",
         puntas:"Retiro - Recoleta - Flores - Camino de Cintura y Av. Olimpo",
         tramos:[],
         altura:[]
        },
        {linea: "93",
         puntas:"Munro - Palermo - Retiro - Avellaneda",
         tramos:[],
         altura:[]
        },
        {linea: "95",
         puntas:"Avellaneda - Facultad de Medicina - Palermo - Estacion Carranza",
         tramos:[],
         altura:[]
        },
        {linea: "96",
         puntas:"Constitucion - Flores - Liniers - San Justo - Laferrere - Gonzalez Catan - Isidro Casanova - Rafael Castillo - San Alberto - Villa Scasso",
         tramos:[],
         altura:[]
        },
        {linea: "97",
         puntas:"Constitucion - Av. Eva Peron y Av. Gral. Paz - Gonzalez Catan - Moron",
         tramos:[],
         altura:[]
        },
        {linea: "98",
         puntas:"Plaza Miserere - Constitucion - Berazategui - Quilmes",
         tramos:[],
         altura:[]
        },
        {linea: "99",
         puntas:"Av. Cordoba y Madero - Tribunales - Liniers",
         tramos:[],
         altura:[]
        },
        {linea: "100",
         puntas:"Retiro - Constitucion - Lanus",
         tramos:[],
         altura:[]
        },
        {linea: "101",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "102",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "103",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "105",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "106",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "107",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "108",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "109",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "110",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "111",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "112",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "113",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "114",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "115",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "117",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "118",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "119",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "123",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "124",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "126",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "127",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "128",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "129",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "130",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "132",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "133",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "134",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "135",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "136",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "140",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "141",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "143",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "145",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "146",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "148",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "150",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "151",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "152",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "153",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "154",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "158",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "159",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "160 A",
         puntas:"",
         tramos:["ciudad universitaria", "intendente guiraldes", "dorrego", "av dorrego", "andres bello", "av presidente figueroa alcorta", "av figueroa alcorta", "figueroa alcorta", "avenida intendente bullrich","av intendente bullrich",
                 "cerviño", "fray justo santa maria de oro", "thames", "plaza italia", "av gral las heras", "av las heras", "scalabrini ortiz", "paraguay", "medrano", "gorriti", "castro barros", "venezuela", "agrelo", "raulet", "av saenz", "dr alfredo palacios",
                 "avenida teniente general juan domingo peron", "dr crotti", "valparaiso", "armenia", "rucci", "gral juan farrell", "coronel erezcano", "humahuaca", "humberto primo", "la rioja", "enrique fernandez", "viamonte", "ruta nacional", "alsina", "chacabuco",
                 "av almirante brown", "av eva peron", "perez", "espora"],
         altura:["av presidente figueroa alcorta", "av figueroa alcorta", "figueroa alcorta", "de los ombues", "sinclair", "av gral las heras", "av las heras", "paraguay", "soler", "costa rica", "medrano", "cordoba", "guardia vieja", "av corrientes",
                 "teniente peron", "castro barros", "boedo", "juan de garay", "famatina", "avenida teniente general juan domingo peron", "viamonte", "san martin", "espora", "monteverde"]
        },
        {linea: "160 C",
         puntas:"",
         tramos:["centro de transbordo lanus", "centro de transbordo lanús", "tucumán", "tucuman", "Carlos Tejedor 83", "gobernador carlos tejedor 83","carlos tejedor 83", "carlos tejedor 289",
                 "gobernador carlos tejedor 289", "gobernador carlos tejedor 587", "carlos tejedor 587", "gobernador carlos casares", "carlos casares", "viamonte", "gral viamonte", "viamonte 773",
                 "viamonte 1781", "canadá", "canada", "pilcomayo", "av rivadavia", "gobernador oliden", "doctor ricardo balbín", "ricardo balbin", "boquerón", "boqueron", "rucci", "josé ignacio rucci",
                 "jose ignacio rucci", "jose ignacio rucci 1716", "jose ignacio rucci 1014", "jose ignacio rucci 916", "jose ignacio rucci 822", "itapiru", "av tte gral juan domingo peron 3000",
                 "avenida teniente general juan domingo peron 3000", "presidente peron", "doctor jose darragueira", "josé darragueira", "presidente teniente general juan domingo peron 3900", "palacios", "av saenz",
                 "ochoa", "caseros", "av caseros", "avenida caseros", "castro", "catro 2000", "colombres", "colombres 1594", "salguero", "gascon 685", "gascon", "araoz", "araoz 2100", "juncal", "av gral las heras", "av las heras",
                 "republica arabe siria", "plaza italia", "pacifico", "avenida intendente bullrich","av intendente bullrich", "avenida dorrego", "av dorrego", "avenida sarmiento", "av sarmiento", "av costanera rafael obligado",
                 "costanera", "el abanico", "pabellon 1", "pabellon 2", "pabellon 3", "ciudad universitaria", "aeroparque", "av serviño", "thames", "paraguay", "fray justo santa maria de oro"],
         altura:["avenida yrigoyen", "av yrigoyen", "viamonte", "gral viamonte", "jujuy", "bolivia", "fray julian lagos", "fray julían lagos", "balcarce", "formosa", "presidente peron", "armenia", "valparaiso",
                 "av remedios de escalada", "avenida remedios de escalada", "av saenz","caseros", "av caseros", "avenida caseros", "av pavon", "avenida pavon", "av diaz velez", "jeronimo salguero", "gorriti", "araoz",
                 "av gral las heras", "av las heras", "sinclair"]
        },
        {linea: "160 L",
         puntas:"",
         tramos:["centro de transbordo lanus", "centro de transbordo lanús", "tucumán", "tucuman", "Carlos Tejedor 83", "gobernador carlos tejedor 83","carlos tejedor 83", "carlos tejedor 289",
                 "gobernador carlos tejedor 289", "gobernador carlos tejedor 587", "carlos tejedor 587", "gobernador carlos casares", "carlos casares", "viamonte", "gral viamonte", "viamonte 773",
                 "viamonte 1781", "canadá", "canada", "pilcomayo", "av rivadavia", "gobernador oliden", "doctor ricardo balbín", "ricardo balbin", "boquerón", "boqueron", "rucci", "josé ignacio rucci",
                 "jose ignacio rucci", "jose ignacio rucci 1716", "jose ignacio rucci 1014", "jose ignacio rucci 916", "jose ignacio rucci 822", "itapiru", "av tte gral juan domingo peron 3000",
                 "avenida teniente general juan domingo peron 3000", "presidente peron", "doctor jose darragueira", "josé darragueira", "presidente teniente general juan domingo peron 3900", "palacios", "av saenz",
                 "ochoa", "caseros", "av caseros", "avenida caseros", "castro", "catro 2000", "colombres", "colombres 1594", "salguero", "gascon 685", "gascon", "araoz", "araoz 2100", "juncal", "av gral las heras", "av las heras",
                 "republica arabe siria", "plaza italia", "pacifico", "avenida intendente bullrich","av intendente bullrich", "avenida dorrego", "av dorrego", "avenida sarmiento", "av sarmiento", "av costanera rafael obligado",
                 "costanera", "el abanico", "pabellon 1", "pabellon 2", "pabellon 3", "ciudad universitaria"],
         altura:["avenida yrigoyen", "av yrigoyen", "viamonte", "gral viamonte", "jujuy", "bolivia", "fray julian lagos", "fray julían lagos", "balcarce", "formosa", "presidente peron", "armenia", "valparaiso",
                 "av remedios de escalada", "avenida remedios de escalada", "av saenz","caseros", "av caseros", "avenida caseros", "av pavon", "avenida pavon", "av diaz velez", "jeronimo salguero", "gorriti", "araoz",
                 "av gral las heras", "av las heras"]
        },
        {linea: "161",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "163",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "164",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "165",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "166",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "168",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "169",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "172",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "174",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "175",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "176",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "177",
         puntas:"",
         tramos:["ricardo rojas", "tomas espora", "eva peron", "avenida eva peron", "monteverde", "figueroa", "manuel araujo", "iglesias paz", "rio bermejo"],
         altura:["amancio alcorta","monteverde", "ruta provincial", "italia", "mercedes", "carlos gardel", "apecechea", "fernando ochoa", "montiel", "martin fierro", "villafañe", "lavarden", "estanislao del campo", "el baqueano", "luis viale",
                 "concordia", "pablo podesta", "manuel araujo", "rio diamante", "eva peron", "avenida eva peron", "rio limay"]
        },
        {linea: "178",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "179",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "180",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "181",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "182",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "184",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "185",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "188",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "193",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "194",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "195",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "200",
         puntas:"",
         tramos:["avellaneda", "sarmiento", "campbell", "avenida presidente hipolito yrigoyen", "avenida hipolito yrigoyen", "avenida yrigoyen", "av yrigoyen", "capitan olivera", "cordoba", "castelli", "santa elena", "islas malvinas",
                 "av de las americas", "españa", "ruta provincial", "mexico", "av antartida", "san salvador", "atenas", "camino real", "honduras", "uruguay", "brasil", "estacion alejandro korn", "aviador valdez 23", "av independencia",
                 "avenida independencia", "reconquista", "ruta 210", "calle 807"],
         altura:["avenida yrigoyen", "av yrigoyen","avenida presidente hipolito yrigoyen", "avenida hipolito yrigoyen", "san juan", "av eva duarte de peron", "calle 25", "av francia", "san miguel del monte", "mansilla", "av independencia",
                 "avenida independencia", "obligado", "san vicente", "calle 809"]
        },
        {linea: "202",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "203",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "204 A",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "204 B",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "205",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "218",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "219",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "228 A",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "228 B",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "228 D",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "228 E",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "228 F",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "236",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "237",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "238",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "242",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "244",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "247",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "252",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "253",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "257",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "263",
         puntas:"",
         tramos:["eva peron"],
         altura:["monteverde"]
        },
        {linea: "266",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "269",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "271",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "273",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "275",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "276",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "277",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "278",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "281",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "283",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "284",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "288",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "291",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "293",
         puntas:"",
         tramos:["eva peron"],
         altura:["monteverde"]
        },
        {linea: "295",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "298",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "299",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "300",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "302",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "303",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "306",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "307",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "310",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "311",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "312",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "314",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "315",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "317",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "318",
         puntas:"",
         tramos:["eva peron", "avenida eva peron", "avenida eva peron 3019", "eva peron 3019", "avenida eva peron 1900", "eva peron 1900", "avenida eva peron 1388", "eva peron 1388", "rio limay 80", "esquiu", "aristobulo del valle",
                 "aristóbulo del valle", "paso", "rio diamante 2652", "río diamante 2652", "manuel araujo", "figueroa",],
         altura:["monteverde", "leandro n alem", "leandro n. alem", "paso", "camino de cintura"]
        },
        {linea: "320",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "321",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "324",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "325",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "326",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "327",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "328",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "329",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "333",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "336",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "338",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "341",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "343",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "354",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "365",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "371",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "372",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "373",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "378",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "379",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "382",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "384",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "386",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "390",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "391",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "392",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "395",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "405",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "406",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "407",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "410",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "421",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "422",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "429",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "430",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "435",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "437",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "441",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "446",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "461",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "462",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "463",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "464",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "500",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "501",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "503",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "504",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "505",
         puntas:"",
         tramos:["eva peron"],
         altura:["monteverde"]
        },
        {linea: "506",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "514",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "520",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "521",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "523",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "524",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "526",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "527",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "532",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "540",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "541",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "542",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "543",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "548",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "549",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "550",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "551",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "552",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "553",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "561",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "562",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "564",
         puntas:"",
         tramos:[],
         altura:[]
        },
        {linea: "570",
         puntas:"",
         tramos:[],
         altura:[]
        },
      ]

buscarTransportesBtn.addEventListener('click', ()=>{
        for (let i = 0; i <= lineaRecorrido.length; i++){
                lineaRecorrido.filter((ii)=>{
                  if(ii.tramos.includes(buscaTramo.value) && ii.altura.includes(buscaAltura.value)){
                        i = ii.tramos && ii.altura;
                        const resultado = ii.linea;
                        lineas.innerHTML += `<br>${resultado}<hr>`;
                   };
                });
        };

        buscaTransportes.style.display = 'none';
        lineas.style.display = 'block';

});