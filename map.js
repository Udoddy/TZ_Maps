// Initialize and add the map
let map;
const Tanzania = { lat: -6.3690, lng: 34.8888 };
const Serengeti = { lat: -2.7, lng: 35.1 };
const MountKilimanjaro = { lat: -3.0, lng: 37.3 };
const ZanzibarArchipelago = { lat: -6.1, lng: 39.2 };
const NgorongoroConservationArea = { lat: -3.2, lng: 35.5 };

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: Tanzania,
        zoom: 7,
    });

    // Add marker
    const marker = new google.maps.Marker({
        position: Serengeti ,
        //label: "Serengeti",
        icon:   "https://img.icons8.com/emoji/48/000000/lion-emoji.png",
        map: map,
    });
    const marker2 = new google.maps.Marker({
        position: MountKilimanjaro ,
        //label: "Mount Kilimanjaro",
        icon:   "https://img.icons8.com/emoji/48/000000/mountain-emoji.png",
        map: map,
    });
    const marker3 = new google.maps.Marker({
        position: ZanzibarArchipelago ,
        //label: "Zanzibar Archipelago",
        icon:   "https://img.icons8.com/emoji/48/000000/beach-with-umbrella-emoji.png",
        map: map,
    });
    const marker4 = new google.maps.Marker({
        position: NgorongoroConservationArea ,
        //label: "Ngorongoro Conservation Area",
        icon:   "https://img.icons8.com/emoji/48/000000/zebra-emoji.png",
        map: map,
    });
}