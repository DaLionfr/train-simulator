document.addEventListener("DOMContentLoaded", function() {
    const cities = [
        "Aracaju (SE)",
        "Belém (PA)",
        "Belo Horizonte (MG)",
        "Boa Vista (RR)",
        "Brasília (DF)",
        "Campo Grande (MS)",
        "Cuiabá (MT)",
        "Curitiba (PR)",
        "Florianópolis (SC)",
        "Fortaleza (CE)",
        "Goiânia (GO)",
        "João Pessoa (PB)",
        "Macapá (AP)",
        "Maceió (AL)",
        "Manaus (AM)",
        "Natal (RN)",
        "Palmas (TO)",
        "Porto Alegre (RS)",
        "Porto Velho (RO)",
        "Recife (PE)",
        "Rio Branco (AC)",
        "Rio de Janeiro (RJ)",
        "Salvador (BA)",
        "São Luís (MA)",
        "São Paulo (SP)",
        "Teresina (PI)",
        "Vitória (ES)"
    ]; 

   console.log(cities);



    function populateSelect(selectElementId, optionsArray) {
        const selectElement = document.getElementById(selectElementId);

        if (selectElement) {
            optionsArray.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                selectElement.appendChild(optionElement);
            });
        } else {
            console.error(`Select element with ID ${selectElementId} not found`);
        }
    }

    // Populate both select elements
    populateSelect('select1', cities);
    populateSelect('select2', cities);
});


document.getElementById('startSelect').addEventListener('change', animateTrain);
document.getElementById('endSelect').addEventListener('change', animateTrain);

function animateTrain() {
    const startCity = document.getElementById('startSelect').value;
    const endCity = document.getElementById('endSelect').value;
    
    // Find the correct path between the selected cities
    let path = document.getElementById('path1'); // Here you would dynamically select the correct path based on cities
    
    if (startCity !== endCity && path) {
        const train = document.getElementById('train');
        const pathLength = path.getTotalLength();
        
        // Reset any previous animation
        train.setAttribute('r', 5);
        train.setAttribute('cx', 0);
        train.setAttribute('cy', 0);
        
        // Animate the train
        train.style.transition = 'none';
        const startPos = path.getPointAtLength(0);
        train.setAttribute('cx', startPos.x);
        train.setAttribute('cy', startPos.y);
        
        setTimeout(() => {
            train.style.transition = `all ${pathLength / 100}px linear`;
            const endPos = path.getPointAtLength(pathLength);
            train.setAttribute('cx', endPos.x);
            train.setAttribute('cy', endPos.y);
        }, 100);
    }
}
