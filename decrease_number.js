function decreaseCount() {
            const counterSpan = document.getElementById('counterValue');
            let currentValue = parseInt(counterSpan.innerText);
            counterSpan.innerText = currentValue - 1;
        }