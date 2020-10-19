//criando mapa
const map = L.map('mapid').setView([-5.0959061,-42.8120304], 15)

//criando e adicionando primeira camada
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//criando icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})
 
let marker;


//criando e adicionando marcador ao clicar
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icone
    marker && map.removeLayer(marker)


    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})


//upload de  fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verificar se o campo esta vazio, se sim, n add ao container
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //limpar o campo antes de adicionar o clone
     input.value = ""
  
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
    
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o campo
        span.parentNode.children[0].value =""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}
    
//troca do sim e n, fim de semana
function toggleSelect(event) {
    //pegar o botao clicado

    //verificar o valor(sim ou n)


    
    //retirar a class .active dos 2 botoes
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    })

    //colocar a class .active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name ="open_on_weekends"]')

    input.value = button.dataset.value
}