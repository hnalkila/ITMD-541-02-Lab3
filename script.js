document.addEventListener('DOMContentLoaded', function() {
    const tipForm = document.getElementById('tipForm');
    const billTotal = document.getElementById('billTotal');
    const tip = document.getElementById('tip');
    const tipAmount = document.getElementById('tipAmount');
    const totalWithTip = document.getElementById('totalWithTip');

    // Event listener for input or change events
    tipForm.addEventListener('input', calculateTip);

    function calculateTip() {
        const bill = parseFloat(billTotal.value);
        const tipPercentage = parseFloat(tip.value);
        if (isNaN(bill)) {
            // Handle invalid input
            tipAmount.value = "Invalid Bill Amount";
            totalWithTip.value = "Invalid Bill Amount";
        } else {
            const tipValue = (bill * tipPercentage) / 100;
            tipAmount.value = tipValue.toFixed(2);
            totalWithTip.value = (bill + tipValue).toFixed(2);
        }
    }
});