

const gallery = document.getElementById("gallery");

for (let i = 0; i <= 90; ++i)
{
    const img = document.createElement("img");

    img.src = `assets/images/gallery/thumbs/IMG_${i}.jpg`;

    img.dataset.full = `assets/images/gallery/full/IMG_${i}.jpg`;

    img.loading = "lazy";

    gallery.appendChild(img);
}

const lightbox = document.getElementById("lightbox");

gallery.addEventListener("click", (event) =>
{
    if (event.target.tagName !== "IMG")
        return;

    lightboxImage.src = event.target.dataset.full;

    lightbox.classList.remove("hidden");
});

document
    .getElementById("closeLightbox")
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