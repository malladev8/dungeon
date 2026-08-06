

const gallery = document.getElementById("gallery");

function populateGallery(containerId, imageIndices)
{
    const container = document.getElementById(containerId);

    imageIndices.forEach(index =>
    {
        const img = document.createElement("img");

        img.src = `assets/images/gallery/thumbs/IMG_${index}.jpg`;

        img.dataset.full =
            `assets/images/gallery/full/IMG_${index}.jpg`;

        img.loading = "lazy";

        container.appendChild(img);
    });
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

function initializeLightbox(galleryId)
{
    const gallery = document.getElementById(galleryId);

    if (!gallery)
        return;

    gallery.addEventListener("click", (event) =>
    {
        if (event.target.tagName !== "IMG")
            return;

        lightboxImage.src = event.target.dataset.full;
        lightbox.classList.remove("hidden");
    });
}

initializeLightbox("gallery");
initializeLightbox("featuredGallery");

document.getElementById("closeLightbox")
    .addEventListener("click", () =>
{
    lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", (event) =>
{
    if (event.target === lightbox)
    {
        lightbox.classList.add("hidden");
    }
});