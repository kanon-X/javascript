function addRow() {
            const name = document.getElementById('nameInput').value;
            const role = document.getElementById('roleInput').value;
            
            if(name && role) {
                const table = document.getElementById('staffTable').querySelector('tbody');
                const newRow = document.createElement('tr');
                
                newRow.innerHTML = `<td>${name}</td><td>${role}</td>`;
                table.appendChild(newRow);
                
                // Clear inputs
                document.getElementById('nameInput').value = '';
                document.getElementById('roleInput').value = '';
            } else {
                alert("Please fill in both fields");
            }
        }