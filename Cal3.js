function calculate(operation) {
    const inputNumber = document.getElementById('inputNumber').value;
    const result = document.getElementById('result');
    let value = parseFloat(inputNumber);

    if (isNaN(value)) {
        result.textContent = 'Error, Ingresa un valor';
        return;
    }

    switch (operation) {
        case 'sqrt':
            result.textContent = Math.sqrt(value);
            break;
        case 'sin':
            result.textContent = Math.sin(value);
            break;
        case 'cos':
            result.textContent = Math.cos(value);
            break;
        case 'abs':
            result.textContent = Math.abs(value);
            break;
        case 'exp':
            result.textContent = Math.pow(value, 2); // Ejemplo de exponente
            break;
        case 'percent':
            result.textContent = value / 100;
            break;
        default:
            result.textContent = 'Operación no válida';
    }
}

function clearDisplay() {
    document.getElementById('inputNumber').value = '';
    document.getElementById('result').textContent = '';
}
