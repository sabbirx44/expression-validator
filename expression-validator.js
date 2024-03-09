document.getElementById('validateBtn').addEventListener('click', function() {
    const option = document.getElementById('option').value;
    const input = document.getElementById('input').value.trim();
    let regex;
    let instruction;

    switch (option) {
        case 'email':
            regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
            instruction = 'Please enter a valid email address';
            break;
        case 'phone':
            regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
            instruction = 'Please enter a valid phone number (with country code)';
            break;
        case 'postcode':
            regex = /^\d{4}$/;
            instruction = 'Please enter a valid postcode (4 digits)';
            break;
        default:
            regex = null;
            instruction = 'Invalid option';
            break;
    }

    if (regex && regex.test(input)) {
        document.getElementById('result').textContent = 'Valid';
        document.getElementById('result').classList.remove('text-red-500');
        document.getElementById('result').classList.add('text-green-500');
    } else {
        document.getElementById('result').textContent = instruction;
        document.getElementById('result').classList.remove('text-green-500');
        document.getElementById('result').classList.add('text-red-500');
    }
});