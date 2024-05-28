document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-button');
    const backButton = document.getElementById('back-button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('imageModal');
    const fullImage = document.getElementById('fullImage');
    const imageDescription = document.getElementById('imageDescription');
    const downloadLink = document.getElementById('downloadLink');
    const closeModalButton = document.getElementById('closeModalButton');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterImages(category);
        });
    });

    backButton.addEventListener('click', () => {
        filterImages('all');
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
        gallery.style.display = 'flex';
    });

    function filterImages(category) {
        galleryItems.forEach(item => {
            if (item.getAttribute('data-category') === category || category === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    window.showImageModal = function (imgElement) {
        const src = imgElement.src;
        const description = imgElement.nextElementSibling ? imgElement.nextElementSibling.textContent : '';
        fullImage.src = src;
        imageDescription.textContent = description;
        modal.style.display = 'flex';
        gallery.style.display = 'none';

        // Update download link with the clicked image's URL
        downloadLink.href = src;
    };
});
