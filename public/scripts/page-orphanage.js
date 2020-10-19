//desabilitando intereção com mapa
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//criando mapa
const map = L.map('mapid', options).setView([-5.097532,-42.7954057], 15)

//criando e adicionando primeira camada
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//criando icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})


 

//criando e adicionando marcador
L
.marker([-5.0975693,-42.7939195], { icon })
.addTo(map)




//galeria de img
function selectImage(event) {
    const button = event.currentTarget  


    //buscar e remover todas as class active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    //atualizar o container de image
    imageContainer.src = image.src
    //adicionar a classe active para o botão
    button.classList.add('active')

}

