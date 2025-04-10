function checkScientific() {
    const input = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    // Regular expression untuk memeriksa angka ilmiah
    const scientificRegex = /^[+-]?(\d+(\.\d+)?|\.\d+)([eE][+-]?\d+)?$/;

    if (scientificRegex.test(input)) {
        result.textContent = `${input} Is a Scientific Number.`;
        result.style.color = 'green';
    } else {
        result.textContent = `${input} Not a Scientific Number.`;
        result.style.color = 'red';
    }
}
