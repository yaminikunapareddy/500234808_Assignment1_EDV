const form = document.getElementById('myForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.elements['name'].value;
    const address = form.elements['address'].value;
    const dob = form.elements['dob'].value;
    const email = form.elements['email'].value;

    // Basic form validation
    if (name === '' || address === '' || dob === '' || email === '') {
        alert('All fields are required.');
        return;
    }

    // Display success message
    successMessage.style.display = 'block';
    form.reset();
});
