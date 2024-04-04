const //---------------- interacción de comunidad
      box = document.getElementById('box'),
      comNotes = document.getElementById('comNotes'),
      enviarNota = document.getElementById('enviarNota'),
      newNotes = document.getElementById('newNotes');

const cuenta = JSON.parse(localStorage.getItem('registrado'));
const {name, last} = cuenta;
let nombreUser = `${name}${last}1`;

const crearNotas = (user, nota) => {
  newNotes.innerHTML +=`<div class="notas">
                        <b>@${user}</b><br>
                        <p class="inNote">${nota.value}</p></div>`;
};

enviarNota.addEventListener('click', ()=>{
  crearNotas(nombreUser, box);
  box.value = "";
});