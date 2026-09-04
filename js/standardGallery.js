const allImages = [];
const numGalleryImages = 95;

for (let i = 0; i < numGalleryImages; ++i)
{
    allImages.push(i);
}

populateGallery("gallery", allImages);
initializeLightbox("gallery");