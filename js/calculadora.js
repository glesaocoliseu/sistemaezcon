function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        if (expression.includes('%')) {
            expression = expression.replace(/(\d+)%/g, '($1 / 100)');
            expression = expression.replace(/(\d+)\/100/g, '($1 / 100)');
        }
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';
}
