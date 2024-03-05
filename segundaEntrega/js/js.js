const lineaRecorrido = [
  {linea: "60",
   tramos:["terminal de escobar", "av 25 de mayo", "panamericana", "colectora oeste", "puente garin", "fabrica ford", "san isidro labrador", "ruiz huidobro", "congreso", "monroe", "av juramento", "estacion belgrano c", "luis maria campos", "hospital militar", "uriarte"],
   altura:["colectora este", "san juan", "lacroze"]
  },
  {linea: "160 A",
   tramos:["ciudad universitaria", "intendente guiraldes", "dorrego", "av dorrego", "andres bello", "av presidente figueroa alcorta", "av figueroa alcorta", "figueroa alcorta", "avenida intendente bullrich","av intendente bullrich",
           "cerviño", "fray justo santa maria de oro", "thames", "plaza italia", "av gral las heras", "av las heras", "scalabrini ortiz", "paraguay", "medrano", "gorriti", "castro barros", "venezuela", "agrelo", "raulet", "av saenz", "dr alfredo palacios",
           "avenida teniente general juan domingo peron", "dr crotti", "valparaiso", "armenia", "rucci", "gral juan farrell", "coronel erezcano", "humahuaca", "humberto primo", "la rioja", "enrique fernandez", "viamonte", "ruta nacional", "alsina", "chacabuco",
           "av almirante brown", "av eva peron", "perez", "espora"],
   altura:["av presidente figueroa alcorta", "av figueroa alcorta", "figueroa alcorta", "de los ombues", "sinclair", "av gral las heras", "av las heras", "paraguay", "soler", "costa rica", "medrano", "cordoba", "guardia vieja", "av corrientes",
           "teniente peron", "castro barros", "boedo", "juan de garay", "famatina", "avenida teniente general juan domingo peron", "viamonte", "san martin", "espora", "monteverde"]
  },
  {linea: "160 C",
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
  {linea: "177",
   tramos:["ricardo rojas", "tomas espora", "eva peron", "avenida eva peron", "monteverde", "figueroa", "manuel araujo", "iglesias paz", "rio bermejo"],
   altura:["amancio alcorta","monteverde", "ruta provincial", "italia", "mercedes", "carlos gardel", "apecechea", "fernando ochoa", "montiel", "martin fierro", "villafañe", "lavarden", "estanislao del campo", "el baqueano", "luis viale",
           "concordia", "pablo podesta", "manuel araujo", "rio diamante", "eva peron", "avenida eva peron", "rio limay"]
  },
  {linea: "200",
   tramos:["avellaneda", "sarmiento", "campbell", "avenida presidente hipolito yrigoyen", "avenida hipolito yrigoyen", "avenida yrigoyen", "av yrigoyen", "capitan olivera", "cordoba", "castelli", "santa elena", "islas malvinas",
           "av de las americas", "españa", "ruta provincial", "mexico", "av antartida", "san salvador", "atenas", "camino real", "honduras", "uruguay", "brasil", "estacion alejandro korn", "aviador valdez 23", "av independencia",
           "avenida independencia", "reconquista", "ruta 210", "calle 807"],
   altura:["avenida yrigoyen", "av yrigoyen","avenida presidente hipolito yrigoyen", "avenida hipolito yrigoyen", "san juan", "av eva duarte de peron", "calle 25", "av francia", "san miguel del monte", "mansilla", "av independencia",
           "avenida independencia", "obligado", "san vicente", "calle 809"]
  },
  {linea: "318",
   tramos:["eva peron", "avenida eva peron", "avenida eva peron 3019", "eva peron 3019", "avenida eva peron 1900", "eva peron 1900", "avenida eva peron 1388", "eva peron 1388", "rio limay 80", "esquiu", "aristobulo del valle",
           "aristóbulo del valle", "paso", "rio diamante 2652", "río diamante 2652", "manuel araujo", "figueroa",],
   altura:["monteverde", "leandro n alem", "leandro n. alem", "paso", "camino de cintura"]
  }
]

let buscaTramo = prompt("Nombre de calle 1");
let buscaAltura = prompt("¿Altura?");

for (let i = 0; i <= lineaRecorrido.length; i++){
  lineaRecorrido.filter((ii)=>{
    if(ii.tramos.includes(buscaTramo) && ii.altura.includes(buscaAltura)){
      i = ii.tramos && ii.altura;
      document.write(ii.linea + "  ");
    } else if (ii.tramos.includes(buscaTramo) && buscaAltura === ""){
      i = ii.tramos;
      document.write(ii.linea + "  ");
    }
  });
};