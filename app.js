document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons button');
    const cards = document.querySelectorAll('.cards .card');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            this.classList.add('active');

            // Filter the cards
            cards.forEach(card => {
                if (filter === 'All') {
                    card.style.display = '';
                } else {
                    const cardType = card.getAttribute('data-name').toLowerCase();
                    if (cardType === filter.toLowerCase()) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});
