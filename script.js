document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = '<span class="close">×</span><img class="modal-content" id="imgModal">';
    document.body.appendChild(modal);

    const modalImg = document.getElementById("imgModal");
    const closeBtn = document.querySelector(".close");

    function showImage(index) {
        
        currentIndex = index; 
    }



    if (prevBtn && nextBtn) { 
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    }


    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });


     closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });


   
    showImage(currentIndex);



});