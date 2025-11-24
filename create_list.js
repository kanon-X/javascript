function addListItem() {
            const text = document.getElementById('listInput').value;
            if(text) {
                const ul = document.getElementById('dynamicList');
                const li = document.createElement('li');
                
                li.innerText = text;
                // Req: Apply the same class to all list items
                li.classList.add('my-list-item'); 
                
                ul.appendChild(li);
                document.getElementById('listInput').value = '';
            }
        }