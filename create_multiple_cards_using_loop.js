function generateCards() {
            const container = document.getElementById('cardContainer');
            container.innerHTML = ''; // Clear previous if any

            const data = ['Product A', 'Product B', 'Product C', 'Product D'];

            data.forEach((item) => {
                const card = document.createElement('div');
                card.innerText = item;
                // Req: Apply same class to all
                card.classList.add('product-card'); 
                container.appendChild(card);
            });
        }