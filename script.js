document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner tous les liens d'images
    const lightboxLinks = document.querySelectorAll(".lightbox");
    
    // Créer l'élément de superposition pour la lightbox
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.classList.add("lightbox-overlay");
  
    const imgElement = document.createElement("img");
    const closeButton = document.createElement("span");
    closeButton.textContent = "×";
    closeButton.classList.add("close-btn");
  
    // Ajouter les éléments image et bouton de fermeture dans l'overlay
    lightboxOverlay.appendChild(imgElement);
    lightboxOverlay.appendChild(closeButton);
    document.body.appendChild(lightboxOverlay);
  
    // Ajouter un événement clic sur chaque lien d'image
    lightboxLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        imgElement.src = link.href;
        lightboxOverlay.classList.add("visible");
      });
    });
  
    // Fermer la lightbox en cliquant sur le bouton de fermeture ou l'overlay
    closeButton.addEventListener("click", () => {
      lightboxOverlay.classList.remove("visible");
    });
  
    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target === lightboxOverlay) {
        lightboxOverlay.classList.remove("visible");
      }
    });
  });
  