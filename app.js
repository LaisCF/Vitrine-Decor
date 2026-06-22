document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE ALTERNÂNCIA DE ABAS ---
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabs = document.querySelectorAll('.tab-content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-target');
            navButtons.forEach(btn => btn.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // --- LÓGICA DE FILTRO DA GALERIA ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'todos' || filterValue === itemCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- LÓGICA DO MODAL (LIGHTBOX) ---
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgElement = item.querySelector('img');
            if (imgElement) {
                modal.style.display = 'block';
                modalImg.src = imgElement.src;
                modalImg.alt = imgElement.alt;
            }
        });
    });

    closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    // --- WHATSAPP ---
    const sendBtn = document.getElementById('send-whatsapp-btn');
    const messageInput = document.getElementById('whatsapp-message');

    if (sendBtn && messageInput) {
        sendBtn.addEventListener('click', () => {
            const numeroTelefone = "5548991318500"; // Insira seu número real aqui
            const mensagemUsuario = messageInput.value.trim();
            const mensagemFinal = mensagemUsuario !== "" ? mensagemUsuario : "Olá! Vim pelo seu site e gostaria de saber mais.";
            window.open(`https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemFinal)}`, '_blank');
        });
    }
});


