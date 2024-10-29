function openPopup(imgElement) {
    const popupOverlay = document.getElementById("popupOverlay");
    const popupImage = document.getElementById("popupImage");
    
    popupImage.src = imgElement.src;
    popupOverlay.style.display = "flex";
}

function closePopup() {
    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.display = "none";
}
