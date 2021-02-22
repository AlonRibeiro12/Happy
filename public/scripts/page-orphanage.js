const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

// get map values from map
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;


//creat map
const map = L.map('mapid', options).setView([lat, lng], 15)

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//creat icon 
const icon = L.icon({
    iconUrl:"./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//creat and add marker
L.marker([lat, lng], { icon }).addTo(map);

/*image gallery */
function selectImage(event){
    const button = event.currentTarget

    // r4emove todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((buttons) => {
        buttons.classList.remove("active");
    })

        

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    // atualizar o container de image
    imageContainer.src = image.src
    // adicionar a classe .active
    button.classList.add('active')
}
