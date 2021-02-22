
//creat map
const map = L.map('mapid').setView([-27.221029,-49.6456188], 15);

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//creat icon 
const icon = L.icon({
    iconUrl:"./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
   
})

//creat popup overlay
let marker;

//creat and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove icon 
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})




// photos upload
function addPhotoField() {
   // pegar o container de fotos #images
   const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da útima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //verificar se o campo está vazio 
    const input =  newFieldContainer.children[0]
    if(input.value ==""){
        return
    }
    //limpar o campo antes de adicionar ao container de images
    input.value = "";
    
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
       
       span.parentNode.children[0].value = ""
        return
    }

    // deletar campo
    span.parentNode.remove();
}

// select yes or no
 function toggleSelect(event) {


    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));
    
    const button = event.currentTarget
    button.classList.add('active')   
    // pegar o botão clicado


    // verificar se sim ou não foi

    //atualizar o meu input hidden com valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}

function validate(event) {
    //validar se lat e lng estão preenchidos
   const needsLatAndLng = false;
    if(needsLatAndLng) {
    event.preventDefault()
    alert('Selecione um ponto no mapa')
    }
}
    
